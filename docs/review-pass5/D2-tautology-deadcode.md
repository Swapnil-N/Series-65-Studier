# D2 — Tautology, Dead Code, Unused Deps

## Section A: Tautology audit

### `src/lib/streak.test.ts`

Randomly sampled: "returns 1/1 for a single qualifying day today" (line 59),
"resets current to 0 when yesterday and today are both missing" (line 83),
"ignores non-qualifying (zero-count) rows" (line 111).

All three exercise real branching in `computeStreak` / `dayQualifies` and
assert against computed output, not against constants the test itself defines.
`incrementActivity` tests write to a real fake-indexedDB and read back the
persisted value. **No tautologies found.**

---

### `src/lib/mockExam.test.ts`

Randomly sampled: "is deterministic when given the same seed" (line 122),
"marks pass=false below the 72.5% threshold" (line 342),
"adds pausedMs back onto the remaining budget" (line 178).

**Flag:**

`src/lib/mockExam.test.ts:355` — `expect(score.overallPct).toBeLessThan(PASS_THRESHOLD)` —
the test itself controls `answers: [0, 0, 0, 0]` against questions with
`answerIndex` 0, 1, 2, 3, so only 1/4 = 25% correct. There is no doubt the
result is less than 72.5 and the `PASS_THRESHOLD` import is only ever used in
this one assertion. The interesting invariant is `pass: false`, which is already
asserted on the next line. The `toBeLessThan(PASS_THRESHOLD)` adds nothing TS
cannot prove (the function always returns `number`) and the exact value 25 is
not verified.

Better: `expect(score.overallPct).toBe(25)` — pin the arithmetic and drop the
constant import.

---

### `src/components/MockExam.test.tsx`

Randomly sampled: "persists an answer to the session object (and Dexie)"
(line 108), "auto-submits to the scorecard when the timer hits zero"
(line 136), "does NOT double-credit pausedMs when the tab hides…" (line 211).

The timer test at line 105 has:

`src/components/MockExam.test.tsx:105` — `expect(second).not.toBe(first)` after
asserting `second` is `"02:58:59"` on line 104. Once `second` is pinned to an
exact string the `not.toBe(first)` is redundant (if `second === "02:58:59"` and
`first === "03:00:00"` they are trivially different).

Better: drop line 105 entirely; the equality check on line 104 already captures
the regression.

All other sampled tests are meaningful. **No other tautologies found.**

---

### `src/lib/readiness.test.ts`

Randomly sampled: "constants / exposes the expected thresholds and weights"
(line 38), "computeTopicScore / caps at the last 50 distinct questions"
(line 199), "studyNextTopic / prefers an n=0 topic when at least one sufficient
topic is past BUFFER" (line 386).

**Flag:**

`src/lib/readiness.test.ts:39-50` — the `constants` test asserts the exact
numeric values of exported constants (`MIN_N_PER_TOPIC`, `PASS`, `BUFFER`,
each weight) by re-reading those same constants. A typo in the source would just
produce the same wrong number in both places, so this provides zero regression
coverage beyond TypeScript's type-check. The weight-sum assertion (`toBeCloseTo(1, 10)`)
is the only useful line because it cross-checks the four values against each
other.

Better: replace the individual equality checks with cross-checks or
behavioural assertions (e.g. confirming `computeTopicScore` uses the 20-attempt
threshold, rather than asserting `MIN_N_PER_TOPIC === 20`). At minimum, keep
only the weight-sum assertion.

`src/lib/readiness.test.ts:103` — `expect(typeof s.title).toBe("string")` —
TypeScript already enforces that `getAllSubtopics()` returns `{ title: string;
… }[]`. This assertion cannot catch a runtime regression because the value
always is a string if the code compiles.

Better: `expect(s.title.length).toBeGreaterThan(0)` — checks actual content,
not type.

---

### `src/components/QuizRunner.test.tsx`

Randomly sampled: "fires onAnswer once per question…" (line 39), "double-clicking
the same choice does not produce two Attempts" (line 98), "resumes from
initialIndex/initialAnswers" (line 146).

All assertions use mock call counts and `.toMatchObject` against real output.
**No tautologies found.**

---

### `src/components/FlashcardSession.test.tsx`

Randomly sampled: "shows 'Nothing due' when all cards are scheduled in the
future" (line 38), "Undo restores the prior state…" (line 128),
"persists a cardState row…" (line 100).

**Flag:**

`src/components/FlashcardSession.test.tsx:91` — `expect(screen.queryByTestId("flashcard-back")).not.toBeInTheDocument()` —
this checks that the back is hidden before Space is pressed, which is part of
the same test that then reveals it. The before-state check is legitimate setup
verification, not a tautology. **No tautology, but note the assertion is
defensive rather than exploring a separate path.**

All three samples are legitimate. **No tautologies found.**

---

### `src/components/EditPencil.test.tsx`

Randomly sampled: "opens a modal pre-filled with currentText…" (line 16),
"Cancel closes the modal without touching db.edits" (line 49), "Clear override
deletes the existing edit row" (line 73).

**Flag:**

`src/components/EditPencil.test.tsx:97` — `expect(await db.edits.get("card-with-edit")).toBeDefined()` —
this assertion appears immediately after the *first* click on the Clear button
and before the second (confirming) click. It is intended to verify that the
two-step confirm did not fire on the first click. The assertion is meaningful
(it guards the two-phase UX), but it is checking database state when a simpler
UI assertion (e.g. the modal is still open, or the button text is "Really clear?")
would be more direct and faster.

Not a tautology, but the DB check here is testing an implementation detail
rather than the observable behaviour. Verdict: marginal — acceptable as-is.

**No clear tautologies found.**

---

### `src/lib/content.test.ts`

Randomly sampled: "applies an edit to a shipped card by itemId" (line 34),
"getAllSubtopics derives topicId from the leading number" (line 98),
"mirrorToDexie resolves without throwing (no-op by design)" (line 109).

**Flag:**

`src/lib/content.test.ts:110` — `await expect(mirrorToDexie()).resolves.toBeUndefined()` —
`mirrorToDexie` is described as a no-op, and the test only proves that it
doesn't throw and returns `undefined`. If the function does nothing this
assertion is essentially `expect(noop()).toBe(undefined)`, which is trivially
true. Either the function should be deleted (along with the test) or the test
should verify that it actually syncs something into Dexie.

`src/lib/content.test.ts:91` — `getCards("1.1").every((c) => c.subtopicId === "1.1")`.
Using `.every()` returns `true` for an empty array. If `getCards("1.1")`
somehow returned `[]`, the assertion would pass silently. Combined with
`getCards("9.9")` returning `[]` (line 95), there would be no failure even if
the subtopic filter were completely broken.

Better: `const cards = getCards("1.1"); expect(cards.length).toBeGreaterThan(0);
expect(cards.every(…)).toBe(true)` — guard against an accidental empty result.

---

## Section B: Dead code + console + TODO

### `grep -rEn "TODO|FIXME|XXX|HACK" src/ scripts/`

No matches. Clean.

---

### `grep -rEn "console\.(log|debug|info|trace)" src/`

No matches. Clean.

---

### `grep -rEn "@ts-ignore|@ts-expect-error" src/`

No matches. Clean.

---

### `grep -rEn " as any\b| as unknown as " src/`

| File:line | Context | Verdict |
|---|---|---|
| `src/routes/Settings.tsx:222` | `(db as unknown as Record<string, any>)[name]` — dynamic table lookup inside `dumpAll()` because Dexie's `Table` map is not exposed as an index type | **Legitimate** — ESLint suppression comment present; no typed alternative without adding a helper to `db.ts` |
| `src/routes/Settings.tsx:269` | Same pattern in `restoreAll()` `tableHandles` construction | **Legitimate** — same rationale as above |
| `src/routes/Settings.tsx:274` | Same pattern inside `restoreAll()` loop body | **Legitimate** — same rationale |
| `src/routes/Settings.test.tsx:69` | `const urlAny = URL as any` — stubs `URL.createObjectURL` which jsdom omits | **Legitimate** — needed for test environment shim; a typed alternative would be `(URL as typeof URL & { createObjectURL?: () => string }).createObjectURL` but that is more verbose without benefit |
| `src/routes/Settings.test.tsx:174` | `(a as unknown as { topicId: string }).topicId === "5"` — accessing `topicId` on an `Attempt` row that the Zod schema intentionally strips (topic "5" is invalid) | **Stale / replace** — if the Attempt type exposes `topicId` then this cast is unnecessary; if it doesn't, `(a as Record<string, unknown>).topicId` is clearer. Either way the raw `as unknown as` escape hatch should be replaced with a typed lookup or a comment explaining why the field is expected to be absent |

---

## Section C: Unused dependencies

| Dep | Used at | Verdict |
|---|---|---|
| `recharts` | `src/components/ReadinessChart.tsx:10` | Used |
| `fuse.js` | `src/routes/Reference.tsx:2` | Used |
| `ts-fsrs` | `src/lib/srs.ts:14` | Used |
| `react-markdown` | `src/components/shared/MarkdownRenderer.tsx:1` | Used |
| `remark-gfm` | `src/components/shared/MarkdownRenderer.tsx:2` | Used |
| `remark-math` | `src/components/shared/MarkdownRenderer.tsx:3` | Used |
| `rehype-katex` | `src/components/shared/MarkdownRenderer.tsx:4` | Used |
| `katex` | `src/components/shared/MarkdownRenderer.tsx:9` — CSS-only import (`import "katex/dist/katex.min.css"`) | Used (CSS side-effect) |
| `dexie` | `src/lib/db.ts:1` | Used |
| `zod` | `src/lib/zodSchemas.ts:1`, `src/routes/Quiz.tsx:2`, `src/routes/Settings.tsx:2` | Used |

No unused production dependencies found.

---

## Final verdict

**1. `src/lib/content.test.ts:110` — `mirrorToDexie` no-op test (medium)**
Either the function has real behaviour that should be tested (sync to Dexie), or
it should be deleted along with its test. A passing "resolves without throwing"
assertion for a no-op function provides false confidence.

**2. `src/lib/readiness.test.ts:39-50` — constant mirror test (low)**
Asserting that exported constants equal the constants they export is circular.
The sum-check is the only regression-proof line. Replace the remaining equality
checks with behavioral assertions (e.g. boundary tests at the threshold values).

**3. `src/routes/Settings.test.tsx:174` — `as unknown as` cast on Attempt (low)**
The cast works around the fact that the test needs to assert a field that the
type system considers absent. This should either use `Object.hasOwn(a, "topicId")`
for the falsy check or expose the underlying assertion through a typed helper to
keep the intent legible.
