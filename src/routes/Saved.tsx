import { useCallback, useEffect, useRef, useState } from "react";
import { db } from "../lib/db";
import { loadContent } from "../lib/content";
import type { Bookmark, Note } from "../types/state";
import type { Card, Lesson, Question } from "../types/content";
import { EmptyState, MarkdownRenderer } from "../components/shared";
import { CONTENT_EDITS_CHANGED } from "../components/EditPencil";

type Tab = "bookmarks" | "notes";

interface BookmarkRow {
  bookmark: Bookmark;
  preview: string;
  title: string;
}

interface NoteRow {
  note: Note;
  type: "card" | "question" | "lesson" | "unknown";
  preview: string;
}

// Small, best-effort preview truncation — Saved rows should never become giant
// walls of text. Keeps lesson bodies scannable.
function clip(s: string, max = 140): string {
  const clean = s.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : `${clean.slice(0, max - 1)}…`;
}

/** Figure out a printable preview + title for a given itemId by probing the
 *  three content tables. Falls back to "Unknown item" if the id is stale. */
function resolveContentMeta(
  itemId: string,
  type: "card" | "question" | "lesson",
  content: { lessons: Lesson[]; cards: Card[]; questions: Question[] },
): { title: string; preview: string } {
  if (type === "lesson") {
    const l = content.lessons.find((x) => x.subtopicId === itemId);
    if (l) return { title: l.title, preview: clip(l.bodyMd) };
  } else if (type === "card") {
    const c = content.cards.find((x) => x.id === itemId);
    if (c) return { title: "Flashcard", preview: clip(c.front) };
  } else if (type === "question") {
    const q = content.questions.find((x) => x.id === itemId);
    if (q) return { title: "Question", preview: clip(q.stem) };
  }
  return { title: "Unknown item", preview: "" };
}

function inferNoteType(
  itemId: string,
  content: { lessons: Lesson[]; cards: Card[]; questions: Question[] },
): "card" | "question" | "lesson" | "unknown" {
  if (content.lessons.some((l) => l.subtopicId === itemId)) return "lesson";
  if (content.cards.some((c) => c.id === itemId)) return "card";
  if (content.questions.some((q) => q.id === itemId)) return "question";
  return "unknown";
}

/**
 * Return a routed in-app URL to jump to the bookmark target. We keep this
 * coarse — lessons go to `/learn?subtopic=…`, cards to `/cards`, questions
 * to `/quiz` — because deeper deep-linking would require changes in
 * non-Owned files.
 */
function jumpHrefFor(
  type: "card" | "question" | "lesson",
  itemId: string,
): string {
  if (type === "lesson") return `/learn?subtopic=${encodeURIComponent(itemId)}`;
  if (type === "card") return "/cards";
  return "/quiz";
}

export default function Saved() {
  const [tab, setTab] = useState<Tab>("bookmarks");
  const [bookmarks, setBookmarks] = useState<BookmarkRow[] | null>(null);
  const [notes, setNotes] = useState<NoteRow[] | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingDraft, setEditingDraft] = useState<string>("");
  // Set true on unmount; guards setState calls after async awaits so
  // a fast nav away doesn't fire the React unmounted-update warning
  // and doesn't leave stale rows in memory. (Review B3.)
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const refresh = useCallback(async () => {
    const [bmRows, noteRows, content] = await Promise.all([
      db.bookmarks.toArray(),
      db.notes.toArray(),
      loadContent(),
    ]);
    if (!mountedRef.current) return;
    const bmOut: BookmarkRow[] = bmRows
      .sort((a, b) => b.createdAt - a.createdAt)
      .map((b) => {
        const meta = resolveContentMeta(b.itemId, b.type, content);
        return { bookmark: b, title: meta.title, preview: meta.preview };
      });
    const noteOut: NoteRow[] = noteRows
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .map((n) => {
        const type = inferNoteType(n.itemId, content);
        const resolvedType = type === "unknown" ? "lesson" : type;
        const meta = resolveContentMeta(n.itemId, resolvedType, content);
        return {
          note: n,
          type,
          preview: meta.preview || "(target missing)",
        };
      });
    if (!mountedRef.current) return;
    setBookmarks(bmOut);
    setNotes(noteOut);
  }, []);

  useEffect(() => {
    void refresh();
    function onEdits() {
      void refresh();
    }
    window.addEventListener(CONTENT_EDITS_CHANGED, onEdits);
    return () => window.removeEventListener(CONTENT_EDITS_CHANGED, onEdits);
  }, [refresh]);

  const handleRemoveBookmark = useCallback(
    async (itemId: string) => {
      await db.bookmarks.delete(itemId);
      await refresh();
    },
    [refresh],
  );

  const handleDeleteNote = useCallback(
    async (itemId: string) => {
      await db.notes.delete(itemId);
      if (editingNoteId === itemId) {
        setEditingNoteId(null);
        setEditingDraft("");
      }
      await refresh();
    },
    [refresh, editingNoteId],
  );

  const handleStartEdit = useCallback((n: Note) => {
    setEditingNoteId(n.itemId);
    setEditingDraft(n.body);
  }, []);

  const handleSaveEdit = useCallback(async () => {
    if (editingNoteId === null) return;
    const trimmed = editingDraft.trim();
    if (!trimmed) {
      await db.notes.delete(editingNoteId);
    } else {
      await db.notes.put({
        itemId: editingNoteId,
        body: trimmed,
        updatedAt: Date.now(),
      });
    }
    setEditingNoteId(null);
    setEditingDraft("");
    await refresh();
  }, [editingNoteId, editingDraft, refresh]);

  const handleCancelEdit = useCallback(() => {
    setEditingNoteId(null);
    setEditingDraft("");
  }, []);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4" data-testid="saved">
      <header>
        <h1 className="text-2xl font-semibold">Saved</h1>
      </header>

      <div
        role="tablist"
        aria-label="Saved tabs"
        className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800"
      >
        <TabButton active={tab === "bookmarks"} onClick={() => setTab("bookmarks")}>
          Bookmarks
        </TabButton>
        <TabButton active={tab === "notes"} onClick={() => setTab("notes")}>
          Notes
        </TabButton>
      </div>

      {tab === "bookmarks" ? (
        <section aria-label="Bookmarks" data-testid="bookmarks-tab">
          {bookmarks === null ? (
            <div className="p-4 text-sm text-neutral-500" role="status">
              Loading…
            </div>
          ) : bookmarks.length === 0 ? (
            <EmptyState
              title="No bookmarks yet."
              message="Star items in lessons, flashcards, or quizzes to save them here."
            />
          ) : (
            <ul className="flex flex-col gap-2" data-testid="bookmarks-list">
              {bookmarks.map((row) => (
                <li
                  key={row.bookmark.itemId}
                  className="rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-ink-surface"
                  data-testid={`bookmark-row-${row.bookmark.itemId}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-block rounded-full border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                          {row.bookmark.type}
                        </span>
                        <span className="text-sm font-semibold">{row.title}</span>
                      </div>
                      {row.preview ? (
                        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                          {row.preview}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <a
                        href={jumpHrefFor(row.bookmark.type, row.bookmark.itemId)}
                        className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
                      >
                        Jump to
                      </a>
                      <button
                        type="button"
                        onClick={() => handleRemoveBookmark(row.bookmark.itemId)}
                        className="min-h-[44px] rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
                        data-testid={`bookmark-remove-${row.bookmark.itemId}`}
                      >
                        Remove bookmark
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : null}

      {tab === "notes" ? (
        <section aria-label="Notes" data-testid="notes-tab">
          {notes === null ? (
            <div className="p-4 text-sm text-neutral-500" role="status">
              Loading…
            </div>
          ) : notes.length === 0 ? (
            <EmptyState
              title="No notes yet."
              message="Jot notes on lessons, flashcards, or questions and they'll appear here."
            />
          ) : (
            <ul className="flex flex-col gap-2" data-testid="notes-list">
              {notes.map((row) => {
                const isEditing = editingNoteId === row.note.itemId;
                return (
                  <li
                    key={row.note.itemId}
                    className="rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-ink-surface"
                    data-testid={`note-row-${row.note.itemId}`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="inline-block rounded-full border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        {row.type}
                      </span>
                      {row.preview ? (
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                          {row.preview}
                        </span>
                      ) : null}
                    </div>
                    {isEditing ? (
                      <div className="flex flex-col gap-2">
                        <textarea
                          value={editingDraft}
                          onChange={(e) => setEditingDraft(e.target.value)}
                          rows={4}
                          aria-label="Edit note"
                          className="min-h-[88px] w-full rounded-md border border-neutral-300 bg-white p-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text"
                          data-testid={`note-edit-textarea-${row.note.itemId}`}
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={handleSaveEdit}
                            className="min-h-[44px] rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                            data-testid={`note-save-${row.note.itemId}`}
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="min-h-[44px] rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="text-sm text-neutral-800 dark:text-neutral-200">
                          <MarkdownRenderer>{row.note.body}</MarkdownRenderer>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <button
                            type="button"
                            onClick={() => handleStartEdit(row.note)}
                            className="min-h-[44px] rounded-md border border-neutral-300 bg-white px-3 py-1 text-xs font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
                            data-testid={`note-edit-${row.note.itemId}`}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteNote(row.note.itemId)}
                            className="min-h-[44px] rounded-md border border-red-300 bg-white px-3 py-1 text-xs font-medium text-red-700 hover:bg-red-50 dark:border-red-800 dark:bg-ink-surface dark:text-red-300 dark:hover:bg-red-950"
                            data-testid={`note-delete-${row.note.itemId}`}
                          >
                            Delete note
                          </button>
                        </div>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      ) : null}
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={
        "min-h-[44px] rounded-t-md border-b-2 px-4 py-2 text-sm font-semibold transition " +
        (active
          ? "border-blue-600 text-blue-700 dark:border-blue-400 dark:text-blue-300"
          : "border-transparent text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100")
      }
    >
      {children}
    </button>
  );
}
