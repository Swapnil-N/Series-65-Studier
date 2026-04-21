# Series 65 Studier — Implementation Plan

## Context

A personal, offline-capable iPhone study app for NASAA Series 65. Must be free forever (no Apple Developer account, no paid hosting), work fully offline on flights/subway, install to iPhone home screen without weekly re-signing, and cover lessons + flashcards + quizzes + mock exams + formula reference + progress tracking so the user walks into the exam confident using only this app. No exam date set — optimize for completeness.

Repo is empty (just README). Greenfield build.

## Architecture

- **PWA** hosted on **GitHub Pages**. Installed via iPhone Safari → Share → Add to Home Screen. Fullscreen, offline-capable, no dev account.
- **Vite + React + TypeScript**.
- **`vite-plugin-pwa`** (Workbox) — service worker precaches HTML/JS/CSS/fonts + generated content.
- **Tailwind CSS** — mobile-first, dark mode.
- **Content bundled into the JS bundle** (imported as ES modules) AND mirrored into Dexie on first launch. Both layers survive independently — belt-and-suspenders against iOS's ~7-day storage eviction.
- **Dexie.js** (IndexedDB) — user state (SRS, attempts, streaks, bookmarks, notes, edits) + content mirror.
- **React Context + `useReducer`** — shared UI state. Dexie is source of truth for persisted data.
- **Recharts** — dashboard charts.
- **`ts-fsrs`** (FSRS-5 SRS algorithm, MIT) — flashcard scheduling. Thin `src/lib/srs.ts` facade so algorithm is swappable.
- **Zod** — validates generated content JSON at build time and at app boot (corruption detection).
- **GitHub Actions** — `build` on push to `main`, deploy `dist/` to `gh-pages`.

No backend. No accounts. No network required after first install.

## App routes

| Route | Purpose |
|---|---|
| `/` | Dashboard: streak, readiness score, "study next" rec, due card count |
| `/learn` | Topic → subtopic → lesson (markdown, formulas, citations) |
| `/cards` | SRS flashcard session (all due, or filter by topic) |
| `/quiz` | Topic-scoped quizzes with explanations + citations |
| `/mock` | Timed 130-question exam (reviewed questions only), NASAA-weighted, scorecard |
| `/missed` | Missed-questions review queue (wrong answers cycle until correct 2× in a row) |
| `/reference` | Formula lookup + glossary search |
| `/saved` | Bookmarks + notes |
| `/settings` | Dark mode, high-contrast, font scale, new-cards/day, target retention, cram mode, goals, export/import state, stale-edits report |

Bottom tab bar (Home / Learn / Cards / Quiz / More → Missed/Reference/Saved/Settings).

## NASAA topic weighting

| # | Topic | % | Mock Qs |
|---|---|---|---|
| 1 | Economic Factors & Business Information | 15% | 20 |
| 2 | Investment Vehicle Characteristics | 25% | 32 |
| 3 | Client Investment Recommendations & Strategies | 30% | 39 |
| 4 | Laws, Regulations, Guidelines & Ethics | 30% | 39 |

Pass = 72.5%. Real exam = 140 Qs (130 scored + 10 pretest); we simulate 130.

## Content structure + stable IDs

```
src/content/
  topic-1-economics/
    1.1-business-cycles/
      lesson.ts         # typed Lesson export
      cards.ts          # typed Card[] export
      questions.ts      # typed Question[] export
  index.ts              # aggregates all topics for ES-module bundling
```

Content ships as **TS/ES modules** (not `public/*.json`) so it's bundled into the JS, covered by the service worker precache, and survives iOS IndexedDB eviction. On boot the app mirrors it into Dexie for fast indexed queries.

**Stable IDs (critical for edit durability across regenerations):**
- `subtopicId` = `"1.1"`, `"2.3"`, etc. — derived from NASAA outline headings (frozen in Phase 0.5).
- `cardId` = `sha1(subtopicId + "|" + normalize(front))` (first 12 hex chars).
- `questionId` = `sha1(subtopicId + "|" + normalize(stem))` (first 12 hex chars).
- `normalize()` lowercases, strips punctuation and whitespace runs.
- The generator writes a per-subtopic `manifest.json` listing IDs so regeneration preserves them when the normalized text matches; new/changed items get new IDs; Settings surfaces "stale edits" whose target ID no longer exists.

Every card + question has a required `citation` field: NASAA outline §, SEC rule, IA Act §, or NASAA Model Rule — validated against an allowlist (see Content generation).

## Content generation — one exhaustive, validated run

`scripts/generate-content.ts` (Node, uses Anthropic SDK):

1. Reads `scripts/nasaa-outline.md` (pasted by user in **Phase 0.5**). Derives subtopic IDs from `##`/`###` headings; these are frozen from that point on.
2. For each subtopic, calls **Opus 4.7** (`claude-opus-4-7`) with a structured prompt requesting:
   - 1,000–1,500 word lesson with worked examples/formulas
   - 20–30 flashcards
   - 30–50 MCQs (easy/medium/hard mix) with rationales
   - Citation per item
3. **Validation pipeline on every response:**
   - Parse JSON against Zod schemas (see "Data schemas"). On parse failure → auto-retry up to 2× with the parse error appended to the prompt.
   - Reject any item whose `citation` is not in `scripts/citation-allowlist.json` (enumerates valid NASAA outline §§, IA Act §§, SEC rule numbers, NASAA Model Rules). Mismatches counted; > 10% triggers hard stop for manual review.
   - Dedupe cards/questions across subtopics via `questionId`/`cardId` hash. Duplicates are dropped; a dedupe report is written alongside outputs.
   - Every generated item ships with `reviewed: false`.
4. Writes per-subtopic TS modules under `src/content/.../{lesson,cards,questions}.ts` + a `manifest.json` recording IDs for stability across re-runs. **Idempotent**: skips subtopics whose output exists; `--force <id>` re-runs one and preserves IDs where normalized text matches.
5. Target corpus: 3,000–5,000 questions so pools never exhaust.
6. Estimated cost ceiling: **$200** for one exhaustive Opus run; script tracks spend and aborts if it crosses the ceiling (configurable via env).

**Review queue (gating):**
- Generated items default to `reviewed: false`.
- Mock exams (A9) draw ONLY from `reviewed: true` items.
- Practice quizzes and flashcards use all items but surface an "Unreviewed" badge.
- Settings shows unreviewed counts per topic and a "Mark as reviewed" inline button appears under each item during study.

Not used at runtime. Keeps as a utility.

## SRS (FSRS-5 via `ts-fsrs`)

`src/lib/srs.ts` is a thin facade wrapping `ts-fsrs`. Per-card state stored in Dexie `cardState` (see schema below). User rates **Again / Hard / Good / Easy**, mapped to FSRS grades 1/2/3/4.

- Target retention: 0.9 (default) — configurable in Settings.
- New cards introduced at **30/day** default (cram-oriented since there's no fixed exam date).
- "Cram mode" toggle: caps all intervals at 7 days so nothing drifts past exam-prep horizon.
- One-step "undo last rating" so a misclick doesn't poison a card's schedule.
- Interface kept narrow (`review(state, grade): newState`) so the implementation is swappable if we change algorithms.

## Readiness score

Per-topic accuracy over the **last 50 *distinct* questions** (not attempts) within that topic, weighted by NASAA % into a single 0–100% score plus per-topic bars. Guardrails to keep it honest:

- **Minimum N = 20 distinct questions per topic** before that topic counts. Below that: "insufficient data" — topic reported but excluded from the weighted rollup until met.
- **Dedupe retries within 7 days:** if you answer the same `questionId` twice in a week, only the most recent attempt counts. Prevents "cram the same 10 questions to inflate score."
- **Wilson 95% confidence interval** shown alongside the point estimate (e.g., "84% ± 5%").
- **Age decay:** attempts older than 30 days weighted 0.5×.
- Thresholds rendered on the chart at 72.5% (pass) and 80% (buffer).
- Drives "study next" rec: lowest-scored topic meeting N≥20, else whichever topic has the fewest attempts.

## Streaks / goals

`db.dailyActivity` keyed by date. A day counts with ≥1 card OR ≥1 quiz OR ≥1 lesson-completion. Default daily goal: 20 cards + 10 questions. Subtle UI.

## Bookmarks / notes / in-app edits

Star icon → `db.bookmarks`. Note button → `db.notes` (markdown). Pencil icon → edits saved to `db.edits` overriding shipped content for that user. Edits are keyed by content-hash-stable IDs so they survive content regeneration when the normalized text matches. Settings → Export edits as JSON patch; a "Stale edits" count surfaces when a target ID no longer exists after regeneration.

## Missed-questions queue

Every question answered incorrectly is added to `db.missedQueue` with timestamp and topic. Dashboard shows "N missed questions — review now" card. The queue feeds a dedicated flashcard-style review session where wrong answers cycle until answered correctly twice in a row. This is the single highest-leverage practice for exam prep and must not be optional.

## iOS PWA requirements (non-negotiable, owned by A1)

- `<link rel="apple-touch-icon" sizes="180x180" ...>` plus 192 and 512 plus a **maskable** 512 with safe-area.
- `<meta name="apple-mobile-web-app-capable" content="yes">` + `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">`.
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=yes">`.
- CSS: `padding: env(safe-area-inset-*)` on TabBar + headers; `100dvh` never `100vh`; `-webkit-tap-highlight-color: transparent`; `touch-action: manipulation`; `overscroll-behavior: contain`; minimum 44×44 tap targets; fonts sized in `rem` for iOS Dynamic Type.
- Dark mode via Tailwind `dark:` + `prefers-color-scheme`.
- High-contrast + large-text toggle in Settings (glare/subway readability).

## Service worker + offline durability

- `vite-plugin-pwa` config: `registerType: 'autoUpdate'`, `workbox.navigateFallback: '/index.html'`, `workbox.maximumFileSizeToCacheInBytes: 10 * 1024 * 1024` (content can be big), `runtimeCaching` restricted to same-origin.
- **Dual-layer durability** (iOS evicts IndexedDB/Cache after ~7 days unused):
  - Content lives in the JS bundle (imported ES modules), precached by the SW. Surviving an IndexedDB wipe: content still loads on relaunch because the SW cache holds the JS.
  - User state lives only in Dexie. Mitigations: `navigator.storage.persist()` on first launch (iOS ignores, but we try); a Settings banner appears if the app wasn't opened for > 5 days suggesting export; auto-export of state to a downloadable JSON monthly.
- "New version available" toast on SW update; user taps to reload (never silent — avoids losing in-flight quiz state).

## Data schemas (normative)

TypeScript types live in `src/types/content.ts` + `src/types/state.ts`. These are the contract every agent codes against.

```ts
// Content (ships in the bundle)
export type TopicId = "1" | "2" | "3" | "4";
export type SubtopicId = string; // e.g., "1.1", "2.3"
export type Citation = { source: string; ref: string }; // source: "NASAA"|"SEC"|"IA_ACT"|"NASAA_MODEL_RULE"

export interface Lesson {
  subtopicId: SubtopicId; title: string; bodyMd: string;
  citations: Citation[]; reviewed: boolean;
}
export interface Card {
  id: string; subtopicId: SubtopicId; front: string; back: string;
  citation: Citation; reviewed: boolean;
}
export type Difficulty = "easy" | "medium" | "hard";
export interface Question {
  id: string; subtopicId: SubtopicId; stem: string;
  choices: [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3; rationale: string;
  citation: Citation; difficulty: Difficulty; reviewed: boolean;
}

// User state (Dexie)
export interface CardState {
  cardId: string; // FK Card.id
  stability: number; difficulty: number; // FSRS fields
  elapsedDays: number; scheduledDays: number;
  reps: number; lapses: number; state: 0 | 1 | 2 | 3; // FSRS state
  lastReview: number; due: number; // epoch ms
}
export interface Attempt {
  id?: number; questionId: string; subtopicId: SubtopicId; topicId: TopicId;
  correct: boolean; mode: "quiz" | "mock" | "missed"; mockId?: string;
  timestamp: number;
}
export interface MissedItem { questionId: string; topicId: TopicId; addedAt: number; }
export interface Bookmark { itemId: string; type: "card" | "question" | "lesson"; createdAt: number; }
export interface Note { itemId: string; body: string; updatedAt: number; }
export interface ContentEdit {
  itemId: string; type: "card" | "question" | "lesson";
  patch: Partial<Card | Question | Lesson>; updatedAt: number;
}
export interface DailyActivity {
  date: string; // YYYY-MM-DD
  cardsReviewed: number; questionsAnswered: number; lessonsCompleted: number;
}
export interface MockExamSession {
  id: string; startedAt: number; pausedMs: number;
  questionIds: string[]; answers: (0 | 1 | 2 | 3 | null)[];
  currentIndex: number; status: "active" | "completed" | "abandoned";
}
export interface AppSettings {
  darkMode: "auto" | "light" | "dark"; highContrast: boolean;
  fontScale: number; newCardsPerDay: number; targetRetention: number;
  cramMode: boolean; dailyGoalCards: number; dailyGoalQuestions: number;
  lastExportAt: number;
}
```

**Dexie v1 schema** (`src/lib/db.ts`):

```ts
db.version(1).stores({
  cardState:    "cardId",
  attempts:     "++id, questionId, topicId, timestamp, mode",
  missedQueue:  "questionId, topicId, addedAt",
  bookmarks:    "itemId, type",
  notes:        "itemId",
  edits:        "itemId, type",
  dailyActivity:"date",
  mockSessions: "id, status, startedAt",
  settings:     "key",
});
```

Retention: cap `attempts` at 10,000 rows with FIFO prune inside a nightly (on-launch) maintenance task.

## File layout

```
.github/workflows/deploy.yml
public/manifest.webmanifest
public/icons/{180,192,512,maskable-512}.png
scripts/nasaa-outline.md              # pasted Phase 0.5
scripts/citation-allowlist.json       # enumerated valid citations
scripts/generate-content.ts
scripts/prompts/{lesson,cards,questions}.ts
src/main.tsx
src/App.tsx                           # router + tab bar (frozen after Phase 0)
src/types/{content,state}.ts          # normative schemas
src/content/**                        # generated TS modules (committed)
src/content/index.ts                  # aggregator
src/routes/{Home,Learn,Cards,Quiz,Mock,Missed,Reference,Saved,Settings}.tsx
src/components/shared/                # SharedUIKit (A4): Citation, MarkdownRenderer,
                                      # QuestionCard, RatingButtons, EmptyState, TopicPicker
src/components/{LessonReader,FlashcardSession,QuizRunner,MockExam,MissedReview,ReadinessChart,TabBar}.tsx
src/lib/{db,srs,readiness,content,streak,mockExam,ids,zodSchemas}.ts
src/context/{AppContext,SessionContext}.tsx
vite.config.ts
tailwind.config.ts
package.json                          # deps frozen after Phase 1.5
README.md
```

---

# Execution model: orchestrator + subagents

Implementation proceeds in phases. Each phase is a short-lived **orchestrator** run that spawns one or more **subagents** with narrow, verifiable contracts, then verifies acceptance criteria before moving on. Subagents do the coding; orchestrator reads results, runs checks, decides next steps. This plan file is the shared spec every subagent reads first.

## Subagent roster

Each entry: role, owned files (single-writer), read-only deps, outputs, acceptance criteria.

### A1. Scaffolder
- **Role:** Initialize Vite + React + TS + Tailwind + `vite-plugin-pwa`; GH Actions deploy; PWA manifest + all iOS meta tags + icons; stub routes + TabBar with safe-area padding.
- **Owns (single-writer):** `package.json`, `vite.config.ts`, `tailwind.config.ts`, `src/App.tsx`, `src/components/TabBar.tsx`, `index.html` (head tags), `.github/workflows/deploy.yml`, `public/manifest.webmanifest`, `public/icons/*`.
- **Outputs:** above + stub `src/routes/*.tsx` (empty components), global CSS with safe-area + dynamic type setup.
- **Accept:** `npm run build` succeeds; `npm run preview` serves a PWA (DevTools → SW active, manifest valid); DevTools Offline reload → shell renders; Lighthouse PWA ≥ 90; `apple-touch-icon` 180 + maskable 512 present.

### A2. DataLayer + Schemas
- **Role:** Normative TS types + Dexie schema + content-loader (bundle → Dexie mirror) + edit-merge + Zod runtime validation + attempt-retention prune.
- **Owns:** `src/types/content.ts`, `src/types/state.ts`, `src/lib/db.ts`, `src/lib/content.ts`, `src/lib/ids.ts`, `src/lib/zodSchemas.ts`, `src/lib/prune.ts` + tests.
- **Reads:** "Data schemas (normative)" section.
- **Outputs:** above; seed `src/content/index.ts` with empty export until A3 populates it.
- **Accept:** Tests pass for loader (merges edit over shipped), Zod schemas reject malformed inputs, FIFO prune caps attempts at 10k, `ids.ts` produces stable 12-char hashes.

### A3. ContentPipeline
- **Role:** Build `scripts/generate-content.ts` + prompts + allowlist + validation + dedupe + manifest-based ID stability + spend tracker.
- **Owns:** `scripts/generate-content.ts`, `scripts/prompts/*.ts`, `scripts/citation-allowlist.json`, `scripts/nasaa-outline.md` template (user fills in Phase 0.5).
- **Reads:** `src/types/content.ts`, `src/lib/zodSchemas.ts`.
- **Outputs:** above + README section documenting usage. **Does not call the API.**
- **Accept:** `npx tsx scripts/generate-content.ts --subtopic 1.1 --dry-run` prints rendered prompt + expected JSON shape; `--validate existing.json` runs Zod + citation-allowlist checks without API call; spend-ceiling env var respected in a stub run.

### A4. SharedUIKit
- **Role:** Ship shared presentation primitives + lock third-party deps before Phase 3 fan-out, preventing merge conflicts and duplicated UI.
- **Owns:** `src/components/shared/{Citation,MarkdownRenderer,QuestionCard,RatingButtons,EmptyState,TopicPicker,ReviewedBadge}.tsx`; adds `react-markdown`, `remark-math`, `rehype-katex`, `katex`, `fuse.js`, `ts-fsrs`, `zod`, `recharts` to `package.json` (only additions here; no Phase-3 agent touches deps).
- **Reads:** `src/types/content.ts`.
- **Accept:** Storybook-free visual check: `npm run dev` renders a demo route `/__uikit` showing each primitive; `npm run build` green; bundle size within 400 KB gzip for vendor chunk.

### A5. SRS
- **Role:** FSRS facade + flashcard session + undo + cram mode.
- **Owns:** `src/lib/srs.ts` + tests, `src/components/FlashcardSession.tsx`, `src/routes/Cards.tsx`.
- **Reads:** `src/types/state.ts`, `src/components/shared/*`, `src/lib/db.ts`.
- **Accept:** Unit tests cover FSRS state transitions for Again/Hard/Good/Easy; UI shows card, accepts rating, persists to Dexie; empty-queue state renders; "Undo" reverts last review; cram mode caps interval at 7 days.

### A6. LessonReader
- **Role:** Topic/subtopic browser + markdown lesson view with KaTeX math + citations.
- **Owns:** `src/components/LessonReader.tsx`, `src/routes/Learn.tsx`.
- **Reads:** `src/lib/content.ts`, shared UIKit.
- **Accept:** Browses topic → subtopic → lesson; renders `$...$` + `$$...$$` math; citations render; "Mark as reviewed" + note + bookmark controls wired to `db`.

### A7. QuizRunner
- **Role:** Topic-scoped quizzes (N questions, immediate feedback + explanation + citation). Session is resumable if interrupted.
- **Owns:** `src/components/QuizRunner.tsx`, `src/routes/Quiz.tsx`.
- **Reads:** `src/lib/content.ts`, `src/lib/db.ts`, shared UIKit.
- **Accept:** Pulls N random questions without repeat; scorecard; attempts saved; in-progress quiz persists across reload via Dexie; double-tap doesn't double-submit.

### A8. Reference
- **Role:** Formula reference + searchable glossary.
- **Owns:** `src/routes/Reference.tsx`, `src/content/reference/{formulas,glossary}.ts` (hand-curated seed).
- **Seed list (required in plan):** present-value, future-value, Sharpe ratio, Treynor ratio, Jensen's alpha, CAPM, standard deviation, beta, duration (Macaulay/modified), after-tax yield, taxable-equivalent yield, current yield, YTM approximation, expected-return weighted avg, geometric mean return.
- **Reads:** shared UIKit.
- **Accept:** Fuzzy search narrows list; formulas render with labeled variables in KaTeX; glossary search works offline.

### A9. MockExam
- **Role:** Timed 130-Q exam, NASAA-weighted composition (20/32/39/39), end-of-exam scorecard w/ per-topic breakdown. Correctness requirements below are **not optional**.
- **Owns:** `src/components/MockExam.tsx`, `src/routes/Mock.tsx`, `src/lib/mockExam.ts`.
- **Reads:** `src/lib/content.ts` filtered to `reviewed: true` only, `src/lib/db.ts`, shared UIKit.
- **Timer + state:** timer anchored to `Date.now()` with `startedAt` + `pausedMs` persisted to Dexie on every `visibilitychange` and question submit. Remaining time = `180 * 60_000 - (now - startedAt - pausedMs)`. Never uses a `setInterval` accumulator as source of truth. If background > 10 min on resume, prompt "Resume or abandon."
- **Composition:** draws 20/32/39/39 from the pool, excluding `questionId`s used in the **last 3 mock sessions**.
- **Accept:** Full flow passes; kill Safari mid-exam → relaunch → resume at same question with correct remaining time; exam only draws reviewed questions; scorecard shows pass/fail vs 72.5% with per-topic breakdown.

### A10. Dashboard + Readiness + Streak + Missed-Queue
- **Role:** Home screen tying everything together.
- **Owns:** `src/lib/readiness.ts`, `src/lib/streak.ts`, `src/routes/Home.tsx`, `src/routes/Missed.tsx`, `src/components/{ReadinessChart,MissedReview}.tsx`.
- **Reads:** attempts, dailyActivity, missedQueue, settings, shared UIKit.
- **Accept:** Readiness score respects min-N=20, dedupe-7d, age-decay, Wilson CI; per-topic bars + thresholds; streak increments on qualifying activity; Missed-queue review cycles until each item correct twice in a row; "Study next" picks lowest-scored topic meeting N, else least-attempted.

### A11. SavedAndEdits + Settings
- **Role:** Bookmarks, notes, in-app edits (stable-ID aware), settings (dark mode, high-contrast, font scale, new-cards/day, target retention, cram mode, goals), export/import of user state, stale-edit surfacing.
- **Owns:** `src/routes/Saved.tsx`, `src/routes/Settings.tsx`, edit-pencil component (used by LessonReader / FlashcardSession / QuizRunner).
- **Reads:** all `db` tables, shared UIKit.
- **Accept:** Star/note/edit persist and render; edits targeting missing IDs surface in "Stale edits"; state export/import round-trips cleanly; settings toggles take effect without reload where possible.

### A12. DeployAndQA
- **Role:** Real-device verification + PWA polish fixes + final sign-off.
- **Owns:** nothing persistently; may patch A1's manifest/icons/meta tags if QA uncovers issues.
- **Outputs:** a written QA report pasted into `docs/qa-report.md`.
- **Accept:** Every item in "Verification checklist" below passes.

## Phase plan (orchestrator runs)

Agents within a phase run in parallel only when their **Owns** sets are disjoint. Anything else is sequenced.

**Phase 0 — Scaffold.** A1 alone. Freezes `App.tsx` + `TabBar` + iOS meta + icons + deploy workflow. Gate: Lighthouse PWA ≥ 90 and offline shell renders.

**Phase 0.5 — User paste.** User pastes real NASAA Series 65 content outline into `scripts/nasaa-outline.md`. Orchestrator does not spawn an agent; it checks the file is non-empty and contains the expected `##`/`###` heading pattern. All subsequent subtopic IDs derive from this file.

**Phase 1 — Schemas + Data.** A2 alone (sequential). Publishes `src/types/*.ts`, Dexie, loader, ID utilities, Zod schemas. Every downstream agent codes against these.

**Phase 1.5 — ContentPipeline + UIKit (parallel).** A3 and A4 in parallel. Disjoint Owns sets: A3 writes `scripts/**`, A4 writes `src/components/shared/**` + adds deps to `package.json`. Package.json is the only file both might touch — A4 owns it this phase; A3 has no reason to.

**Phase 2 — Learning surfaces (parallel).** A5 (SRS), A6 (LessonReader), A7 (QuizRunner), A8 (Reference). Owns sets are fully disjoint (each writes its own component + route). All read shared UIKit + types.

**Phase 3 — Assessment + Home (parallel).** A9 (MockExam) and A10 (Dashboard+Missed). Disjoint Owns sets.

**Phase 4 — Polish.** A11 alone (touches many routes via edit-pencil integration).

**Phase 5 — Content generation (USER RUN).** User runs `scripts/generate-content.ts` with their Anthropic API key. Script generates subtopic-by-subtopic, validates with Zod + allowlist, dedupes, writes TS modules under `src/content/`, tracks spend. User reviews a sample (e.g., 50 random questions) before committing. `reviewed: false` on all items until reviewed in-app.

**Phase 6 — Deploy + QA.** A12 runs verification checklist on the built app, on a real iPhone, and over HTTPS.

## Orchestrator responsibilities

- Always operate on branch `claude/series-65-study-app-65Urn`.
- Before each phase: re-read this plan file; confirm prior phase was accepted (acceptance criteria all green, committed).
- **Parallel fan-out protocol:** when spawning multiple agents in one phase, launch each with `isolation: "worktree"` so they work on disjoint copies. Orchestrator then merges worktrees back in dependency order (UIKit / data / types first where relevant), running `npm run build && npm test` after each merge. Conflicts on shared files indicate an agent overreached its Owns set — reject and respawn with a narrower scope, do not hand-merge.
- **File-ownership enforcement:** orchestrator verifies that each agent's diff touches only files in its declared Owns set. Any stray change → reject, respawn.
- **Agent prompt template:**
  > *"Read `/root/.claude/plans/i-want-to-build-virtual-stream.md` fully before writing any code. You are agent **<ID>**. Your Owns set is: <files>. You may read but not modify: <read-only deps>. Implement per the spec for that agent. Run `npm run build` and any relevant tests before reporting. Report by listing: (a) files changed, (b) tests run + results, (c) each acceptance-criterion bullet with evidence (test name or behavior observed), (d) any deviations from the plan and why."*
- Between phases: run `npm run build && npm test`; read each agent's diff; confirm acceptance criteria met with actual evidence (not self-report). If acceptance fails → spawn a narrowly-scoped fix agent referencing the specific failure. No phase advances with a failing acceptance criterion.
- Commit after each phase on the branch with a message naming phase + agents (e.g., `phase-1.5: A3 content-pipeline + A4 shared-uikit`).
- Never `--no-verify`, never force-push, never skip a test.

## Verification checklist (A12)

**Build + SW:**
- `npm run build && npm run preview` → DevTools: active SW, valid manifest, Lighthouse PWA ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90.
- DevTools Offline toggle → all routes load, content renders, quiz completes, Dexie persists.
- SW update flow: bump version → reload → toast prompts update → tap → reload → content still present.
- "Storage quota exceeded" simulated → graceful toast, no crash.

**Deploy:**
- Push to `main` → GH Action green → HTTPS URL serves PWA.

**iPhone install + PWA polish:**
- Safari → URL → Share → Add to Home Screen → icon present (180×180) + maskable rendering correctly.
- Open icon → fullscreen, no Safari chrome, status-bar style correct.
- Safe-area insets respected on notched device (tab bar not clipped).
- Rotating to landscape: layout holds; split-screen on iPad: layout holds or is gracefully capped to portrait.
- VoiceOver navigation through a quiz works; tap targets ≥ 44×44; color contrast passes in both light and dark modes at 5% brightness.
- iOS Dynamic Type scales text up to XXL without breaking layout.

**Offline durability:**
- Airplane mode → relaunch → all lessons/quizzes/cards load.
- Complete a full 130-Q mock offline; streak increments; readiness updates; force-quit → relaunch → state intact, including in-progress quiz resumption.
- Kill Safari mid-mock → relaunch → mock resumes at correct question with correct remaining time (within ±2s).
- Leave app closed ≥ 7 days → relaunch offline. Expected outcome: content still loads (bundled in JS), user state may have been evicted (documented behavior; auto-export banner has warned user).

**Content correctness:**
- Sample 50 random questions across topics; verify citations match primary sources; mock exam pulls only `reviewed: true`; unreviewed badge visible on unreviewed items.

**Readiness + missed queue:**
- Answer < 20 distinct questions in a topic → "insufficient data" shown, not counted in rollup.
- Answer same question 3× in one day → only most recent counts; Wilson CI width reflects sample size.
- Miss a question → appears in missed queue; answer correctly twice in a row → removed.

When the A12 report shows every item green, the build is done.

## Out of scope

Audio/TTS mode, cloud sync, accounts, push notifications, native iOS app. Revisit only if a real need surfaces.
