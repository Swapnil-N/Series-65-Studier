# D1 — Test-Gap Audit (pass-5)

_Branch: `claude/series-65-study-app-65Urn` · Audited: 2026-04-27_

## Per-fix verdict

| ID | Fix | Verdict |
|---|---|---|
| B1 | Mock completion writes attempts/missed/dailyActivity in single txn | TESTED at `src/routes/Mock.test.tsx:32` — three separate assertions confirm all three tables are written; atomicity is implied but not proven by a partial-failure scenario |
| B2 | MissedReview writes attempts (mode="missed") | TESTED at `src/components/MissedReview.test.tsx:88` — "writes an Attempt with mode='missed' and bumps dailyActivity for each answer (B2 fix)" |
| B3 | cardId/questionId disjoint hash spaces (c\|/q\| prefix) | TESTED at `src/lib/ids.test.ts:73` — "cardId and questionId never collide for identical normalized inputs" |
| B4 | computeReadiness partial-rollup with renormalised weights | TESTED at `src/lib/readiness.test.ts:285` — "renormalises NASAA weights across contributing topics" (87.5% calculation) |
| B5 | MissedReview retire (db.missedQueue.delete) inside the transaction | GAP — `MissedReview.test.tsx` confirms delete happens (queue row disappears) but never asserts atomicity: no test verifies that a forced mid-transaction failure leaves both the attempt row AND the queue row intact. Suggest: spy on `db.attempts.add` to throw mid-txn and assert `missedQueue` row still exists afterward. |
| B6 | MockExam doesn't self-persist status="completed" | TESTED at `src/components/MockExam.test.tsx:161` — "does NOT self-persist status='completed'" |
| m4 | Quiz.persistAttempt is in a transaction | GAP — there is no `Quiz.test.tsx`. `QuizRunner.test.tsx` never touches Dexie. The transaction in `src/routes/Quiz.tsx:152` (attempts + missedQueue + dailyActivity) is untested. Suggest: after `onAnswer` fires with a wrong answer, assert all three tables are written; force a throw in the middle and assert zero rows landed in any table. |
| M1 | Wilson CI uses raw counts, not weighted | GAP — `readiness.test.ts` tests `wilsonInterval` in isolation and `computeTopicScore` end-to-end, but no test asserts that `halfWidth` (or `lower`/`upper`) is computed from raw n/correct rather than age-decay-weighted values. A regression swapping `rawCorrect`/`distinctN` for `weightedCorrect`/`weightedTotal` would pass all existing tests. Suggest: build a scenario where age-decay makes weighted correct ≠ raw correct, then assert `topicScore.halfWidth` matches `wilsonInterval(rawCorrect, n).halfWidth`. |
| M2 | loadContent memoises and busts on edit | GAP — `content.test.ts` calls `bustContentCache()` in `beforeEach` as a reset mechanism and the comment says "memoises", but no test calls `loadContent()` twice without busting and asserts the second call returns the same object/promise without hitting Dexie again. Also no test dispatches `content-edits-changed` and asserts the cache is invalidated. Suggest: call `loadContent()` twice, assert `result1 === result2`; then write an edit and assert `result3 !== result1`. |
| M3 | navigator.storage.persist() called from main.tsx | GAP — `main.tsx` is not covered by any test file. No test mocks `navigator.storage.persist` and verifies it is called on startup. Suggest: an integration smoke test (or unit test of the init side-effect) that stubs `navigator.storage.persist` and asserts it was invoked. |
| M4 | Settings import Zod-validates rows + range bounds | PARTIAL — `Settings.test.tsx:135` tests that a malformed row (`correct: "not-a-bool"`) is dropped. However, no test covers out-of-range numeric fields (e.g. `fontScale: 9999`, `targetRetention: 2.0`). The `RangedNumber` helper at `Settings.tsx:81` exists but is unexercised in tests. GAP on range bounds: suggest `validateImport({ …, tables: { settings: [{ …, fontScale: 9999 }] } })` and assert the row is dropped. |
| M6 | FOUC inline script in index.html | GAP — the inline `<script>` in `index.html` is not exercised by any test. `applyAppearanceSettings` is tested but it reads from Dexie, not from `localStorage`. The FOUC script reads `localStorage.getItem("s65-appearance")`. Suggest: a unit test that pre-populates `localStorage`, inserts the script, and asserts `document.documentElement.classList.contains("dark")`. |
| Q1 | Mock timer pauses on visibility-hidden | GAP — the only visibility test in `MockExam.test.tsx` (T1, line 211) asserts that the modal blocks pause credit; it does NOT have a positive test that hiding the tab while no modal is up increments `pausedMs`. Suggest: hide the tab for N ms without a modal, show again, and assert `pausedMs` increased by ~N ms. |
| Q2 | lastActivityAt drives resume modal | TESTED at `src/components/MockExam.test.tsx:194` — "shows a resume/abandon prompt if lastActivityTs was more than 10 minutes ago" |
| T1 | Visibility handler skips pause-credit while modal up | TESTED at `src/components/MockExam.test.tsx:211` — "does NOT double-credit pausedMs when the tab hides while the resume modal is up (T1)" |
| T5 | onComplete fires only once (auto + manual race guard) | GAP — `MockExam.test.tsx` has two separate tests each asserting `onComplete.toHaveBeenCalledTimes(1)` (auto-submit via timer, line 157; manual submit, line 188), but neither test triggers BOTH paths simultaneously. A regression removing the `completedRef` guard would still pass. Suggest: advance timer past the deadline AND click the submit button in the same act, then assert `onComplete` was called exactly once. |
| F4 | getExcludedIds filters status="completed" only | TESTED at `src/lib/mockExam.test.ts:199` — "unions questionIds across the most recent K *completed* sessions only"; explicitly asserts `active-only` and `abandoned-a` are excluded from the excluded set. |
| M5 | computeRemainingMs upper-clamped to MOCK_DURATION_MS | GAP — `mockExam.test.ts` has four `computeRemainingMs` tests but none pass a `now` earlier than `startedAt` or a `pausedMs` so large it would push the remaining value above `MOCK_DURATION_MS`. Suggest: `computeRemainingMs({ startedAt: T, pausedMs: MOCK_DURATION_MS + 1 }, T)` and assert result equals `MOCK_DURATION_MS`. |
| M4-mock | persistMockCompletion records null answers as correct=false | TESTED at `src/routes/Mock.test.tsx:117` — "skips unknown question IDs but records every known slot (answered or not)"; asserts `[true, false]` where the second entry is the null-answer slot. |
| W1 | FlashcardSession onRate/onUndo in transactions | GAP — `FlashcardSession.test.tsx` confirms `cardState` and `dailyActivity` are written after a rating and that undo removes `cardState` and decrements `dailyActivity`, but no test verifies atomicity. Suggest: spy on `db.cardState.put` to throw and assert `dailyActivity` was not incremented either. |
| W9 | studyNextTopic prefers n=0 over mastered | TESTED at `src/lib/readiness.test.ts:386` — "prefers an n=0 topic when at least one sufficient topic is past BUFFER (review W9)" |
| W10 | Card/Question choices reject empty strings | GAP — `zodSchemas.test.ts` tests `choices` length (exactly 4) but no test passes `["", "b", "c", "d"]` or a card with `front: ""` to assert they are rejected. Suggest: `QuestionSchema.safeParse({ …, choices: ["", "b", "c", "d"] })` and assert `success === false`; and `CardSchema.safeParse({ …, front: "" })` and assert `success === false`. |
| sStorage | PersistedSession answers.length === questions.length refine | GAP — `PersistedSessionSchema` lives in `src/routes/Quiz.tsx` (line 71) with a `.refine` at line 107, but there is no `Quiz.test.tsx`. No test exercises this schema at all. Suggest: import `PersistedSessionSchema` (or extract it) and assert `safeParse` fails when `answers.length !== questions.length`. |

---

## Final verdict

**Total GAPs: 11** (B5, m4, M1, M2, M3, M4-range-bounds, M6, Q1, T5, W1, W10, sStorage — M4 counted as one split gap)

Counting M4 as two separate sub-gaps (row-schema tested, range-bounds not), total is **12 gaps**.

### Highest-leverage to add (regression could slip silently to production)

1. **m4 / sStorage** — No `Quiz.test.tsx` at all. The entire quiz persist path (transaction atomicity, `PersistedSession` length refine) is dark. A regression here silently drops readiness data for every normal quiz session.

2. **T5** — Both auto-submit and manual submit exist in the real UI. The race guard (`completedRef`) preventing a double `onComplete` is the only thing stopping two back-to-back `persistMockCompletion` calls from double-writing 130 attempts to the DB. The existing tests do not trigger both paths in the same render.

3. **M1** — Age-decay vs raw-count distinction in Wilson. A future refactor that passes weighted counts to `wilsonInterval` would widen confidence intervals invisibly; all current tests would still pass because they only verify the numeric output of `wilsonInterval` in isolation and don't assert what inputs `computeTopicScore` feeds it.

4. **Q1** — Timer pause on tab-hide (positive path) is untested. The only visibility test is the negative case (T1). If the `hiddenAtRef` accumulation logic is removed, the timer keeps ticking through background periods and users get penalised — no test would catch it.

5. **W1** — FlashcardSession transaction. If `dailyActivity` write is accidentally moved outside the transaction, a crash between the two writes would permanently increment the streak counter without recording the card review — a silent data consistency bug.
