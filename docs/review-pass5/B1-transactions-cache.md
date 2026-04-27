# B1 — Transactions & Cache Audit

Branch: `claude/series-65-study-app-65Urn`

---

## Question 1: Multi-table Dexie writes outside transactions

Command: `grep -rEn "db\.\w+\.(put|add|bulkPut|bulkAdd|delete|update|clear)" src/`

Functions with writes to **more than one table** (test files excluded):

- `src/components/LessonReader.tsx:118` — `handleMarkReviewed` — tables: `db.edits` (via `writeLessonReviewedEdit` line 58) + `db.dailyActivity` (via `bumpLessonsCompleted` lines 37/42) — **NO TXN**
- `src/routes/Settings.tsx:262` — `restoreAll` — tables: all 9 (`cardState`, `attempts`, `missedQueue`, `bookmarks`, `notes`, `edits`, `dailyActivity`, `mockSessions`, `settings`) via sequential `clear()` + `bulkPut()` loop — **NO TXN**
- `src/routes/Saved.tsx:144` — `handleSaveEdit` — tables: `db.notes` only (delete OR put, mutually exclusive branches) — single-table OK
- `src/routes/Saved.tsx:119` — `handleRemoveBookmark` — `db.bookmarks` only — single-table OK
- `src/routes/Saved.tsx:127` — `handleDeleteNote` — `db.notes` only — single-table OK
- `src/routes/Settings.tsx:446` — `handleRemoveStaleEdit` — `db.edits` only — single-table OK
- `src/components/EditPencil.tsx:153` — `handleSave` — `db.edits` only — single-table OK
- `src/components/EditPencil.tsx:180` — `handleClearOverride` — `db.edits` only — single-table OK

**Findings (NO TXN, multi-table):**

1. `src/components/LessonReader.tsx:118` — `handleMarkReviewed` — tables: `edits`, `dailyActivity` — **NO TXN**: if `db.edits.put` succeeds but `bumpLessonsCompleted` fails, the lesson is marked reviewed but `lessonsCompleted` is not incremented. Reverse failure (edit write throws after dailyActivity is updated) cannot happen here since `edits` write is first, but the forward path is unguarded.
2. `src/routes/Settings.tsx:262` — `restoreAll` — tables: all 9 — **NO TXN**: the sequential `clear()`/`bulkPut()` loop across 9 tables is entirely outside a transaction. A mid-loop error (e.g., after 3 tables are cleared but before the remaining 6 are restored) leaves the database in a partially-wiped, partially-restored state with no rollback. This is the highest-severity finding.

---

## Question 2: db.edits writes without bustContentCache

Command: `grep -rEn "db\.edits\.(put|add|bulkPut|bulkAdd|delete|update|clear)" src/`

Production source files only (test files excluded):

- `src/components/EditPencil.tsx:168` — `handleSave` — `bustContentCache()` called at line 169, same try-block — **busts**
- `src/components/EditPencil.tsx:190` — `handleClearOverride` — `bustContentCache()` called at line 191, same try-block — **busts**
- `src/components/LessonReader.tsx:58` — `writeLessonReviewedEdit` (called from `handleMarkReviewed`) — no `bustContentCache()` anywhere in `handleMarkReviewed`, `writeLessonReviewedEdit`, or `bumpLessonsCompleted` — **MISSING**
- `src/routes/Settings.tsx:448` — `handleRemoveStaleEdit` — `bustContentCache()` called at line 449, immediately after `db.edits.delete` — **busts**
- `src/routes/Settings.tsx:262` — `restoreAll` (called from `handleConfirmImport`) — `bustContentCache()` called in `handleConfirmImport` at line 431, after `await restoreAll(...)` returns — **busts** (caller handles it)

**Findings (MISSING bustContentCache):**

1. `src/components/LessonReader.tsx:58` — `writeLessonReviewedEdit` / `handleMarkReviewed` — writes `db.edits` with `{ reviewed: true }` patch but never calls `bustContentCache()`. The `onReviewed?.()` callback (line 125) is intended to trigger a `loadContent()` re-read in the parent, but `loadContent()` is memoised behind a cache; without busting the cache first the re-read returns stale content and the `reviewed` badge will not appear until next full navigation. **MISSING**

---

## Final verdict

**2 real findings** (not false positives):

1. `Settings.tsx restoreAll` (line 262) — 9-table sequential clear+bulkPut with no wrapping transaction — **BLOCKER**: partial import leaves DB in corrupt state on any mid-loop error.
2. `LessonReader.tsx handleMarkReviewed` — `db.edits` write without `bustContentCache()` + no transaction over `edits`+`dailyActivity` writes — **MAJOR**: cache stale (badge stays hidden); activity counter can desync on error.
