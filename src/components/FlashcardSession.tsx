import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Card } from "../types/content";
import type { AppSettings, CardState } from "../types/state";
import { DEFAULT_SETTINGS, db, getSettings } from "../lib/db";
import {
  Citation,
  EmptyState,
  MarkdownRenderer,
  RatingButtons,
  ReviewedBadge,
  type RatingGrade,
} from "./shared";
import EditPencil from "./EditPencil";
import { newCardState, review } from "../lib/srs";

export interface FlashcardSessionProps {
  /** The pool of cards to consider for this session. The due queue is derived
   *  from `cardState` on mount; empty pool renders an EmptyState. */
  cards: Card[];
  /** Lets tests pin `now` for deterministic queue computation. */
  now?: number;
  /** Injected settings override; if omitted we read from Dexie on mount. */
  settings?: AppSettings;
}

interface UndoEntry {
  /** The card id we just rated. */
  cardId: string;
  /** Prior CardState (or null if the card had no state row pre-review). */
  prev: CardState | null;
  /** The `cards[]` index we were on before advancing. */
  prevIndex: number;
  /** ISO date key we incremented on `dailyActivity`. */
  dateKey: string;
}

/** Produce a YYYY-MM-DD key for a given epoch ms using local time. */
function toDateKey(ts: number): string {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * Given a pool of cards and the current `cardState` table, produce the ordered
 * queue for this session: all due reviews first (ascending due time), then up
 * to `newCardsPerDay` brand-new cards. Cards whose state is missing are
 * treated as new; cards with `state !== 0` and `due > now` are excluded.
 */
function buildQueue(
  pool: Card[],
  stateByCardId: Map<string, CardState>,
  now: number,
  newCardsPerDay: number,
): Card[] {
  const dueReviews: Array<{ card: Card; due: number }> = [];
  const newCards: Card[] = [];
  for (const card of pool) {
    const s = stateByCardId.get(card.id);
    if (!s || s.state === 0) {
      newCards.push(card);
      continue;
    }
    if (s.due <= now) {
      dueReviews.push({ card, due: s.due });
    }
  }
  dueReviews.sort((a, b) => a.due - b.due);
  return [
    ...dueReviews.map((d) => d.card),
    ...newCards.slice(0, Math.max(0, newCardsPerDay)),
  ];
}

/**
 * Flashcard SRS session. Owns:
 *   - due-queue computation
 *   - flip state (reveal back)
 *   - review persistence (Dexie cardState + dailyActivity counter)
 *   - one-step undo of the last rating
 *   - keyboard: space reveals, 1/2/3/4 rate (delegated to RatingButtons)
 */
export function FlashcardSession({
  cards,
  now,
  settings: settingsProp,
}: FlashcardSessionProps) {
  const [settings, setSettings] = useState<AppSettings>(
    settingsProp ?? DEFAULT_SETTINGS,
  );
  const [queue, setQueue] = useState<Card[] | null>(null);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const undoRef = useRef<UndoEntry | null>(null);
  const [undoAvailable, setUndoAvailable] = useState(false);

  // Load settings + build the initial queue. Depends only on `cards` / `now` /
  // `settingsProp` so a swapped-in topic pool re-computes the queue.
  useEffect(() => {
    let cancelled = false;
    async function boot() {
      const s = settingsProp ?? (await getSettings());
      if (cancelled) return;
      setSettings(s);
      const stateRows = await db.cardState.toArray();
      if (cancelled) return;
      const map = new Map<string, CardState>();
      for (const row of stateRows) map.set(row.cardId, row);
      const t = now ?? Date.now();
      const q = buildQueue(cards, map, t, s.newCardsPerDay);
      setQueue(q);
      setIndex(0);
      setRevealed(false);
      undoRef.current = null;
      setUndoAvailable(false);
    }
    void boot();
    return () => {
      cancelled = true;
    };
  }, [cards, now, settingsProp]);

  const current = queue && index < queue.length ? queue[index] : null;

  // Space reveals the back; once revealed the RatingButtons own 1/2/3/4. We
  // bind to `document` to match the pattern used by RatingButtons itself.
  useEffect(() => {
    if (!current || revealed) return;
    function handler(e: KeyboardEvent) {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setRevealed(true);
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [current, revealed]);

  const onRate = useCallback(
    async (grade: RatingGrade) => {
      if (!current || !queue) return;
      const t = now ?? Date.now();
      const dateKey = toDateKey(t);
      // Single transaction wraps the cardState write + dailyActivity bump
      // so a partial Dexie failure can't log a review without crediting
      // daily activity (or vice versa). Review W1.
      const prev = await db.transaction(
        "rw",
        db.cardState,
        db.dailyActivity,
        async () => {
          const before = (await db.cardState.get(current.id)) ?? null;
          const baseState: CardState = before ?? newCardState(current.id, t);
          const next = review(baseState, grade as Grade, {
            cramMode: settings.cramMode,
            targetRetention: settings.targetRetention,
            now: t,
          });
          await db.cardState.put(next);
          const existing = await db.dailyActivity.get(dateKey);
          if (existing) {
            await db.dailyActivity.put({
              ...existing,
              cardsReviewed: existing.cardsReviewed + 1,
            });
          } else {
            await db.dailyActivity.put({
              date: dateKey,
              cardsReviewed: 1,
              questionsAnswered: 0,
              lessonsCompleted: 0,
            });
          }
          return before;
        },
      );

      undoRef.current = {
        cardId: current.id,
        prev,
        prevIndex: index,
        dateKey,
      };
      setUndoAvailable(true);
      setIndex((i) => i + 1);
      setRevealed(false);
    },
    [current, queue, settings.cramMode, settings.targetRetention, now, index],
  );

  const onUndo = useCallback(async () => {
    const u = undoRef.current;
    if (!u) return;
    // Same transaction discipline as onRate — undo must restore both
    // tables atomically.
    await db.transaction(
      "rw",
      db.cardState,
      db.dailyActivity,
      async () => {
        if (u.prev) await db.cardState.put(u.prev);
        else await db.cardState.delete(u.cardId);
        const existing = await db.dailyActivity.get(u.dateKey);
        if (existing) {
          await db.dailyActivity.put({
            ...existing,
            cardsReviewed: Math.max(0, existing.cardsReviewed - 1),
          });
        }
      },
    );
    undoRef.current = null;
    setUndoAvailable(false);
    setIndex(u.prevIndex);
    setRevealed(false);
  }, []);

  const totalInQueue = queue?.length ?? 0;
  const positionLabel = useMemo(() => {
    if (!queue || queue.length === 0) return "";
    const shown = Math.min(index + 1, queue.length);
    return `${shown} / ${queue.length}`;
  }, [queue, index]);

  if (queue === null) {
    return (
      <div className="p-4 text-sm text-neutral-500" role="status">
        Loading cards…
      </div>
    );
  }

  if (totalInQueue === 0 || !current) {
    return (
      <EmptyState
        title="Nothing due."
        message="You're all caught up — come back later for more reviews."
        cta={
          undoAvailable ? (
            <button
              type="button"
              onClick={onUndo}
              className="min-h-[44px] rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Undo last rating
            </button>
          ) : null
        }
      />
    );
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4" data-testid="flashcard-session">
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span aria-label="queue-position">{positionLabel}</span>
        <button
          type="button"
          onClick={onUndo}
          disabled={!undoAvailable}
          className="rounded border border-neutral-300 px-2 py-1 text-xs font-medium disabled:opacity-40 dark:border-neutral-700"
        >
          Undo
        </button>
      </div>

      <div
        className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="flashcard-front"
      >
        <div className="mb-2 flex justify-end">
          <EditPencil
            type="card"
            itemId={current.id}
            currentText={revealed ? current.back : current.front}
            field={revealed ? "back" : "front"}
          />
        </div>
        <MarkdownRenderer>{current.front}</MarkdownRenderer>
      </div>

      {revealed ? (
        <div
          className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-ink-surface"
          data-testid="flashcard-back"
        >
          <MarkdownRenderer>{current.back}</MarkdownRenderer>
          <div className="mt-3 flex items-center justify-between gap-2">
            <Citation citation={current.citation} />
            <ReviewedBadge reviewed={current.reviewed} />
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="min-h-[44px] rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
          aria-label="Reveal answer"
        >
          Tap or press Space to reveal
        </button>
      )}

      {revealed ? <RatingButtons onRate={onRate} /> : null}
    </div>
  );
}

// Local alias to avoid importing Grade from srs into the public prop surface;
// we only need it for the review() call.
type Grade = 1 | 2 | 3 | 4;
