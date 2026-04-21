import { useCallback, useEffect, useMemo, useState } from "react";
import type { Question, TopicId } from "../types/content";
import type { Attempt } from "../types/state";
import { QuestionCard, type ChoiceIndex } from "./shared";

export interface QuizRunnerProps {
  questions: Question[];
  /** If resuming, start at this index (default 0). */
  initialIndex?: number;
  /**
   * If resuming, the prior answers array (length must match `questions.length`
   * or be empty; we normalise to `questions.length` internally). Each entry is
   * the user's selected choice for that question, or null if unanswered.
   */
  initialAnswers?: (ChoiceIndex | null)[];
  /**
   * Fired once per answered question with the derived Attempt. Parent is
   * responsible for persisting to Dexie (attempts, dailyActivity, missedQueue)
   * and clearing any sessionStorage scratch key on completion.
   */
  onAnswer?: (attempt: Attempt) => void;
  /**
   * Fired on index / answers change so the parent can mirror to sessionStorage
   * for crash recovery.
   */
  onProgress?: (state: {
    index: number;
    answers: (ChoiceIndex | null)[];
  }) => void;
  /**
   * Reset-to-empty handler: invoked when the user taps "Restart" on the
   * scorecard. Parent typically triggers a new random draw.
   */
  onRestart?: () => void;
  /** Lets tests pin attempt timestamps. */
  now?: number;
}

/**
 * Derive the topicId from a subtopicId like "1.1" → "1". We restrict to the
 * four-topic TopicId union because all runtime content is gated on that.
 */
function topicOf(subtopicId: string): TopicId {
  const head = subtopicId.split(".")[0];
  if (head === "1" || head === "2" || head === "3" || head === "4") return head;
  // Content that somehow escapes the topic set shouldn't crash the quiz.
  // Default to "1"; in practice this path is unreachable after Zod validation.
  return "1";
}

/**
 * Per-question state machine:
 *   selecting (selectedIndex == null, revealed = false)
 *     → on choose → revealed (selectedIndex set, revealed = true) — also fires
 *       onAnswer exactly once.
 *   revealed → on "Next" / Enter → advance index, reset to selecting.
 *
 * Double-tap protection is handled by QuestionCard itself: once `revealed` is
 * true, every choice button is `disabled`, so a rapid second click never
 * reaches our onSelect handler. We additionally guard against re-entry in
 * `handleSelect` for safety in case a parent ever re-renders with stale props.
 */
export function QuizRunner({
  questions,
  initialIndex = 0,
  initialAnswers,
  onAnswer,
  onProgress,
  onRestart,
  now,
}: QuizRunnerProps) {
  // Normalise the answers array to match the question count.
  const makeEmpty = useCallback(
    () => questions.map(() => null as ChoiceIndex | null),
    [questions],
  );
  const [answers, setAnswers] = useState<(ChoiceIndex | null)[]>(() => {
    if (!initialAnswers || initialAnswers.length === 0) return makeEmpty();
    // Pad or truncate if lengths don't match the question list (defensive).
    const out = makeEmpty();
    for (let i = 0; i < Math.min(initialAnswers.length, out.length); i++) {
      out[i] = initialAnswers[i] ?? null;
    }
    return out;
  });
  const [index, setIndex] = useState<number>(() => {
    if (initialIndex < 0) return 0;
    if (initialIndex > questions.length) return questions.length;
    return initialIndex;
  });

  // Notify the parent on progress change so it can write to sessionStorage.
  // We intentionally *don't* fire this on the initial render (the parent
  // already has those values) — only on subsequent changes.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    onProgress?.({ index, answers });
  }, [index, answers, onProgress, mounted]);

  const current = index < questions.length ? questions[index] : null;
  const selected = current ? answers[index] : null;
  const revealed = selected !== null && selected !== undefined;

  const handleSelect = useCallback(
    (choice: ChoiceIndex) => {
      if (!current) return;
      // Guard against re-entry: if this slot is already answered, do nothing.
      // QuestionCard's `revealed` disables the buttons, but a malformed parent
      // could still call through.
      if (answers[index] !== null && answers[index] !== undefined) return;

      const correct = choice === current.answerIndex;
      const attempt: Attempt = {
        questionId: current.id,
        subtopicId: current.subtopicId,
        topicId: topicOf(current.subtopicId),
        correct,
        mode: "quiz",
        timestamp: now ?? Date.now(),
      };

      setAnswers((prev) => {
        const next = prev.slice();
        next[index] = choice;
        return next;
      });
      onAnswer?.(attempt);
    },
    [answers, current, index, now, onAnswer],
  );

  const atEnd = index >= questions.length;

  const handleNext = useCallback(() => {
    if (!revealed) return;
    setIndex((i) => Math.min(i + 1, questions.length));
  }, [revealed, questions.length]);

  // Enter advances when revealed. We bind to document so the key works
  // regardless of focus target on mobile.
  useEffect(() => {
    if (!revealed || atEnd) return;
    function onKey(e: KeyboardEvent) {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [revealed, atEnd, handleNext]);

  const positionLabel = useMemo(() => {
    if (questions.length === 0) return "";
    const shown = Math.min(index + 1, questions.length);
    return `${shown} / ${questions.length}`;
  }, [index, questions.length]);

  if (questions.length === 0) {
    // Defensive: the route wraps us with EmptyState, but if a caller hands us
    // zero questions we still render something coherent rather than crashing.
    return (
      <div className="p-4 text-sm text-neutral-500" role="status">
        No questions in this quiz.
      </div>
    );
  }

  if (atEnd) {
    return (
      <Scorecard
        questions={questions}
        answers={answers}
        onRestart={onRestart}
      />
    );
  }

  if (!current) return null;

  return (
    <div
      className="mx-auto flex max-w-2xl flex-col gap-4 p-4"
      data-testid="quiz-runner"
    >
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span aria-label="quiz-position">{positionLabel}</span>
      </div>
      <QuestionCard
        question={current}
        selectedIndex={selected ?? null}
        revealed={revealed}
        onSelect={handleSelect}
      />
      {revealed ? (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="min-h-[44px] rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
            data-testid="quiz-next"
          >
            {index + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

interface ScorecardProps {
  questions: Question[];
  answers: (ChoiceIndex | null)[];
  onRestart?: () => void;
}

/**
 * End-of-quiz breakdown. Overall accuracy + per-topic counts/percentages.
 * Unanswered questions (shouldn't happen in the normal flow) count as wrong.
 */
function Scorecard({ questions, answers, onRestart }: ScorecardProps) {
  const perTopic = useMemo(() => {
    const agg = new Map<TopicId, { correct: number; total: number }>();
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const t = topicOf(q.subtopicId);
      const entry = agg.get(t) ?? { correct: 0, total: 0 };
      entry.total += 1;
      if (answers[i] === q.answerIndex) entry.correct += 1;
      agg.set(t, entry);
    }
    // Sorted by topic id for a stable, predictable visual order.
    return Array.from(agg.entries())
      .map(([topicId, v]) => ({ topicId, ...v }))
      .sort((a, b) => a.topicId.localeCompare(b.topicId));
  }, [questions, answers]);

  const overall = useMemo(() => {
    let correct = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].answerIndex) correct += 1;
    }
    return { correct, total: questions.length };
  }, [questions, answers]);

  const pct = (c: number, t: number) => (t === 0 ? 0 : Math.round((c / t) * 100));

  return (
    <div
      className="mx-auto flex max-w-2xl flex-col gap-4 p-4"
      data-testid="quiz-scorecard"
    >
      <h2 className="text-xl font-semibold">Quiz complete</h2>
      <div
        className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="quiz-scorecard-overall"
      >
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          Overall
        </div>
        <div className="text-3xl font-bold">
          {pct(overall.correct, overall.total)}%
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {overall.correct} / {overall.total} correct
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface">
        <div className="mb-2 text-sm font-semibold">By topic</div>
        <ul className="flex flex-col gap-2">
          {perTopic.map((row) => (
            <li
              key={row.topicId}
              className="flex items-center justify-between text-sm"
              data-testid={`quiz-scorecard-topic-${row.topicId}`}
            >
              <span>Topic {row.topicId}</span>
              <span className="tabular-nums">
                {row.correct} / {row.total} ({pct(row.correct, row.total)}%)
              </span>
            </li>
          ))}
        </ul>
      </div>

      {onRestart ? (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onRestart}
            className="min-h-[44px] rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
            data-testid="quiz-restart"
          >
            Restart
          </button>
        </div>
      ) : null}
    </div>
  );
}
