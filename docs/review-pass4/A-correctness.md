# Pass-4-A — Correctness & math

Independent verification of correctness/math claims after three prior review passes.
File:line citations refer to the working tree on branch `claude/series-65-study-app-65Urn`.

## Plan fidelity

### F1. Plan says `sha1(subtopicId + "|" + normalize(...))` — code adds `c|` / `q|` prefix (DRIFT, accepted)
Severity: MINOR (documentation drift; behaviour intentional)
Location: `src/lib/ids.ts:23-35` vs `docs/IMPLEMENTATION_PLAN.md:67-70`.
The plan's normative ID rule is `cardId = sha1(subtopicId + "|" + normalize(front))[:12]` (no `c|`/`q|` prefix). The implementation prepends `c|` for cards and `q|` for questions, presumably so a card and a question with identical subtopicId+normalised front/stem don't collide in the merged `edits` table where `itemId` is the bare hash. That's the right call for correctness, but the plan was never updated to match — this leaves the contract ambiguous. Suggested fix: amend `IMPLEMENTATION_PLAN.md` "Stable IDs" section to add the `c|`/`q|` prefix, so the assigned reviewer's verification rule cited in the prompt ("confirm prefix is correct") is grounded in the plan.

### F2. Dexie schema and types match the plan exactly
Severity: NONE
Location: `src/lib/db.ts:46-56`, `src/types/state.ts`, `src/types/content.ts`.
Dexie v1 store strings match the plan one-for-one. `MockExamSession` adds an optional `lastActivityAt` field that is documented in code (state.ts:67-73) — this is an additive change for the resume-prompt logic and is consistent with the plan's intent ("never always trigger the prompt"). Typing of `answers: (0|1|2|3|null)[]`, `status: "active"|"completed"|"abandoned"`, all match. No drift.

### F3. Constants match plan
Severity: NONE
- `MIN_N_PER_TOPIC = 20` ✔ (`src/lib/readiness.ts:17`).
- `dedupe window = 7d` ✔ (`src/lib/readiness.ts:44, 153`).
- `age decay at 30d threshold` ✔ (`src/lib/readiness.ts:34`); 0.5× weight for older ✔ (`src/lib/readiness.ts:67-73`).
- NASAA weights `[0.15, 0.25, 0.30, 0.30]` ✔ (`src/lib/readiness.ts:26-31`).
- `MOCK_DURATION_MS = 180 * 60 * 1000` ✔ (`src/lib/mockExam.ts:15`).
- `PASS_THRESHOLD = 72.5` ✔ (`src/lib/mockExam.ts:18`).
- `TOPIC_COUNTS = {20, 32, 39, 39}` summing to 130 ✔ (`src/lib/mockExam.ts:7-12`).
- FSRS target retention 0.9 default ✔ (`src/lib/srs.ts:79`); cram cap 7d ✔ (`src/lib/srs.ts:21, 91-97`).
- Last-3-mock exclusion ✔ (`src/lib/mockExam.ts:131-144`, default `lastK = 3`).

### F4. `getExcludedIds` includes `status === "active"` sessions in the exclusion set (DRIFT, MINOR)
Severity: MINOR
Location: `src/lib/mockExam.ts:129-144`.
The plan says: *"draws 20/32/39/39 from the pool, excluding `questionId`s used in the **last 3 mock sessions**."* The implementation excludes any session whose `status !== "abandoned"` — which includes `active` (in-progress) sessions in addition to `completed`. Edge case: if a user starts a mock, kills the tab, and immediately starts a NEW one before the old one is abandoned, the new mock's pool excludes 130 ids the user never actually saw answered. With three rapid kill+restart cycles plus a typical reviewed pool size, this pushes some topic buckets below 20/32/39/39 and `composeExam` will fall back to "relax excluded" (which works) but the intent of "last 3 mocks" is "last 3 *completed* mocks." Suggested fix: filter to `s.status === "completed"` only — the resume-prompt logic and `Mock.tsx` handle the active resume case separately, so active sessions should not also occupy an exclusion slot.

## Math walk-through

### M1. Wilson half-width is misleading at boundary clamps (MINOR)
Severity: MINOR
Location: `src/lib/readiness.ts:90-116`.
Hand walk-through for (correct=20, total=20) at z=1.96:
  p̂ = 1.0; z² = 3.8416; denom = 1 + 3.8416/20 = 1.19208.
  center = (1 + 0.09604)/1.19208 ≈ 0.91944
  margin = 1.96 * sqrt((0 + 0.04802)/20) / 1.19208 ≈ 1.96 * 0.04900 / 1.19208 ≈ 0.08056
  unclamped lower ≈ 0.83889, unclamped upper ≈ 1.00056
  clamped: lower = 0.83889, upper = 1.0
  reported halfWidth = (1.0 − 0.83889)/2 = **0.08056** → `8.06%`.
Since the upper was clamped, the actual returned `halfWidth` is no longer (true_upper − true_lower)/2. The same pattern appears at `(0, 20)` where the lower is clamped to 0 and `halfWidth` becomes (0.16111 − 0)/2 = 8.06%. In both cases the magnitude happens to roughly match the unclamped margin, so the practical UX impact is small, but: (a) when the point estimate is near 0 or 100, the *symmetric* half-width displayed is misleading because the CI is no longer symmetric; (b) `point` (= p̂) and Wilson `center` diverge and there is no test verifying the divergence. Suggested fix: when either bound is clamped, expose `lower` and `upper` directly and stop computing a symmetric `halfWidth`; the chart can still draw an asymmetric error bar from those.

### M2. Walk-through: 10 correct ≤30d + 5 wrong ≤30d + 5 correct >30d (CONFIRMED MATCH)
Severity: NONE
Location: `src/lib/readiness.ts:147-206`.
Hand-built input, all distinct questionIds:
  10 correct within 30d (weight 1.0 each)
  5 wrong  within 30d (weight 1.0 each)
  5 correct from 60d ago (weight 0.5 each)
Distinct n = 20 → sufficient.
weightedCorrect = 10*1.0 + 5*0.5 = 12.5
weightedTotal   = 10*1.0 + 5*1.0 + 5*0.5 = 17.5
point = 12.5 / 17.5 * 100 = 71.43%
For Wilson: rawCorrect = 10 + 5 = 15, rawTotal = 20.
  p̂ = 0.75; z² = 3.8416; denom = 1.19208
  center = (0.75 + 0.09604)/1.19208 ≈ 0.70972
  margin = 1.96 * sqrt(((0.75)(0.25) + 0.04802/20) / 20) / 1.19208 ≈ 1.96 * sqrt((0.1875 + 0.002401)/20) / 1.19208
        ≈ 1.96 * sqrt(0.00949505) / 1.19208 ≈ 1.96 * 0.09745 / 1.19208 ≈ 0.16022
  lower ≈ 0.5495, upper ≈ 0.8699 → halfWidth ≈ 16.02% (after *100 conversion).
Code path matches: `wilsonInterval(15, 20)` → ~16% half-width; point uses the age-decay-weighted 71.4% value. Implementation is correct against the spec it carries.

### M3. computeReadiness partial-rollup walk-through: matches spec (CONFIRMED)
Severity: NONE
Location: `src/lib/readiness.ts:231-261`.
Two topics sufficient:
  Topic 1 (weight 0.15) at 80% point.
  Topic 2 (weight 0.25) at 60% point.
Renormalised weights: 0.15/0.40 = 0.375 and 0.25/0.40 = 0.625.
overall = 80*0.375 + 60*0.625 = 30 + 37.5 = 67.5%.
Walking the code: `sufficient` filters to t1 and t2, `weightSum = 0.40`, `overall += 80*(0.15/0.40) + 60*(0.25/0.40) = 30 + 37.5 = 67.5` ✔.
Also `contributingTopics = ["1","2"]`, `sufficient = false` (allSufficient is false because length !== 4). Matches the prompt's predicted 67.5.

### M4. scoreMock null-answer semantics: counted in denominator, not numerator (CONFIRMED, but inconsistent with `persistMockCompletion`)
Severity: MINOR
Location: `src/lib/mockExam.ts:181-225` vs `src/lib/mockExam.ts:243-318`.
`scoreMock` increments `entry.total` and `overallTotal` BEFORE the answer-check, so unanswered slots (`answers[i] === null`) count toward the denominator but not the numerator — i.e., **counted as wrong** for the displayed percentage. This is reasonable for an exam-realism scorecard (130 questions, you must answer to score).
However, `persistMockCompletion` (line 261-280) `continue`s on `ans === null`, so unanswered questions yield NO `Attempt` row, NO `missedQueue` insertion, and NO `dailyActivity.questionsAnswered` increment.
Net effect: a user who answers 100/130 sees scorecard `Y%` of 130, but readiness pipeline only sees 100 attempts and missed-queue only catches their 100-answer wrongs. The two views disagree on what "answering the mock" means.
Suggested fix: pick one. Either (a) `scoreMock` should also skip nulls so the displayed pct = correct / answered (what most LMS apps do), OR (b) `persistMockCompletion` should write null-answer rows as `correct: false` so readiness sees the dings. The plan is silent; document the choice or normalise.

## Mock timer correctness

### T1. Visibility-handler + resume-prompt double-credits pausedMs (MAJOR)
Severity: MAJOR
Location: `src/components/MockExam.tsx:163-180` (visibility handler) + `:301-317` (Resume click).
Concrete scenario:
- t=0  resumePrompt becomes "awaiting", `promptEnteredAtRef.current = 0`.
- t=1  user backgrounds the tab (e.g., notification banner triggers visibilitychange). The handler runs `hiddenAtRef.current = now()`. Note it does NOT gate on `resumePrompt !== "awaiting"`, only on `status === "active"`.
- t=11 (10 min later) user returns. Handler computes `gap = 10*60_000` and runs `updateSession(prev => ({…, pausedMs: prev.pausedMs + 10*60_000}))`.
- t=12 user clicks Resume. The button computes `pauseDelta = now() - promptStart = 12*60_000` and adds it to pausedMs.
Total credit: 22 min of pausedMs from a 12-min away interval. The user effectively gets ~10 min of extra exam time per hide/show cycle while the modal is up.
Suggested fix: in `onVis`, gate the hidden-gap-crediting branch on `resumePrompt !== "awaiting"`, OR have the Resume click reconcile against `hiddenAtRef`'s already-credited time. Cleanest: when `resumePrompt === "awaiting"`, don't run any pausedMs accumulation in the visibility handler — the modal owns the pause clock.

### T2. Rapid hidden→shown→hidden→shown is fine (CONFIRMED)
Severity: NONE
Location: `src/components/MockExam.tsx:163-180`.
Trace:
1. Hidden at t=10 → hiddenAtRef = 10, persist.
2. Shown at t=12 → gap=2, pausedMs += 2, hiddenAtRef = null.
3. Hidden at t=14 → hiddenAtRef = 14, persist.
4. Shown at t=15 → gap=1, pausedMs += 1, hiddenAtRef = null.
hiddenAtRef is correctly reset on each show before being reassigned on the next hide. No accumulation bug here.

### T3. Background pause not preserved across kill+relaunch (MINOR)
Severity: MINOR
Location: `src/components/MockExam.tsx:163-180` and `Mock.tsx`'s resume handler.
The visibility handler accumulates pausedMs while the tab is hidden, but ONLY if the same mount sees both the `hidden` and `visible` events. If the user backgrounds the tab and then iOS kills the tab without the user ever returning to it, the relaunch instantiates a fresh `MockExam` with `hiddenAtRef === null` and the gap is lost. The persisted `pausedMs` reflects only the value at the time the tab was hidden (before the gap was known).
Result: a user who studies for 30 min, backgrounds the tab to take a phone call, has Safari kill the tab, and resumes the next morning sees their remaining time decremented by ~16 hours of wall-clock time even though they were "away" not "studying."
This is partially mitigated by the resume-prompt (BACKGROUND_WARN_MS) but the prompt only credits the modal-decision interval, not the actual away duration. The plan permits this design but it's worth documenting that the in-tab pause feature is fragile against iOS-managed tab eviction. Suggested fix: at hide-time, persist `pausedMs` projected forward by some maximum sanity window OR persist `hiddenAtRef` itself (`session.hiddenAt`) so a fresh mount can finalise the gap on resume.

### T4. Cold start, kill+relaunch, lastActivityAt fallthrough (CONFIRMED FIXED)
Severity: NONE
Location: `src/components/MockExam.tsx:96-105`, `Mock.tsx:42-110`.
Cold start: `Mock.tsx` constructs a session with no `lastActivityAt`. `MockExam`'s prompt-init falls through `(undefined ?? undefined ?? startedAt)`. Since `startedAt = Date.now()` at construction, `delta` is sub-tick and prompt stays "none". ✓
Resume after answer: persisted `lastActivityAt` is the latest answer/next time. Delta is bounded by actual user-away time, prompt fires correctly above 10 minutes. ✓
Resume on never-answered session that's been sitting > 10 min: lastActivityAt undefined → fallthrough to startedAt → delta > 10 min → prompt. Defensible (user has been away from a started-but-untouched exam) but worth noting this edge case is not covered by a test.

### T5. Auto-submit at zero — race with manual Next on last question (MINOR / theoretical)
Severity: MINOR
Location: `src/components/MockExam.tsx:194-202` and `:226-256`.
`autoSubmitRef.current` guards the auto-submit useEffect from re-firing. ✓
But the manual `handleNext` last-question path does NOT consult `autoSubmitRef`, and the auto-submit useEffect does not consult any "manual submit pending" flag. Worst-case race: `remainingMs` falls to 0 between render commit and the user's click handler resolving. The click handler synchronously sets status to "completed" via `updateSession`, then calls `onComplete`. Now the queued auto-submit effect (from the previous render's pending status change) runs:
- It checks `session.status !== "active"` first — but `session` here is the captured state from the effect's render, not `sessionRef`. If the effect was scheduled in render N (where status was active) and committed before the click-induced render N+1, the effect's `session` closure still has `status === "active"` at the time of execution. It would proceed to call `onComplete` a second time.
React's actual scheduling does prevent this in practice: setState inside an event handler synchronously flushes effects of the prior commit before the click-induced re-render. The auto-submit effect's deps include `session.status`, and the effect from render N would have been queued AFTER render N committed, run before any new event. So when the click fires on render N+1, render N's effect has already run (with status=active), but `autoSubmitRef.current` was NOT yet set (only set when remainingMs reached 0 in that render's effect).
Concrete worry: if remainingMs reached 0 in render N AND the click fires before the effect schedules. The effect does run after commit, sets autoSubmitRef true, calls onComplete. Then the click handler sees status=completed (but its closure was bound to render N where status=active) and proceeds to also call onComplete.
Suggested fix: guard `handleNext` last-question branch with `if (autoSubmitRef.current) return;` and assert `if (session.status !== "active") return;` (already present at top of handleNext — that catches it). Actually `handleNext` does check `if (session.status !== "active") return;` at line 227. So the handleNext closure on the click will see `session.status === "active"` (closure-bound) and bypass that check. Then it sets the status. Then onComplete is called. Then auto-submit effect from prior render runs, sees `session.status` from its closure — also "active" — and ALSO calls onComplete.
Net: in a pathological 16ms window, `onComplete` (and `persistMockCompletion`) can fire twice. The transaction's `bulkAdd` would fire twice → duplicate Attempt rows for every answered question. Requires the click and the timer-zero render to land within one frame. Unlikely but observable. Suggested fix: have `MockExam` track an `onCompleteFiredRef` set true on first call.

### T6. B6 fix verification — `persist` short-circuits on completed; transaction owns mockSessions write (CONFIRMED)
Severity: NONE
Location: `src/components/MockExam.tsx:120-135` and `src/lib/mockExam.ts:281-312`.
`persist` returns early when `next.status === "completed"`, preventing the racing un-awaited Dexie write. ✓
`persistMockCompletion` opens `transaction("rw", mockSessions, attempts, missedQueue, dailyActivity)` and writes `mockSessions.put({...session, status: "completed"})` inside it. ✓
The B6 fix is correctly in place. Verified by reading both call sites.

### M5. computeRemainingMs has no upper cap → can exceed MOCK_DURATION_MS (MINOR)
Severity: MINOR
Location: `src/lib/mockExam.ts:156-162`.
`return Math.max(0, MOCK_DURATION_MS - elapsed)` clamps to ≥ 0 but NOT to ≤ MOCK_DURATION_MS.
Three concrete edge cases:
1. **Clock goes backward (NTP correction, manual time change).** If `now < startedAt`, `elapsed` is negative, `MOCK_DURATION_MS - elapsed > MOCK_DURATION_MS`. `formatTimer` will display something like 03:01:42 — *more* than the maximum 03:00:00. Cosmetic in normal NTP nudges (sub-second), real if the user's iPhone time changes due to time-zone shift mid-exam (but Date.now() is wall-clock UTC, so DST shifts don't affect it).
2. **`pausedMs > now − startedAt`.** Fed back into `computeRemainingMs` after the visibilitychange handler adds gap to pausedMs, the math is `now − startedAt − pausedMs` < 0 → remaining > MOCK_DURATION_MS. Visible if a user kills the tab, the system clock leaps backward, then they relaunch (because hiddenAtRef is in the same Date.now domain, gap could be huge or even negative since `Math.max(0, …)` clamps gap-additions but post-clamping the cumulative pausedMs can still exceed wall elapsed if multiple negative-clock events occurred).
3. **Race during cold start.** `initialSession.startedAt = Date.now()` in `Mock.tsx:91` then immediately `setActiveSession(session)` — the first `now()` inside `MockExam` is essentially the same. Fine in practice but `now()` returning a value smaller than `startedAt` (subtick clock resolution) → remaining > MOCK_DURATION_MS for one frame. Cosmetic.
Suggested fix: change line 161 to `return Math.max(0, Math.min(MOCK_DURATION_MS, MOCK_DURATION_MS - elapsed))` or `Math.max(0, MOCK_DURATION_MS - Math.max(0, elapsed))`. Add a unit test with `now < startedAt` and with `pausedMs > duration`.

## FSRS facade

### F-SRS1. mapGradeToFsrs: 1→Again, 2→Hard, 3→Good, 4→Easy (CONFIRMED)
Severity: NONE
Location: `src/lib/srs.ts:53-64`. All four mappings verified by reading and by `srs.test.ts:32-39`. Returns the correct `Rating` enum values, narrowed to `FsrsGrade`.

### F-SRS2. newCardState defaults: state=0, due=now (CONFIRMED)
Severity: NONE
Location: `src/lib/srs.ts:35-48`.
Reviewed `newCardState`: returns `{cardId, stability:0, difficulty:0, elapsedDays:0, scheduledDays:0, reps:0, lapses:0, state:0, lastReview:0, due:now}`. Matches plan. ✓

### F-SRS3. Cram-mode 7d cap (CONFIRMED, with caveat)
Severity: MINOR (caveat only)
Location: `src/lib/srs.ts:73-111`.
The cap is implemented as TWO independent clamps:
```
if (scheduledDays > CRAM_MAX_DAYS) scheduledDays = CRAM_MAX_DAYS;
const cramCeiling = now + CRAM_MAX_DAYS * MS_PER_DAY;
if (due > cramCeiling) due = cramCeiling;
```
After clamping, `due` and `scheduledDays * MS_PER_DAY + now` may diverge if FSRS produced an inconsistent pair. In practice ts-fsrs always sets `next.due === next.last_review + next.scheduled_days * MS_PER_DAY` (with last_review = now), so the two clamps converge to the same value. No active bug; behaviour matches the test at `srs.test.ts:91-109`.
Caveat: if a future ts-fsrs version returns asymmetric `due`/`scheduled_days`, the clamping order could leave the persisted state in a state where `due − now > scheduledDays * MS_PER_DAY` or vice versa. Defensive: derive `due = now + scheduledDays * MS_PER_DAY` after clamping, or assert their consistency. Low priority.

### F-SRS4. `targetRetention` plumbing (CONFIRMED)
Severity: NONE
Location: `src/lib/srs.ts:73-86`. `opts.targetRetention ?? 0.9` flows into `generatorParameters({ request_retention })`. Test `srs.test.ts:119-126` validates that 0.95 yields ≤ scheduledDays vs 0.8. ✓

### F-SRS5. Swappable interface — narrow surface (CONFIRMED)
Severity: NONE
Location: `src/lib/srs.ts` exports `newCardState`, `review`, `mapGradeToFsrs`, plus types `Grade` / `ReviewOptions`. No leakage of FSRS-specific types into `CardState` (state is a plain `0|1|2|3` literal, not the FSRS `State` enum directly). Plan-faithful. ✓

### F-SRS6. Undo functionality lives in FlashcardSession (CONFIRMED)
Severity: NONE (verified)
Location: `src/components/FlashcardSession.tsx:96-205`. Maintains `undoRef` with the prior `CardState` snapshot + dateKey + index. `onUndo` restores via `db.cardState.put(u.prev)` (or delete if there was no prior state) and decrements `dailyActivity.cardsReviewed`. Only one-step (overwritten on each new review). Plan-faithful that undo is at the session layer, not the facade.
Caveat (separate from this finding): the dailyActivity decrement is NOT in a transaction with the cardState write; if the cardState write succeeds and dailyActivity write throws, the user's daily count is too high and there's no rollback. That's a parallel-domain (data/async) concern — flagged here for the data agent.

### F-SRS7. Cram-mode `due` clamp uses `now` not the FSRS-internal `next.due` baseline (CONFIRMED PROPER)
Severity: NONE
Location: `src/lib/srs.ts:91-97`. The cram ceiling is `now + 7d`, not `next.last_review + 7d`. Since `last_review === now` in the FSRS call (`scheduler.next(fsrsCard, new Date(now), ...)`), the two are equal. Verified.

## Stable-ID arithmetic

### S1. Prefix `c|` / `q|` is correctly applied (CONFIRMED)
Severity: NONE
Location: `src/lib/ids.ts:23-35`.
```
cardId(subtopicId, front)     = sha1Hex12(`c|${subtopicId}|${normalizeText(front)}`).slice(0,12)
questionId(subtopicId, stem)  = sha1Hex12(`q|${subtopicId}|${normalizeText(stem)}`).slice(0,12)
```
Test `ids.test.ts:63-70` correctly asserts `cardId("1.1", "foo") !== questionId("1.1", "foo")`. The prompt's verification rule ("`cardId = sha1Hex12("c|"+subtopicId+"|"+normalize(front))[:12]`") is met exactly. ✓

### S2. normalizeText regex strips apostrophes, math operators, parens — keeps digits (CONFIRMED)
Severity: NONE
Location: `src/lib/ids.ts:4-10`. Regex `/[\p{P}\p{S}]/gu` strips:
- `'` (U+0027) — \p{Po} (Punctuation, Other)
- `"` — \p{Po}
- `?`, `!`, `,`, `.`, `(`, `)` — \p{Po}/\p{Ps}/\p{Pe}
- `+`, `=`, `<`, `>`, `×`, `÷`, `≤`, `≥` — \p{Sm} (Symbol, math)
- `−` (U+2212 minus), `-` (U+002D hyphen-minus) — \p{Pd} (Punctuation, dash)
- `$`, `€`, `£`, `¥` — \p{Sc} (Symbol, currency)
- `_` — \p{Pc} (Punctuation, connector)
NOT stripped:
- digits 0-9 (\p{N}) — preserved
- letters (\p{L}) — preserved
- `²` (U+00B2 superscript 2) — \p{No} (Number, Other) — **preserved**, so `"E = mc²"` normalizes to `"e mc²"`. A card with front `"E = mc^2"` would normalize to `"e mc 2"` — DIFFERENT from `"e mc²"`. Worth knowing for content authors: `mc²` and `mc^2` produce different IDs.
- `²` and `³` and `½` and `¼` — all \p{No} — preserved.
- whitespace within \p{Z} (space, tab, newline) — handled by the `\s+` collapse step.

### S3. normalizeText edge case: a literal apostrophe and a word-internal apostrophe become a space, possibly conflating different text (MINOR)
Severity: MINOR
Location: `src/lib/ids.ts:4-10`.
`normalizeText("It's")` = `"it s"` (apostrophe → space). So `"its"` (without apostrophe) normalizes to `"its"`. Different normalised forms → different cardId hashes. So a content edit like `"It's GDP"` vs `"its GDP"` produce DIFFERENT ids. The plan implies normalization should make them equivalent. A more lenient normalizer would replace punctuation with empty string and let `\s+` collapse later. Suggested fix: change `\p{P}\p{S}` replacement target from `" "` (space) to `""` (empty) so `"it's"` → `"its"`. This DOES change every existing id, requiring a one-time content regenerate, but it's a correctness improvement worth doing pre-Phase 5.
The test at `ids.test.ts:38-42` asserts `cardId("1.1", "Define GDP")` equals `cardId("1.1", "  define, gdp!! ")` — both normalize to `"define gdp"` (commas → space, then collapsed). That works. But `cardId("1.1", "It's")` ≠ `cardId("1.1", "Its")` — undesirable.

### S4. Unicode confusables not normalised (MINOR)
Severity: MINOR
Location: `src/lib/ids.ts:4-10`.
`normalizeText("E—mc")` (em-dash) → strips to `"e mc"`. `normalizeText("E-mc")` (hyphen) → also `"e mc"`. ✓ confusables fold correctly here.
But: NFC/NFKC normalisation is NOT applied. `"é"` (precomposed U+00E9) and `"é"` (decomposed e + U+0301 combining acute) are visually identical but produce different SHA-1 input bytes → different IDs. Content authors using a Mac vs a Windows clipboard could silently produce two different IDs for the same card. Suggested fix: pre-pipeline `s.normalize("NFC")` before lowercasing.

### S5. SHA-1 (12-hex / 48-bit) collision space (CONFIRMED, accepted)
Severity: QUESTION
Location: `src/lib/ids.ts:12-21`.
Birthday-bound: collision expected at ~2^24 = 16.7M items. For a 5000-question + 3000-card corpus, collision probability is `(8000)² / (2 × 2^48)` ≈ 1.1×10⁻¹⁰. Negligible. The B3 prefix fix correctly prevents *deterministic* same-input collisions across card/question namespaces, but does NOT prevent random hash collisions. Accepted; not a finding.

## Bonus / wildcards

### W1. FlashcardSession `onRate` lacks transaction wrapping (MINOR — cross-domain)
Severity: MINOR
Location: `src/components/FlashcardSession.tsx:142-182` and `:184-205` (`onUndo`).
Both `onRate` and `onUndo` issue 2-3 sequential Dexie writes (`cardState.put` + `dailyActivity.put` for onRate; `cardState.put`/`delete` + `dailyActivity.put` for onUndo) without wrapping in `db.transaction()`. This is the same partial-write hazard that pass-3 finding `m4` flagged for `Quiz.tsx` (and which was fixed there). The Cards path still has the unfixed pattern. If the cardState write succeeds and dailyActivity throws, the user has a logged review on a card with no daily-activity credit — readiness/streak math diverges silently. Suggested fix: wrap both functions in `db.transaction("rw", db.cardState, db.dailyActivity, async () => { ... })`.

### W2. `MissedReview.handleSelect` has a UI race between transaction completion and Next click (MINOR)
Severity: MINOR
Location: `src/components/MissedReview.tsx:99-149`, `:83-97` (`advance`).
Trace: user answers correctly to retire (nextStreak === 2):
1. `setSelected(choice)` queues UI update → render → Next button visible & enabled.
2. User clicks Next while `await db.transaction(...)` is still pending.
3. `advance` runs synchronously, reads `completeCurrent === false` (still false; setCompleteCurrent runs after the await), rotates the would-be-retired item to the back.
4. Transaction completes; `setCompleteCurrent(true)` fires but UI has already advanced.
Result: the in-memory queue holds a phantom item that's been deleted from `db.missedQueue`. On answering it, the `nextStreak` jumps to 3 (priorStreak was already 2), retire fires again — `missedQueue.delete(qid)` is a no-op. Cosmetic, not data-corrupting, but the displayed "X remaining" count is off by one until reload.
Suggested fix: gate the Next button's enable state on the transaction having resolved (e.g., disable while a `pending` ref is true), OR set `completeCurrent` synchronously based on the predicted retire outcome before the await begins.

### W3. `daysBetween` may misround across DST boundaries despite the comment claiming otherwise (NIT)
Severity: QUESTION
Location: `src/lib/streak.ts:115-121`.
The function constructs `new Date(y, m, d)` for both endpoints — local-midnight times. On a DST transition day the *forward* date is local-midnight on a 23-hour day; the prior date's local-midnight is on a 24-hour day. `(b0 - a0) / (24*3600*1000)` gives `0.958` (or `1.042`) → `Math.round` → 1. ✓
But across multiple DST transitions in a long historic span, the cumulative drift is multiple hours; for a single-day diff the rounding always lands on 1, so `daysBetween` is robust. Verified by hand. The comment is correct; this is just a confirmation that the test for streak crossing DST didn't slip through.

### W4. `wilsonInterval` returns `point: 0` (not null) when total === 0 (CONFIRMED, but consider) (NIT)
Severity: QUESTION
Location: `src/lib/readiness.ts:95-97`.
Returns `{point: 0, lower: 0, upper: 0, halfWidth: 0}` for total=0. This passes the test, but: a topic with 0 attempts has `point=null` in `TopicScore`, while passing 0 to `wilsonInterval` returns 0%. Callers don't currently invoke wilsonInterval with total=0 in production paths (gated by the `MIN_N_PER_TOPIC` check), but defensively the "no data" sentinel could be `null` for `point` to match `TopicScore`. Not a bug — just a tiny API consistency observation.

### W5. `readiness.computeTopicScore` last-50 cap can starve old topics under heavy churn (QUESTION)
Severity: QUESTION
Location: `src/lib/readiness.ts:156-164`.
The "last 50 distinct" cap means only the 50 most recent distinct questionIds count. A user who has answered 200 distinct questions in topic 4 will see readiness reflecting only the most-recent 50. If they last did topic 4 a month ago and the most-recent 50 were all wrong, the score reflects that month-old performance. Works as designed for "current readiness." Worth confirming with product: should the 50 be windowed by recency (e.g., last 30 days only)? Plan is silent; current behaviour is plan-faithful.

### W6. `mockSessions` schema lacks `lastActivityAt` index — query patterns work but cannot index by activity (NIT)
Severity: MINOR
Location: `src/lib/db.ts:54`.
The Dexie schema string is `mockSessions: "id, status, startedAt"`. `lastActivityAt` is in the type but not indexed. The current `Mock.tsx` resume scan reads all sessions via `toArray()` and filters in memory — fine for a handful of sessions but if the user accumulates 100+ over months, the boot-time scan grows linearly. Consider adding `lastActivityAt` to the index string in a future schema version. Not blocking.

### W7. `composeExam` shuffle bias on small pools (NIT)
Severity: NONE
Location: `src/lib/mockExam.ts:35-42`.
Standard Fisher-Yates with an injected RNG. The implementation looks correct: `for (i = len-1; i > 0; i--) j = floor(rng() * (i+1))`. Loop bound `i > 0` skips the i=0 case, which is correct (no swap needed when only one element remains). ✓
Modulo bias only matters for cryptographic uniformity; for shuffling 130 items from a few hundred, the bias is negligible.

### W8. `scoreMock` uses `Math.round(n * 10) / 10` for percentage rounding — `(N + 0.5) * 10` floats safely? (CONFIRMED)
Severity: NONE
Location: `src/lib/mockExam.ts:227-229`.
`round1(72.5)`: `72.5 * 10 = 725`, `Math.round(725) = 725`, `725/10 = 72.5`. So `pass = 72.5 >= 72.5 = true`. ✓
Edge: 72.45% — `72.45*10 = 724.4999...` (FP) → `Math.round = 724` → `72.4` → fail. 72.46% → 724.6 → 725 → 72.5 → pass. **Boundary is at 72.45/72.46 exact, so a user at 94/130 = 72.307% rounds to 72.3 → fail; at 95/130 = 73.077% → 73.1 → pass.** The rounding is consistent. ✓
Actual pass-line edge case: 72.5% requires exactly 94.25/130 — impossible — so 95+ correct passes, 94 fails. Nothing to worry about with FP. ✓
Watch: 72.5% computed as 94/129.66 (which doesn't exist in this code, but for completeness) — N/A.

### W9. `studyNextTopic` partial-rollup: pass-2 finding "M-B4-regression" still applies (CONFIRMED UNFIXED)
Severity: MINOR
Location: `src/lib/readiness.ts:273-294`.
Pass-2 review noted: when only some topics are sufficient, `studyNextTopic` recommends the lowest-scoring sufficient topic, even if that topic is at 95% and three others are at n=0. Code path verified: `if (sufficient.length > 0) { ... return best.topicId; }` — picks lowest-scoring sufficient unconditionally. The alternative (recommend an n=0 topic when one exists) is NOT in the implementation.
The plan's "Drives 'study next' rec: lowest-scored topic meeting N≥20, **else whichever topic has the fewest attempts**" was written before the partial-rollup fix; with partial rollup, recommending a 95%-mastered topic over an unstarted one is wrong. Suggested fix per pass 2: `if (any topic has n=0 && any sufficient topic point > BUFFER) return n0Topic;`.

### W10. CardSchema/QuestionSchema allow empty-string choices (NIT)
Severity: MINOR
Location: `src/lib/zodSchemas.ts:30-31`.
`choices: z.tuple([z.string(), z.string(), z.string(), z.string()])` — no `.min(1)` per element. A generated question with `choices: ["A", "", "C", "D"]` parses successfully, then renders an empty multiple-choice option in QuestionCard. Suggested fix: `z.tuple([z.string().min(1), z.string().min(1), z.string().min(1), z.string().min(1)])`.

## Verdict

The math core is mostly sound: Wilson, age-decay, partial-rollup renormalisation, and FSRS facade all match the plan and pass hand-walked numeric checks. The remaining correctness blocker-class issue is **T1 (resume-prompt + visibility-handler double-credit)** — under a real iPhone scenario where a notification banner backgrounds Safari while the resume modal is up, the user pockets ~10+ minutes of phantom exam time per cycle. **T5 (auto-submit vs manual-Next race)** is theoretically capable of producing duplicate Attempt rows and warrants a one-line `onCompleteFiredRef` guard before Phase 5 content generation. **M5 (computeRemainingMs upper-cap)** is a one-line Math.min fix that should be done. Beyond that, drift is mostly minor: `getExcludedIds` over-broad filter (F4), normalize-vs-NFC + apostrophe handling (S3, S4), partial-rollup recommendation logic (W9), and several non-transactional Dexie write sequences in FlashcardSession (W1) — not strictly in this lane but flagged for the data agent. No NEW blockers; the codebase has tightened correctness substantially since pass 1.



