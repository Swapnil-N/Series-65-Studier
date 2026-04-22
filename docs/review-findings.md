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

## Pass 2 (post B1-B4 fix)

### Regression check on B1-B4 fixes

#### B2 regression — MissedReview deletes from missedQueue OUTSIDE the attempt+dailyActivity transaction (MAJOR)

File: `src/components/MissedReview.tsx:117-152`.

The fix wraps `attempts.add` + `dailyActivity.put` in a single `db.transaction("rw", db.attempts, db.dailyActivity, …)`. Good. But the `db.missedQueue.delete(qid)` call on line 123 (the 2-in-a-row retire) runs *before* that transaction starts and is not in any transaction at all. Two-failure window:

1. `missedQueue.delete` succeeds, then `attempts.add` throws (storage full, IDB closed, etc.) → the question is gone from the missed queue but the attempt-row that earned its retirement is never persisted. Worse, the user just answered correctly but the readiness denominator never sees it.
2. The `delete` itself can race with another tab also updating missedQueue.

The B1 fix in `persistMockCompletion` deliberately includes `missedQueue` in the same `transaction("rw", …)` for exactly this reason. B2 should do the same — add `db.missedQueue` to the transaction tables and move the delete inside.

Suggested fix:
```ts
await db.transaction("rw", db.attempts, db.dailyActivity, db.missedQueue, async () => {
  await db.attempts.add({…});
  // … dailyActivity put …
  if (correct && nextStreak >= 2) {
    await db.missedQueue.delete(qid);
  }
});
```
Then drop the outer `db.missedQueue.delete` call.

#### B2 regression — `streakByQid` is read inside `handleSelect` callback but is a stale closure (MAJOR)

File: `src/components/MissedReview.tsx:118, 154`.

`handleSelect` reads `streakByQid[qid]` directly and decides whether to retire. `streakByQid` is in the deps list, but inside the same render the user can rapid-double-tap (the await on `db.transaction` takes a few ms). The `revealed` guard (`if (revealed) return`) protects against re-entrancy, true. So the stale-closure issue is mitigated — only one path runs per card. OK, this one's actually safe. (Downgrading to non-finding.)

#### B3 regression — non-collision test passes; broader callsites OK (no regression)

Searched `git grep` for all `cardId(` and `questionId(` callers and for any code that compared a `cardId` against a `questionId` (e.g., reused in a single Set, used as a Dexie key against a non-type-aware table). The new `c|`/`q|` prefix is purely additive in the SHA-1 pre-image — every consumer treats the result as an opaque 12-hex string, so no callsite breaks. Test was correctly flipped from `toBe` → `not.toBe`. The test in `ids.test.ts:64-68` is solid — uses identical inputs `("1.1", "foo")` for both functions, asserts non-collision. No regressions found.

Note: this is a **silent breaking change** for any user with existing `db.edits` / `db.bookmarks` / `db.cardState` / `db.attempts` rows from before this commit — every card and question id in the bundle will now be a different hash. So edits will appear as "stale", `cardState` rows will all be orphaned, and `missedQueue.questionId` rows will not match any current question. There is no migration. Acceptable pre-Phase-5 (no real users yet) but the team needs to know — and a `db.version(2)` migration that wipes orphaned rows would be polite.

#### B4 regression — `studyNextTopic` for partial rollup may now recommend a topic the user has already mastered (MINOR)

File: `src/lib/readiness.ts:269-290`.

When only some topics are sufficient (the new partial-rollup case), `studyNextTopic` picks the lowest-scoring sufficient topic. But in early-use the lowest-scoring sufficient topic might be at 95% while the insufficient topics have n=0 attempts. Recommending the user keep drilling the topic they're already crushing — instead of one of the three they haven't even started — is wrong. The plan's "Drives 'study next' rec: lowest-scored topic meeting N≥20, **else whichever topic has the fewest attempts**" implicitly assumed all-or-nothing. With partial rollup, the rule should be: prefer an insufficient topic with n=0 (or n<MIN_N) over a sufficient topic above BUFFER (80%).

Suggested fix: prepend a check in `studyNextTopic`: `const fresh = score.perTopic.find(t => !t.sufficient && t.n === 0); if (fresh) return fresh.topicId;`. Or more nuanced: when any topic has n=0 and any other topic is above BUFFER, return the n=0 topic.

#### B4 regression — Home dashboard does not surface contributingTopics caveat to user (MINOR)

File: `src/routes/Home.tsx:102-138`.

The B4 commit added `contributingTopics` to `ReadinessResult`, but `Home.tsx` does not consume it. The dashboard shows the partial-rollup overall score (e.g., "73%" derived from one sufficient topic 1) with no visual indicator that it's partial. The "Not enough data yet" disclaimer only fires when `overall === null`. A user with one topic at 75% and three topics at n=0 will see a green "73%" headline that they will misread as a real readiness number. The plan's spec implies a disclaimer ("Dashboard can show a disclaimer 'based on topics 1, 2 so far'" — exact suggested fix in Pass 1).

Suggested fix: when `readiness.contributingTopics.length < 4`, render a small caveat below `overall`: `Based on topic${contributingTopics.length>1?"s":""} ${contributingTopics.join(", ")} only. Other topics need ≥20 attempts to count.`

#### B1 regression — `persistMockCompletion` Dexie 4-table transaction (no regression)

Dexie's `transaction()` accepts a variadic list of tables: `transaction(mode, ...tables, scopeFn)`. 4 tables is fine. The typing `database: Pick<Series65DB, …> & { transaction: Series65DB["transaction"] }` resolves the bound method type correctly because `Series65DB["transaction"]` retains its overload signatures. Verified via `npx tsc --noEmit` passing in the build (commit message "build green"). No regression.

#### B1 regression — `topicOf` inside missedQueue.put loop is redundant (MINOR / cleanup)

File: `src/lib/mockExam.ts:292-302`.

Inside the `for (const id of missedIds)` loop, the code re-calls `topicOf(q.subtopicId)` even though the same id was already validated and topic-derived earlier in the function (line 268-269). Harmless but wasteful. Cleaner: build `missedRows: MissedItem[]` alongside `attemptRows` in the first pass, then `bulkPut` them.

#### B1 regression — Race between MockExam's own status="completed" persist and `persistMockCompletion`'s transaction (BLOCKER)

Files: `src/components/MockExam.tsx:177-178, 208-209`; `src/routes/Mock.tsx:112-118`; `src/lib/mockExam.ts:283-313`.

`MockExam.tsx`'s `handleNext` (last question) and auto-submit branch both do:
```ts
const next = updateSession((prev) => ({ ...prev, status: "completed" }));  // L177/208
onComplete?.(next);                                                          // L178/209
```
`updateSession` synchronously calls `void persist(next)` which fires `database.mockSessions.put(next)` — a write OUTSIDE any transaction, returning a Promise nobody awaits. Then `onComplete?.(next)` triggers `persistMockCompletion` in `Mock.tsx`, which opens a Dexie `transaction("rw", mockSessions, attempts, missedQueue, dailyActivity, …)` and inside *also* does `database.mockSessions.put({ ...session, status: "completed" })`.

Two writes hit `mockSessions` for the same session; Dexie serialises them but the order is non-deterministic. Worse: if the unawaited `persist(next)` succeeds and the transaction's body throws (or is aborted by IDB blocking), you end up with a `mockSessions` row marked `completed` while the matching `attempts`/`missedQueue`/`dailyActivity` writes never happened — exactly the corruption mode B1 was meant to prevent. Not as bad as the original B1 (you do get "completed" written), but you don't get the rest, and the user has no signal that downstream state failed to persist.

The `persist` call also can't fail loudly: it's wrapped in `try { … } catch {}` (L119-121).

Suggested fix (any of):
1. In `MockExam.handleNext`/auto-submit: do NOT call `updateSession({status:"completed"})`. Instead set a local "submitting" flag, call `onComplete(prev-with-status-completed)`, and let the parent's `persistMockCompletion` be the only writer that promotes status.
2. Or: have `persistMockCompletion` use `transaction("rw!")` (auto-aborting) and have the parent surface failures, then have MockExam's `persist` skip mockSessions writes when `status === "completed"`.

Option 1 is cleaner. As-is, this is a **silent partial-write hazard on every successful mock submission** — the very class of bug B1 was filed against.

### Additional blockers

#### B5 — MissedReview `missedQueue.delete` outside transaction (see B2 regression above)

(See "B2 regression" item — escalating because it's a fresh introduction in the fix and creates the exact kind of partial-write window the reviewer flagged in B1/B2.)

#### B6 — Mock-completion status race (see B1 regression above)

Cross-listed for visibility — same root cause class as B1 but reintroduced by the way MockExam still persists session state itself.

### Additional major

#### M3 — `navigator.storage.persist()` only fires when user opens Settings (MAJOR)

File: `src/routes/Settings.tsx:151-172`; `src/main.tsx:9`.

`main.tsx` calls `getSettings().then(applyAppearanceSettings)` on boot, but `navigator.storage.persist()` lives ONLY inside `Settings`'s useEffect. A user who installs the PWA and uses it normally for a week — never visiting Settings — has no persistence request lodged. The plan section "Service worker + offline durability" reads: "`navigator.storage.persist()` on first launch (iOS ignores, but we try)". That is "first launch", not "first time the user happens to open Settings".

Suggested fix: move the `navigator.storage.persist()` call into `main.tsx` (or a small helper invoked from there) so it fires on every launch — Chrome will return cached "true"/"false" cheaply if previously decided.

#### M4 — Settings export does NOT validate per-row shape; trusts file (MAJOR)

File: `src/routes/Settings.tsx:109-116, 99-107`.

`isStateExport` only checks `version === 1` and that each table key is an Array. It does NOT validate row shape. `restoreAll` then `bulkPut`s the rows directly into Dexie. A malformed (or maliciously crafted) export file can:

- Insert `Attempt` rows with `topicId: "5"` (not in TopicId union) → readiness math breaks silently (filter excludes them, so user just sees lower n).
- Insert `mockSessions` rows with `status: "weird"` → resume banner logic falls through.
- Insert `settings` rows with `value: { fontScale: NaN }` → `--font-scale: NaN` → font collapses.
- Most damagingly: insert `attempts` with a numeric `id` collision against existing rows → `bulkPut` overwrites them silently (autoincrement keys are user-controllable in import).

Suggested fix: validate every row through the same Zod schemas that `loadContent` uses, OR add `StateExportSchema` that captures the table shapes. Reject the import on first invalid row with the path; do not let partial rows poison the DB.

#### M5 — Dexie schema lists `mockSessions: "id, status, startedAt"` but `MockExamSession` carries no FK back to attempts; orphan risk on session deletion (MINOR/MAJOR)

File: `src/lib/db.ts:54`; `src/lib/mockExam.ts:278`.

Attempts written by `persistMockCompletion` carry `mockId: session.id`. If the user later deletes (via import/replace) or the row is pruned, attempts still reference a non-existent `mockId`. Nothing currently relies on the back-pointer (readiness reads `attempts.timestamp`, not `mockId`), but:

- The plan defines `Attempt.mockId` for use by — exactly what? It's not consumed anywhere I can find in `src/`. Search confirms: `grep -rn "mockId" src/` returns only the type declaration and the write site. Dead field, currently. Document or remove.

Suggested fix: either consume `mockId` (e.g., a "review this mock" view that filters attempts by mockId), or remove the field. As-is it's misleading future-tooling bait.

#### M6 — Settings `applyAppearanceSettings` boot path can paint the wrong theme (FOUC) (MINOR/MAJOR)

File: `src/main.tsx:9`; `src/routes/Settings.tsx:58-73`.

`getSettings()` is async (Dexie). React renders before it resolves. So the first paint uses the default theme (no `.dark`, no high-contrast, fontScale=1). Once Dexie returns, classes flip — this is a flash of unstyled content (FOUC). On a phone with system dark mode + the user picked dark explicitly, they will see a one-frame white flash on every cold launch.

Suggested fix: store the resolved appearance preferences in `localStorage` synchronously alongside Dexie (or write them as a `<script>` tag inlined into `index.html` during build). Common pattern: a tiny script in `<head>` that reads from `localStorage` and adds `.dark`/`.high-contrast` to `<html>` before React mounts.

### Additional minor

#### m1 — Two YYYY-MM-DD helpers duplicated across files (MINOR / cleanup)

Files:
- `src/lib/mockExam.ts:231-234` (`dateKeyOf`)
- `src/components/MissedReview.tsx:12-18` (`todayKey`)
- `src/routes/Quiz.tsx:45-51` (`toDateKey`)
- `src/routes/Settings.tsx:39-45` (`today`)
- `src/lib/streak.ts` (`dateKey` — already exported, used in Home)

Five implementations of the same local-time YYYY-MM-DD formatter. Consolidate to a single `dateKey(now)` exported from `src/lib/streak.ts` (already there). Cosmetic but it's drift bait — change the timezone handling in one and the others lag.

#### m2 — `import` statement *after* function declarations in MissedReview.tsx (MINOR / lint)

File: `src/components/MissedReview.tsx:1-19`.

`import { db } from "../lib/db";` and `import { loadContent } from "../lib/content";` appear at line 19-20, AFTER local function declarations on lines 5-18. ES module hoisting means it works, but no linter would let that pass intentionally. Looks like an automated edit that didn't tidy. Move imports to the top of the file.

#### m3 — `loadContent`'s console.warn fires in production (MINOR)

File: `src/lib/content.ts:42-44, 84`.

`console.warn` for stale edits / dropped invalid items has `// eslint-disable-next-line no-console` but is unconditional. On a corpus with hundreds of entries, a single bad item (e.g., reviewer's edited text) will spam the console on every loadContent call (which fires per-route on mount). Gate behind `import.meta.env.DEV`.

#### m4 — Question recording in Quiz: `persistAttempt` is NOT in a Dexie transaction (MINOR)

File: `src/routes/Quiz.tsx:115-142`.

Same partial-write window: three `db.…put/add` calls in sequence with no transaction wrapping them. If `attempts.add` succeeds and `dailyActivity.put` throws, the daily count diverges from the attempt log. Same fix as the B1/B2 transaction: wrap in `db.transaction("rw", db.attempts, db.dailyActivity, db.missedQueue, …)`.

This was true before the fix too (so technically not a regression of the fix), but it's the same class of bug B1/B2 patched and was missed by the reviewer's first pass — it's the third attempt-writer in the codebase and got no transaction.

#### m5 — Mock.tsx `handleAbandon` writes mockSessions outside transaction; OK because it's the only write (no finding, but contrast)

`Mock.tsx:120-123` writes `mockSessions.put(…, status:"abandoned")` outside a transaction — fine because it's a single write.

#### m6 — `EditPencil` Clear-override is a single click with no confirm and a destructive verb (MINOR)

File: `src/components/EditPencil.tsx:252-261`.

The "Clear override" button is red, sits next to "Save", and one tap permanently deletes the user's edit. No `confirm()`, no two-step. On a phone with a thumb that fat-fingers the leftmost button, this destroys their edit. Settings' "Replace local data" import has a confirm modal — Clear-override deserves the same treatment, or at least a visible undo affordance.

Suggested fix: long-press to confirm, or a 5-second "Undid clear" toast, or a real confirm dialog.

#### m7 — `<button` icon-only audit — pencil icon button has aria-label (PASS)

EditPencil's pencil button (line 199-210) has `aria-label="Edit this item"` and an `sr-only` "Edit". Good. Other icon-only buttons (TabBar) likely OK; check below.


