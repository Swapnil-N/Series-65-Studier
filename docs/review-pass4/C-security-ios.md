# Pass-4-C — Security, iOS PWA, accessibility

Reviewer: independent verification (Pass 4 / lane C)
Date: 2026-04-27
Branch: claude/series-65-study-app-65Urn

## XSS / HTML injection

`src/components/shared/MarkdownRenderer.tsx:92-104` — confirmed.

Setup uses `react-markdown` with `remark-gfm`, `remark-math`, `rehype-katex`. NO `rehype-raw`, NO `skipHtml: false` override. This means the documented `react-markdown` defaults apply:

1. Raw HTML pass-through is OFF by default. `<script>...</script>`, `<img onerror=...>`, `<div onclick=...>` are not parsed as HTML — react-markdown's default `mdast` -> `hast` transform treats them as inert text nodes (or strips them, depending on context). They do NOT reach the DOM as live elements.
2. `urlTransform` defaults to a function that strips `javascript:`, `vbscript:`, `data:` (with allow-list for image data URLs), and `file:` URLs from `href`/`src`. So `[click](javascript:alert(1))` renders an `<a>` whose `href` is empty/`#` — confirmed safe.
3. Math rendering via `rehype-katex` does NOT enable raw HTML — `remark-math`/`rehype-katex` operate on `$...$` math nodes only and emit a sanitised `mathml`-equivalent HTML tree.

Adversarial cases confirmed safe (NO live execution):
- `<script>alert(1)</script>` — rendered as literal text by default react-markdown.
- `<img src=x onerror=alert(1)>` — rendered as literal text; not parsed as a hast element.
- `<div onclick="alert(1)">x</div>` — rendered as literal text; no live DOM `onclick`.
- `[c](javascript:alert(1))` — react-markdown's default `defaultUrlTransform` (since v9) returns "" for `javascript:` schemes; the resulting `<a href="">` is inert.
- `![x](javascript:alert(1))` — same default transform applies to `<img src>`.

**`grep -rn "dangerouslySetInnerHTML" src/`** returned ZERO matches — confirmed. (verified)

Note (MINOR — QUESTION): KaTeX itself accepts a `\href` macro. `rehype-katex` uses `katex.renderToString` which by default has `trust: false`, so `\href{javascript:alert(1)}{x}` is suppressed. This is the library default, but the app does not pass an override; defensive — confirm if a future bump ever flips `trust: true`. No fix needed today.

**Verdict: XSS via markdown is closed. Pass.**

## Settings import — adversarial input

`src/routes/Settings.tsx:226-245` `validateImport` — verified row-by-row.

Confirmed by direct read of schemas at `Settings.tsx:15-122`:

1. `topicId: "5"` — DROPPED. `TopicIdSchema` is `z.enum(["1","2","3","4"])`. (`Settings.tsx:15`)
2. `mode: "evil"` — DROPPED on attempts. `AttemptRowSchema.mode` is `z.enum(["quiz","mock","missed"])`. (`Settings.tsx:41`)
3. `mockSessions.pausedMs: -1e10` — **PASSES** validation. `FiniteNumberSchema` only checks `Number.isFinite`. **MAJOR (QUESTION): downstream effects of negative pausedMs.** `computeRemainingMs(session, now)` in `src/lib/mockExam.ts` likely does `EXAM_MS - (now - startedAt) + pausedMs`; a hugely negative `pausedMs` would make remaining time very negative, causing the auto-submit-at-zero branch to fire on first render. This is at worst an immediate fail-the-mock for a hostile import, not RCE. Recommend `FiniteNumberSchema.refine((n) => n >= 0)` for `pausedMs`, plus negative-clamp in `computeRemainingMs`. Lane B (correctness/math) probably owns the math fix; flag for handoff.
4. `dailyActivity.cardsReviewed: 1e308` — passes (finite). Downstream: `Home.tsx:97` reads `state.todayActivity.cardsReviewed`, then `GoalRow` computes `Math.round((value / goal) * 100)`. With `value = 1e308`, `Math.min(100, ...) = 100`. No crash. **Cosmetic only**: the "{value} / {goal}" caption renders `1e+308 / 50` — ugly but not broken. (`src/routes/Home.tsx:228-231`)
5. `notes.body: "<script>alert(1)</script>"` — survives validation (`NoteRowSchema.body` is `z.string()`, line 60). Downstream: `Saved.tsx:304` renders `<MarkdownRenderer>{row.note.body}</MarkdownRenderer>`. Per the XSS analysis above, react-markdown's default config renders the raw HTML as TEXT, not as a live tag. **Confirmed safe.** Same conclusion for `LessonReader` notes path.
6. `cardState.due: NaN` — REJECTED. `Number.isFinite(NaN) === false`, `Number.isFinite(Infinity) === false`, `Number.isFinite(-Infinity) === false`. The schema's `refine` is correct. (verified)
7. **Orphan rows**: a `cardState` row whose `cardId` doesn't match a shipped card gets bulkPut into Dexie. Nothing in the import path filters orphans. Downstream impact: `Home.tsx:74` does `cardStates.filter((c) => c.due <= nowMs).length` — orphans inflate the "Due cards" count. `Cards.tsx`/`FlashcardSession` filters by available card ids before scheduling, so an orphan row is harmless to study but inflates the dashboard counter. **MINOR**. Same orphan risk for `notes`, `bookmarks`, `edits`, `attempts.questionId` — the `Settings.tsx:289-294` `staleEdits` UI handles orphan EDITS but not the other tables. Suggest extending the stale-list UI to bookmarks/notes/cardState/attempts, or filter orphans during `restoreAll`.

Additional finding — **MAJOR**: `SettingsRowSchema` (`Settings.tsx:97-110`) requires the FULL settings object including every field (`darkMode`, `highContrast`, `fontScale`, `newCardsPerDay`, `targetRetention`, `cramMode`, `dailyGoalCards`, `dailyGoalQuestions`, `lastExportAt`). Crucially it does NOT enforce range bounds. A hostile (or older-version) export with `fontScale: 9999` lands in Dexie unchallenged, then on next mount `applyAppearanceSettings` (line 186) sets `--font-scale: 9999`. The page becomes unusable until the user opens settings or imports a clean file. The Range slider input clamps via min/max, but the imported value bypasses that clamp. Recommend `fontScale: z.number().min(0.85).max(1.3)` + matching guards on `targetRetention` (0.7-0.97), `newCardsPerDay` (1-200), `dailyGoalCards`/`dailyGoalQuestions` (>=0).

Additional finding — **MINOR**: `SettingsRowSchema.value` does not have `z.strict()` (or `z.object().strict()`). Extra unknown keys would survive the parse and land in Dexie. Not a security risk but data hygiene.

Additional finding — **MINOR**: `EditRowSchema.patch` is `z.record(z.string(), z.unknown())`. A malicious export could set `patch.bodyMd = "<script>"` (HTML), which would render via MarkdownRenderer in LessonReader. Per XSS analysis, react-markdown defaults render this as text. **Confirmed safe.** Same applies to `patch.front`/`back`/`stem`/`rationale`.

## SessionStorage trust

`src/routes/Quiz.tsx:71-119` `loadPersisted` + `PersistedSessionSchema` — verified.

The schema rejects mismatched payloads safely. Worst-case attempt:
- `version != 1` — DROPPED.
- `questions: []` — DROPPED (`.min(1)`).
- A "fake question" with hostile `stem: "<script>"` survives validation (since `stem: z.string()`), then lands in QuestionCard via `<MarkdownRenderer>` (per `src/components/shared/QuestionCard.tsx`). Per XSS analysis above, react-markdown sanitises this. Safe.
- `answerIndex: 5` — DROPPED (literal union 0-3).
- `index: -1` — DROPPED (`z.number().int().nonnegative()`).
- `index: 99999` — passes `nonnegative()`. Downstream `Quiz.tsx:378-381` does `session.index < session.questions.length ? session.questions[session.index] : null`, so an oversized `index` just renders the empty post-quiz view. Not exploitable.
- `answers` length mismatch — `answers: z.array(...)` has no length-equals-questions constraint. If `answers` is shorter than `questions`, downstream code at `QuizRunner.tsx` line 200ish reads `answers[index]` which becomes undefined and could surface as null in select state. Annoying but not crashing.

**MINOR**: `PersistedSessionSchema.answers` lacks a length constraint matching `questions.length`. Add `.refine((data) => data.answers.length === data.questions.length)` to the whole-object schema for robustness. Not a security issue.

**No XSS, no crash, no app-takeover from sessionStorage tampering.** Pass.

