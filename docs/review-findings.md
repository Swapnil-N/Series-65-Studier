# Code Review — Series 65 Studier

Reviewer: external code reviewer
Date: 2026-04-22
Scope: branch claude/series-65-study-app-65Urn

## Executive summary
_In progress — populating as review proceeds. Early highlights:_

- Mock exam does NOT write Attempts, DailyActivity, or MissedItems — the 130-Q flagship flow feeds nothing downstream (readiness score, streak, missed queue). This is a ship-stopper.
- MissedReview does not persist any Attempt rows — missed-queue practice contributes zero to readiness math.
- cardId and questionId share a hash formula. Collision is possible for a short card whose `front` equals a question `stem` in the same subtopic, and `db.edits` / `db.bookmarks` key by `itemId` with no type discriminator — a collision misroutes patches.
- Timer math is genuinely Date.now-anchored, but several edge cases (NTP/DST, resume-prompt accounting, lastActivityTs heuristic) are subtler than the QA report admits.
- `computeReadiness` returns `overall: null` when any topic is insufficient — the plan says "topic reported but excluded from the weighted rollup until met", which reads as a partial rollup, not a null. Plan deviation.
- Wilson CI is computed over age-decay-weighted (fractional) counts — statistically loose and already flagged by QA as "approximation". Accept or document.

## Blockers
_In progress — see below._

## Major
_In progress — see below._

## Minor
_In progress — see below._

## Questions for the team
_In progress — see below._

## Passed with honors
_In progress — see below._

---

## Running findings (being fleshed out)

### B1 — Mock exam never writes Attempts / DailyActivity / MissedItems (BLOCKER)

File: `src/components/MockExam.tsx`, `src/routes/Mock.tsx` (no `db.attempts`, `db.missedQueue`, or `db.dailyActivity` writes anywhere in the mock flow).

What's wrong: when a user finishes a 130-question mock exam, the Scorecard renders, but not a single `Attempt` row is written to Dexie. That means:
- The mock never contributes to the readiness score (which reads `db.attempts`).
- The missed-queue does not absorb missed mock questions (plan: missed-queue "feeds a dedicated flashcard-style review session" — missed-queue is the single highest-leverage practice).
- `dailyActivity.questionsAnswered` never increments for the session. Streaks and daily goals are starved if the user primarily studies via mock exams.

Why it matters: the 130-Q exam is the headline feature. Its results are cosmetic until they feed the rest of the system. The plan's acceptance criteria for A10 include "Readiness score respects min-N=20… streak increments on qualifying activity… answering same question 3× in one day — only most recent counts" — none of which touches the mock today.

Suggested fix: in `Mock.tsx`'s `handleComplete` (or at submit time in `MockExam.tsx`), iterate `session.questionIds` / `session.answers`, lookup each question by id, and `db.attempts.add({ questionId, subtopicId, topicId, correct, mode: "mock", mockId: session.id, timestamp })`. Increment `dailyActivity.questionsAnswered` by the answered count. For incorrect answers, `db.missedQueue.put({ questionId, topicId, addedAt })`. Do this inside a single `db.transaction("rw", db.attempts, db.missedQueue, db.dailyActivity, …)` so a write crash doesn't leave a half-persisted exam.

### B2 — MissedReview never writes Attempts (BLOCKER-ish / MAJOR)

File: `src/components/MissedReview.tsx:91-115`.

What's wrong: `handleSelect` computes `correct`, bumps the per-session streak, and may delete the item from `missedQueue` on 2-in-a-row. It never writes to `db.attempts` or `db.dailyActivity`. Plan defines `Attempt.mode` as `"quiz" | "mock" | "missed"`; "missed" is meant to be a live mode that yields attempts. Practicing exclusively against the missed queue therefore contributes nothing to readiness, streak, or daily activity — the plan explicitly says this is the single highest-leverage practice.

Suggested fix: mirror `persistAttempt` from `Quiz.tsx`. On every answer: write an `Attempt` with `mode: "missed"`, increment `dailyActivity.questionsAnswered`. Only incorrect answers in missed-mode should NOT re-upsert into `missedQueue` (it already is in the queue); leave the existing row alone so `addedAt` isn't churned.

### B3 — cardId / questionId collision + untyped `edits` / `bookmarks` lookup (MAJOR, plausibly BLOCKER)

Files: `src/lib/ids.ts`, `src/lib/content.ts` (`loadContent`), `src/lib/db.ts` (edits, bookmarks).

What's wrong: `cardId(subtopicId, front)` and `questionId(subtopicId, stem)` both hash `subtopicId + "|" + normalizeText(x)` with the same key-space (first 12 hex of SHA-1). If a card `front` normalized equals a question `stem` normalized on the same subtopic — realistic ("What is CAPM?" as both a card and a pre-explanatory practice question) — the two IDs collide. `loadContent` treats `edits` as keyed by itemId alone:

```ts
const knownIds = new Set<string>([
  ...validLessons.map((l) => l.subtopicId),
  ...validCards.map((c) => c.id),
  ...validQuestions.map((q) => q.id),
]);
for (const edit of edits) {
  if (!knownIds.has(edit.itemId)) continue;
  if (edit.type === "lesson") lessonEdits.set(edit.itemId, edit.patch);
  else if (edit.type === "card") cardEdits.set(edit.itemId, edit.patch);
  else if (edit.type === "question") questionEdits.set(edit.itemId, edit.patch);
}
```

This is type-aware on the *edit row* but the Dexie schema keys `edits` and `bookmarks` by `itemId` alone. If a user edits card X, then edits question Y which has the same id, the second write upserts the first. That silently overwrites the user's edit of X. Similarly, `db.bookmarks.get(itemId)` can't distinguish a bookmarked card from a bookmarked question.

Suggested fixes (any of):
1. Namespace the hash: `cardId` prefixes `"c:"`, `questionId` prefixes `"q:"` into the digest input OR the returned string.
2. Make `edits` and `bookmarks` primary-key `[itemId+type]` so the type discriminates in Dexie.
3. Both.

The minimum-risk change is #1 (prefix), which doesn't require schema migration. Example: `sha1Hex12("c|"+subtopicId+"|"+normalize(front))`. **Note:** this will break every edit a user has made against the current dev stub, and any existing content regenerate will renumber every id. Should be done NOW, pre-Phase-5. After Phase 5 it's a migration.

### B4 — computeReadiness overall: plan says partial rollup, code returns null (MAJOR)

File: `src/lib/readiness.ts:218-233`.

Plan language:
> "Minimum N = 20 distinct questions per topic before that topic counts. Below that: 'insufficient data' — topic reported but excluded from the weighted rollup until met."

This says excluded from the rollup. Reads as: roll up only sufficient topics, reporting the partial score.

Code:
```ts
const allSufficient = perTopic.every((t) => t.sufficient);
if (!allSufficient) {
  return { perTopic, overall: null, sufficient: false };
}
```

Returns null overall until every one of the four topics is sufficient (≥ 20 distinct).

Why it matters: early in use (or in a topic-focused study session), the user sees per-topic bars but the headline overall score is permanently null. That defeats the "dashboard shows readiness" promise until they've answered 80 distinct questions across all four topics. 80 distinct questions is hours of work — the dashboard is dead the whole time.

Suggested fix: return a weighted overall over only sufficient topics, renormalising weights to sum to 1 among them. Surface `sufficient` as a separate flag (true only when all four are sufficient). Dashboard can show a disclaimer "based on topics 1, 2 so far" until all four are in.

### M1 — Wilson CI over weighted counts (MAJOR / acknowledged)

File: `src/lib/readiness.ts:192`.

Author comment acknowledges: "Wilson expects integer trial counts; weighted counts are a reasonable approximation here". It is not. Feeding a fractional `n` into Wilson produces a CI whose width depends arbitrarily on how the age-decay halves the sample, which is an artefact of aging, not statistical uncertainty. For example, if all 20 distinct attempts are >30 days old, `weightedTotal = 10`, and the Wilson half-width will be ~1.4× the "correct" half-width computed on 20 raw observations, which is misleading. The CI is also what the plan specifies, and the plan implicitly assumes raw counts ("Wilson 95% CI shown alongside the point estimate").

Suggested fix: compute Wilson on raw `(correctCount, distinctN)` — the unweighted raw last-50 — and keep the age-decay weighting for the point-estimate value only. Or, cleaner: display the point estimate as age-decay-weighted and the CI bounds as the raw Wilson CI; the user sees "recent performance ≈ 83% (raw CI 76-90%)" with both signals honest.

### M2 — loadContent called from many routes; fetches ALL edits every time (MINOR/MAJOR)

File: `src/lib/content.ts` + every route that calls `loadContent()` inside useEffect on mount.

Every route mount re-runs: parse every lesson/card/question through Zod, pull all edits, build patch maps. For a 5000-question corpus that is not free. More importantly, every navigation between `/quiz`, `/mock`, `/cards`, `/learn` triggers a fresh load. Memoising at the module level (or through a lightweight singleton Promise) would avoid this.

Suggested fix: have `loadContent()` memoise its result + a `bustCache()` for when edits change. Invalidate on EditPencil write.

### Q1 — Visibility handler does not recompute / persist `pausedMs` (QUESTION)

File: `src/components/MockExam.tsx:149-157`.

The comment is explicit: "don't touch pausedMs here — the 180-minute timer on a real exam does not pause just because you checked another app." Accept that design choice. But then the `BACKGROUND_WARN_MS` prompt is the only mechanism that credits pausedMs, and only for the **modal decision interval** (the gap between when the user first saw the modal and when they clicked Resume). The actual time they were away is NOT credited. So on resume the user sees 150 minutes remaining, clicks "Resume" five seconds later, and the timer stays at 150 minutes (correct per design).

Question: is this really what we want, or should the prompt explicitly credit the backgrounded gap too ("we paused the clock while you were away")? Either is defensible; the current behaviour is safer for exam realism, but surprising for a study app. Flag for the team to confirm.

### Q2 — lastActivityTs is always startedAt on resume (QUESTION/BUG)

File: `src/routes/Mock.tsx:130`.

`<MockExam lastActivityTs={activeSession.startedAt} />` passes the session's *startedAt* as the last activity timestamp. On a resume 90 minutes in, the delta = 90 min, which triggers the BACKGROUND_WARN_MS prompt every time, even if the kill was 30 seconds ago (the user hit reload). This is over-eager — the UX will prompt "You were away for 90 minutes" even when a reload happened 10 seconds after the last action.

Fix: track a real `lastActivityAt` on the session (bump on every answer submit and visibilitychange), persist it, and pass *that* in on resume. Add it as a field on `MockExamSession` (or keep it in a separate sessionStorage key). Either way, today's logic is incorrect.

---
