import { useEffect } from "react";

export type RatingGrade = 1 | 2 | 3 | 4;

export interface RatingButtonsProps {
  onRate: (grade: RatingGrade) => void;
  disabled?: boolean;
}

const BUTTONS: Array<{
  grade: RatingGrade;
  label: string;
  base: string;
  hover: string;
}> = [
  {
    grade: 1,
    label: "Again",
    base: "bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-500",
    hover: "",
  },
  {
    grade: 2,
    label: "Hard",
    base: "bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-500",
    hover: "",
  },
  {
    grade: 3,
    label: "Good",
    base: "bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-500",
    hover: "",
  },
  {
    grade: 4,
    label: "Easy",
    base: "bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-500",
    hover: "",
  },
];

/**
 * Four-button FSRS rating strip. The `grade` param matches `ts-fsrs`'s 1-4
 * scale so consumers can pass straight through without remapping.
 *
 * Keyboard: 1/2/3/4 fire Again/Hard/Good/Easy. Listener is attached to the
 * document so ratings can be keyboard-driven from anywhere on the page.
 */
export function RatingButtons({ onRate, disabled = false }: RatingButtonsProps) {
  useEffect(() => {
    if (disabled) return;
    function handler(e: KeyboardEvent) {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number(e.key);
      if (n >= 1 && n <= 4) {
        e.preventDefault();
        onRate(n as RatingGrade);
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [disabled, onRate]);

  return (
    <div
      className="grid grid-cols-4 gap-2"
      role="group"
      aria-label="Rate your recall"
    >
      {BUTTONS.map((b) => (
        <button
          key={b.grade}
          type="button"
          disabled={disabled}
          onClick={() => onRate(b.grade)}
          className={
            "min-h-[44px] min-w-[44px] rounded-lg px-3 py-2 font-semibold transition " +
            "disabled:opacity-50 disabled:pointer-events-none " +
            b.base
          }
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
