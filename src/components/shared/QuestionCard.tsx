import { useEffect } from "react";
import type { Question } from "../../types/content";
import { Citation } from "./Citation";
import { MarkdownRenderer } from "./MarkdownRenderer";

export type ChoiceIndex = 0 | 1 | 2 | 3;

export interface QuestionCardProps {
  question: Question;
  selectedIndex: ChoiceIndex | null;
  /** When true, correct answer + rationale are revealed and choices are disabled. */
  revealed: boolean;
  onSelect: (i: ChoiceIndex) => void;
  showCitation?: boolean;
}

/**
 * Presentational. State (selection / reveal) lives in the parent.
 *
 * Keyboard support: pressing 1/2/3/4 selects the corresponding choice. We
 * attach the listener to `document` rather than a focus target because this
 * component is used in both quiz and mock flows where focus may be on the
 * surrounding scroll container.
 */
export function QuestionCard({
  question,
  selectedIndex,
  revealed,
  onSelect,
  showCitation = true,
}: QuestionCardProps) {
  useEffect(() => {
    if (revealed) return;
    function handler(e: KeyboardEvent) {
      // Ignore repeats and modified keystrokes to avoid interfering with
      // browser shortcuts or auto-repeat.
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number(e.key);
      if (n >= 1 && n <= 4) {
        e.preventDefault();
        onSelect((n - 1) as ChoiceIndex);
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [revealed, onSelect]);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-base">
        <MarkdownRenderer>{question.stem}</MarkdownRenderer>
      </div>
      <ul className="flex flex-col gap-2" role="list">
        {question.choices.map((choice, i) => {
          const idx = i as ChoiceIndex;
          const isCorrect = idx === question.answerIndex;
          const isSelected = idx === selectedIndex;
          // Each state sets its own border/bg/text colors so Tailwind's
          // compiled-CSS ordering doesn't let "base neutral" override
          // "reveal green" (utilities for the same property merge
          // alphabetically — neutral wins after green).
          const base =
            "min-h-[44px] w-full rounded-lg border px-4 py-2 text-left transition ";
          let stateCls: string;
          if (!revealed) {
            stateCls =
              "border-neutral-300 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text " +
              (isSelected
                ? "ring-2 ring-blue-500 "
                : "hover:bg-neutral-50 dark:hover:bg-neutral-800 ");
          } else if (isCorrect) {
            // Correct answer is ALWAYS highlighted green when revealed,
            // regardless of which choice the user picked. Bumped to
            // -100 / -900 so it reads clearly against the page bg.
            stateCls =
              "border-2 border-green-600 bg-green-100 text-green-900 dark:border-green-400 dark:bg-green-900 dark:text-green-50 " +
              (isSelected ? "ring-2 ring-green-400 " : "");
          } else if (isSelected) {
            stateCls =
              "border-2 border-red-600 bg-red-100 text-red-900 dark:border-red-400 dark:bg-red-900 dark:text-red-50 ";
          } else {
            stateCls =
              "border-neutral-300 bg-white text-neutral-500 opacity-60 dark:border-neutral-700 dark:bg-ink-surface dark:text-neutral-500 ";
          }
          return (
            <li key={i}>
              <button
                type="button"
                className={base + stateCls}
                disabled={revealed}
                aria-pressed={isSelected}
                onClick={() => onSelect(idx)}
              >
                <span className="mr-2 font-semibold">{i + 1}.</span>
                {choice}
              </button>
            </li>
          );
        })}
      </ul>
      {revealed ? (
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-ink-surface">
          <div className="mb-1 text-sm font-semibold">Rationale</div>
          <div className="text-sm">
            <MarkdownRenderer>{question.rationale}</MarkdownRenderer>
          </div>
          {showCitation ? (
            <div className="mt-2">
              <Citation citation={question.citation} />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
