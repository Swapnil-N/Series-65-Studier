import { useEffect, useMemo, useRef, useState } from "react";
import type { Card, Lesson, Question } from "../types/content";
import type { ContentEdit } from "../types/state";
import { db } from "../lib/db";
import { bustContentCache, loadContent } from "../lib/content";

// The set of editable fields we support per item type. Lessons get `bodyMd`,
// cards get `front`/`back`, questions get `stem`/`rationale`. Callers pick one
// field per invocation so the modal can stay a single-textarea control; this
// keeps the component tiny and the diff on every save trivially small.
export type EditField =
  | "front"
  | "back"
  | "stem"
  | "rationale"
  | "bodyMd";

export type EditType = "card" | "question" | "lesson";

export interface EditPencilProps {
  type: EditType;
  itemId: string;
  /** Optional pre-fill. When absent we resolve via `loadContent()` on open. */
  currentText?: string;
  /**
   * Which field of the item this pencil edits. Defaults to the most common
   * field for the given type so callers can omit it for the simple case.
   */
  field?: EditField;
}

/**
 * Event fired after an edit save / clear so consumers (routes, LessonReader)
 * can re-run `loadContent()` without prop drilling a callback.
 */
export const CONTENT_EDITS_CHANGED = "content-edits-changed";

function defaultFieldFor(type: EditType): EditField {
  switch (type) {
    case "card":
      return "front";
    case "question":
      return "stem";
    case "lesson":
      return "bodyMd";
  }
}

async function resolveCurrentText(
  type: EditType,
  itemId: string,
  field: EditField,
): Promise<string> {
  const content = await loadContent();
  if (type === "lesson") {
    const l: Lesson | undefined = content.lessons.find(
      (x) => x.subtopicId === itemId,
    );
    if (!l) return "";
    if (field === "bodyMd") return l.bodyMd;
    return "";
  }
  if (type === "card") {
    const c: Card | undefined = content.cards.find((x) => x.id === itemId);
    if (!c) return "";
    if (field === "front") return c.front;
    if (field === "back") return c.back;
    return "";
  }
  const q: Question | undefined = content.questions.find(
    (x) => x.id === itemId,
  );
  if (!q) return "";
  if (field === "stem") return q.stem;
  if (field === "rationale") return q.rationale;
  return "";
}

/**
 * Reusable "edit this item" pencil. Renders as a small icon-ish button; on
 * tap it opens a modal with a textarea pre-filled with the current value.
 *
 *   Save           → writes/updates a `db.edits` row with `patch[field]`.
 *   Clear override → deletes the current `db.edits` row for this itemId.
 *   Cancel         → closes without touching storage.
 *
 * After save / clear we dispatch a window event so any consumer that shows
 * the merged content can re-run `loadContent()` and pick up the patch.
 */
export default function EditPencil({
  type,
  itemId,
  currentText,
  field,
}: EditPencilProps) {
  const resolvedField = field ?? defaultFieldFor(type);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [hasExisting, setHasExisting] = useState(false);
  const [confirmingClear, setConfirmingClear] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // Re-initialise the modal whenever it opens. We always re-read `db.edits`
  // so Clear-override is accurate, and we fall back to content-loader text
  // when no `currentText` prop was provided.
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const existing = await db.edits.get(itemId);
        const patch = existing?.patch as
          | Partial<Record<EditField, string>>
          | undefined;
        const fromEdit = patch?.[resolvedField];
        const base =
          typeof fromEdit === "string"
            ? fromEdit
            : (currentText ?? (await resolveCurrentText(type, itemId, resolvedField)));
        if (cancelled) return;
        setDraft(base);
        setHasExisting(Boolean(existing));
      } catch (e) {
        if (cancelled) return;
        setError(
          e instanceof Error ? e.message : "Failed to load current value.",
        );
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, itemId, type, resolvedField, currentText]);

  // Autofocus the textarea when the modal opens so keyboard users land in the
  // right spot immediately.
  useEffect(() => {
    if (open && !loading) textAreaRef.current?.focus();
  }, [open, loading]);

  const dialogLabelId = useMemo(
    () => `edit-pencil-title-${itemId}-${resolvedField}`,
    [itemId, resolvedField],
  );

  async function handleSave() {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const existing = await db.edits.get(itemId);
      const basePatch = (existing?.patch ?? {}) as Record<string, unknown>;
      const mergedPatch = { ...basePatch, [resolvedField]: draft };
      const edit: ContentEdit = {
        itemId,
        type,
        // Cast narrow — ContentEdit.patch accepts Partial<Card|Question|Lesson>.
        patch: mergedPatch as ContentEdit["patch"],
        updatedAt: Date.now(),
      };
      await db.edits.put(edit);
      bustContentCache();
      window.dispatchEvent(new Event(CONTENT_EDITS_CHANGED));
      setHasExisting(true);
      setOpen(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save.");
    } finally {
      setBusy(false);
    }
  }

  async function handleClearOverride() {
    if (busy) return;
    // Two-step confirm so a single fat-finger tap can't destroy an edit.
    if (!confirmingClear) {
      setConfirmingClear(true);
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await db.edits.delete(itemId);
      bustContentCache();
      window.dispatchEvent(new Event(CONTENT_EDITS_CHANGED));
      setHasExisting(false);
      setConfirmingClear(false);
      setOpen(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not clear override.");
    } finally {
      setBusy(false);
    }
  }

  function handleCancel() {
    if (busy) return;
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Edit this item"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-neutral-300 bg-white px-2 py-1 text-sm text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text dark:hover:bg-neutral-800"
        data-testid={`edit-pencil-${type}-${itemId}`}
      >
        <span aria-hidden="true">✎</span>
        <span className="sr-only">Edit</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogLabelId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          data-testid="edit-pencil-modal"
        >
          <div className="w-full max-w-xl rounded-xl border border-neutral-200 bg-white p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] shadow-xl dark:border-neutral-800 dark:bg-ink-surface">
            <h2
              id={dialogLabelId}
              className="mb-2 text-lg font-semibold"
            >
              Edit {resolvedField}
            </h2>
            <p className="mb-3 text-xs text-neutral-500 dark:text-neutral-400">
              Changes are saved locally as an override on the shipped content.
              Clearing the override restores the original text.
            </p>
            {loading ? (
              <div className="p-4 text-sm text-neutral-500" role="status">
                Loading…
              </div>
            ) : (
              <textarea
                ref={textAreaRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={8}
                aria-label={`Edit ${resolvedField}`}
                className="min-h-[160px] w-full rounded-md border border-neutral-300 bg-white p-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text"
                data-testid="edit-pencil-textarea"
              />
            )}
            {error ? (
              <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            ) : null}
            <div className="mt-3 flex flex-wrap items-center justify-end gap-2">
              {hasExisting ? (
                <button
                  type="button"
                  onClick={handleClearOverride}
                  disabled={busy}
                  className={
                    confirmingClear
                      ? "min-h-[44px] rounded-md border border-red-600 bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
                      : "min-h-[44px] rounded-md border border-red-300 bg-white px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50 disabled:opacity-50 dark:border-red-800 dark:bg-ink-surface dark:text-red-300 dark:hover:bg-red-950"
                  }
                  data-testid="edit-pencil-clear"
                >
                  {confirmingClear ? "Really clear?" : "Clear override"}
                </button>
              ) : null}
              <button
                type="button"
                onClick={handleCancel}
                disabled={busy}
                className="min-h-[44px] rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 disabled:opacity-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
                data-testid="edit-pencil-cancel"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={busy || loading}
                className="min-h-[44px] rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 dark:border-blue-500 dark:bg-blue-500"
                data-testid="edit-pencil-save"
              >
                {busy ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
