# B3 — Async State After Unmount Audit

## UNGUARDED (2)

- **`src/routes/Saved.tsx:110`** — calls `void refresh()` inside the effect; `refresh` is a `useCallback(async () => { ... setBookmarks(...); setNotes(...); })` with no cancellation parameter. If the component unmounts while the Dexie + `loadContent()` chain is in flight the two setStates still fire on the dead component.
  - Fix: add a `cancelled` flag in the effect and pass it into `refresh`, or create a local IIFE:
    ```tsx
    useEffect(() => {
      let cancelled = false;
      void (async () => {
        const [...] = await Promise.all([...]);
        if (cancelled) return;
        setBookmarks(bmOut); setNotes(noteOut);
      })();
      return () => { cancelled = true; };
    }, []);
    ```
  - Note: the event-listener re-fires `void refresh()` on the same path — same issue.

- **`src/routes/Settings.tsx:313`** — calls `void loadAll()` where `loadAll` is a bare async callback; it does `setSettings`, `setStaleEdits`, `setLoaded` after two awaits with no cancellation guard. The `useEffect` at line 342 (edits-changed listener) also calls `void loadAll()` with no guard.
  - Fix: same pattern — introduce a `cancelled` flag inside `loadAll`, or refactor the effect to own an inline IIFE with the flag.

## GUARDED (8)

`EditPencil.tsx:109`, `FlashcardSession.tsx:101`, `LessonReader.tsx:102`, `MissedReview.tsx:52`, `Quiz.tsx:192`, `Cards.tsx:11`, `Learn.tsx:35`, `Mock.tsx:51`, `Home.tsx:49` — all use `let cancelled = false` / `if (cancelled) return` correctly. (`Settings.tsx:317` storage-persist probe is also guarded.) Count: 9 guarded effects.

## N/A (sync / event-listener only, no async setState) (8)

`QuizRunner.tsx:96` (sync progress notify), `QuizRunner.tsx:145` (keydown listener), `EditPencil.tsx:144` (focus ref), `FlashcardSession.tsx:129` (keydown listener), `MockExam.tsx:109` (resume-prompt ref), `MockExam.tsx:149` (setInterval tick), `MockExam.tsx:170` (visibilitychange — uses `updateSession` synchronously), `MockExam.tsx:220` (auto-submit — sync calls only), `MockExam.tsx:287` (keydown listener), `RatingButtons.tsx:50` (keydown listener), `QuestionCard.tsx:32` (keydown listener), `Settings.tsx:342` (event listener re-fires loadAll — classified as UNGUARDED above).

---

## Final verdict

**2 UNGUARDED effects** (`Saved.tsx` and `Settings.tsx`). Severity: **MINOR**. In React 18 StrictMode double-mount means the first-run setStates land on an already-torn-down instance on every dev cold-mount, but in production (single mount) the window is narrow — only rapid tab navigation or fast unmount before the Dexie query returns. Real user impact: stale or duplicate state updates logged as React "Can't perform a state update on an unmounted component" warnings; no crash. Fix is low-effort (add `cancelled` flag to each callsite).
