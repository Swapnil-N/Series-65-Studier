import { useCallback, useEffect, useMemo, useState } from "react";
import type { Question } from "../types/content";
import type { MissedItem } from "../types/state";
import { db } from "../lib/db";
import { loadContent } from "../lib/content";
import { EmptyState, QuestionCard, type ChoiceIndex } from "./shared";

export interface MissedReviewProps {
  /**
   * Test hook — pre-seeded questions keyed by id. When provided we skip the
   * loadContent() call entirely so the component is deterministic in jsdom
   * (loadContent pulls from the bundled content aggregator + Dexie edits).
   */
  questionsById?: Map<string, Question>;
  /**
   * Optional clock override for deterministic tests; defaults to Date.now().
   */
  now?: () => number;
}

/**
 * Flashcard-style review for the missed-questions queue.
 *
 * Rules (from the plan):
 *   - Items cycle until answered correctly **twice in a row** per session.
 *   - Wrong answers reset the per-item "correct streak" counter to 0.
 *   - On reaching 2, we remove the item from `db.missedQueue`.
 *
 * The session queue lives in local state; `db.missedQueue` is the source of
 * truth for which items still need review across sessions. We rehydrate on
 * mount and write-through on each removal.
 */
export function MissedReview({ questionsById, now }: MissedReviewProps) {
  const clock = now ?? (() => Date.now());
  const [queue, setQueue] = useState<MissedItem[] | null>(null);
  const [questions, setQuestions] = useState<Map<string, Question> | null>(
    questionsById ?? null,
  );
  const [streakByQid, setStreakByQid] = useState<Record<string, number>>({});
  // Reveal / selection state for the current card.
  const [selected, setSelected] = useState<ChoiceIndex | null>(null);

  // Rehydrate the queue (and questions, if not injected) on mount.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const items = await db.missedQueue.toArray();
      // Order by addedAt asc so the oldest miss surfaces first.
      items.sort((a, b) => a.addedAt - b.addedAt);
      if (!cancelled) setQueue(items);
      if (!questionsById) {
        const { questions: qs } = await loadContent();
        const map = new Map<string, Question>();
        for (const q of qs) map.set(q.id, q);
        if (!cancelled) setQuestions(map);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [questionsById]);

  const currentItem = queue && queue.length > 0 ? queue[0] : null;
  const currentQuestion = useMemo(() => {
    if (!currentItem || !questions) return null;
    return questions.get(currentItem.questionId) ?? null;
  }, [currentItem, questions]);

  const revealed = selected !== null;

  // Track whether the current card is "complete" — i.e., we already hit 2
  // consecutive corrects and should drop it on advance rather than rotate it.
  const [completeCurrent, setCompleteCurrent] = useState(false);

  const advance = useCallback(() => {
    setSelected(null);
    setQueue((q) => {
      if (!q || q.length === 0) return q;
      const [head, ...rest] = q;
      if (completeCurrent) {
        // Drop this item from the in-memory queue (already removed from Dexie).
        return rest;
      }
      // Rotate the head to the back so other items surface before it recycles.
      if (q.length === 1) return q; // nothing to rotate against
      return [...rest, { ...head, addedAt: clock() }];
    });
    setCompleteCurrent(false);
  }, [completeCurrent, clock]);

  const handleSelect = useCallback(
    async (choice: ChoiceIndex) => {
      if (!currentItem || !currentQuestion || revealed) return;
      setSelected(choice);

      const correct = choice === currentQuestion.answerIndex;
      const qid = currentItem.questionId;

      if (correct) {
        const nextStreak = (streakByQid[qid] ?? 0) + 1;
        setStreakByQid((s) => ({ ...s, [qid]: nextStreak }));
        if (nextStreak >= 2) {
          // Two correct in a row → retire from the persistent missed queue.
          // The in-memory queue is adjusted on `advance` via `completeCurrent`.
          await db.missedQueue.delete(qid);
          setCompleteCurrent(true);
        }
      } else {
        // Wrong → reset streak. Item remains in queue and will rotate on
        // `advance`.
        setStreakByQid((s) => ({ ...s, [qid]: 0 }));
      }
    },
    [currentItem, currentQuestion, revealed, streakByQid],
  );

  // Loading state: queue still null.
  if (queue === null || questions === null) {
    return (
      <div className="p-4 text-sm text-neutral-500" role="status">
        Loading missed queue…
      </div>
    );
  }

  if (queue.length === 0) {
    return (
      <EmptyState
        title="All clear"
        message="No missed questions to review. Great work."
      />
    );
  }

  if (!currentQuestion) {
    // We have a queue item but no matching question content (stale id) —
    // advance past it so the session isn't stuck.
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4">
        <p className="text-sm text-neutral-500">
          This question is no longer available. Skipping.
        </p>
        <button
          type="button"
          className="min-h-[44px] rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm"
          onClick={advance}
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <div
      className="mx-auto flex max-w-2xl flex-col gap-4 p-4"
      data-testid="missed-review"
    >
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span>Missed queue: {queue.length} remaining</span>
        <span>Streak: {streakByQid[currentItem!.questionId] ?? 0}/2</span>
      </div>
      <QuestionCard
        question={currentQuestion}
        selectedIndex={selected}
        revealed={revealed}
        onSelect={handleSelect}
      />
      {revealed ? (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={advance}
            className="min-h-[44px] rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
            data-testid="missed-next"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default MissedReview;
