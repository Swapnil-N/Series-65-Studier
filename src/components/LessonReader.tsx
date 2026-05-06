import { useEffect, useState } from "react";
import type { Lesson } from "../types/content";
import type { Bookmark, ContentEdit, Note } from "../types/state";
import { db } from "../lib/db";
import { bustContentCache } from "../lib/content";
import { dateKeyFromMs } from "../lib/streak";
import {
  Citation,
  MarkdownRenderer,
  ReviewedBadge,
} from "./shared";
import EditPencil from "./EditPencil";

export interface LessonReaderProps {
  lesson: Lesson;
  /**
   * Fired after a successful "Mark as reviewed" write so the parent can
   * force a re-read through `loadContent()` (which merges `db.edits` over
   * shipped lessons). Without this callback the UI would stay stale until
   * the user navigates away and back.
   */
  onReviewed?: () => void;
}

async function toggleBookmark(lesson: Lesson): Promise<boolean> {
  const existing = await db.bookmarks.get(lesson.subtopicId);
  if (existing) {
    await db.bookmarks.delete(lesson.subtopicId);
    return false;
  }
  const b: Bookmark = {
    itemId: lesson.subtopicId,
    type: "lesson",
    createdAt: Date.now(),
  };
  await db.bookmarks.put(b);
  return true;
}

async function saveNote(lesson: Lesson, body: string): Promise<void> {
  const trimmed = body.trim();
  if (!trimmed) {
    // Treat an emptied textarea as "delete this note" — otherwise we'd leave
    // a phantom row that the Saved view would surface.
    await db.notes.delete(lesson.subtopicId);
    return;
  }
  const n: Note = {
    itemId: lesson.subtopicId,
    body: trimmed,
    updatedAt: Date.now(),
  };
  await db.notes.put(n);
}

export default function LessonReader({ lesson, onReviewed }: LessonReaderProps) {
  const [noteDraft, setNoteDraft] = useState<string>("");
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [reviewing, setReviewing] = useState<boolean>(false);
  const [reviewError, setReviewError] = useState<string | null>(null);

  // Reload the bookmark flag and any existing note whenever the active lesson
  // changes. Keeping these as local state (rather than a context) is fine
  // because LessonReader is always mounted from a single route with a single
  // active lesson at a time.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [bm, note] = await Promise.all([
        db.bookmarks.get(lesson.subtopicId),
        db.notes.get(lesson.subtopicId),
      ]);
      if (cancelled) return;
      setBookmarked(Boolean(bm));
      setNoteDraft(note?.body ?? "");
    })();
    return () => {
      cancelled = true;
    };
  }, [lesson.subtopicId]);

  async function handleMarkReviewed() {
    if (lesson.reviewed || reviewing) return;
    setReviewing(true);
    setReviewError(null);
    try {
      // Single transaction over edits + dailyActivity so a partial
      // failure can't mark a lesson reviewed without crediting the
      // streak (or vice versa). Bust the content cache before notifying
      // the parent so its loadContent() re-read returns the merged
      // overlay rather than the cached pre-edit value.
      // (Reviews B1 / pass-5.)
      const edit: ContentEdit = {
        itemId: lesson.subtopicId,
        type: "lesson",
        patch: { reviewed: true },
        updatedAt: Date.now(),
      };
      const key = dateKeyFromMs(Date.now());
      await db.transaction("rw", db.edits, db.dailyActivity, async () => {
        await db.edits.put(edit);
        const existing = await db.dailyActivity.get(key);
        if (existing) {
          await db.dailyActivity.put({
            ...existing,
            lessonsCompleted: existing.lessonsCompleted + 1,
          });
        } else {
          await db.dailyActivity.put({
            date: key,
            cardsReviewed: 0,
            questionsAnswered: 0,
            lessonsCompleted: 1,
          });
        }
      });
      bustContentCache();
      onReviewed?.();
    } catch (err) {
      setReviewError(
        err instanceof Error ? err.message : "Could not save review state.",
      );
    } finally {
      setReviewing(false);
    }
  }

  async function handleToggleBookmark() {
    const next = await toggleBookmark(lesson);
    setBookmarked(next);
  }

  async function handleNoteBlur() {
    await saveNote(lesson, noteDraft);
  }

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-4">
      <header className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold">{lesson.title}</h1>
          <ReviewedBadge reviewed={lesson.reviewed} />
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Subtopic {lesson.subtopicId}
        </p>
      </header>

      <section aria-label="Lesson body">
        <MarkdownRenderer>{lesson.bodyMd}</MarkdownRenderer>
      </section>

      {lesson.citations.length > 0 ? (
        <section
          aria-label="Citations"
          className="mt-2 border-t border-neutral-200 pt-3 dark:border-neutral-800"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            Citations
          </h2>
          <ul className="flex flex-col gap-1">
            {lesson.citations.map((c, i) => (
              <li key={`${c.source}-${c.ref}-${i}`}>
                <Citation citation={c} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-label="Notes" className="mt-2 flex flex-col gap-2">
        <label
          htmlFor={`note-${lesson.subtopicId}`}
          className="text-sm font-semibold"
        >
          Note
        </label>
        <textarea
          id={`note-${lesson.subtopicId}`}
          value={noteDraft}
          onChange={(e) => setNoteDraft(e.target.value)}
          onBlur={handleNoteBlur}
          placeholder="Add a note (saved on blur)"
          rows={3}
          className="min-h-[88px] w-full rounded-md border border-neutral-300 bg-white p-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text"
        />
      </section>

      <section
        aria-label="Lesson actions"
        className="mt-2 flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-3 dark:border-neutral-800"
      >
        <button
          type="button"
          onClick={handleMarkReviewed}
          disabled={lesson.reviewed || reviewing}
          className="min-h-[44px] rounded-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300 disabled:text-neutral-600 dark:disabled:border-neutral-700 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500"
        >
          {lesson.reviewed ? "Reviewed" : reviewing ? "Saving…" : "Mark as reviewed"}
        </button>
        <button
          type="button"
          onClick={handleToggleBookmark}
          aria-pressed={bookmarked}
          className="min-h-[44px] rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text dark:hover:bg-neutral-800"
        >
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </button>
        <EditPencil
          type="lesson"
          itemId={lesson.subtopicId}
          currentText={lesson.bodyMd}
          field="bodyMd"
        />
      </section>

      {reviewError ? (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {reviewError}
        </p>
      ) : null}
    </article>
  );
}
