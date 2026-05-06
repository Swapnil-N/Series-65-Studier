import type { TopicId } from "../../types/content";

export type TopicPickerValue = TopicId | "all";

export interface TopicPickerProps {
  value: TopicPickerValue;
  onChange: (v: TopicPickerValue) => void;
  /** Whether the leading "All" chip is shown. Defaults to true. */
  showAll?: boolean;
}

/**
 * Renders 5 chips (All, 1-4) with the NASAA topic names from the plan.
 * Presented as a radiogroup so screen readers read the selection correctly.
 *
 * Topic labels are intentionally short so the row fits on a phone viewport;
 * the `title` attribute carries the long name for sighted users on hover.
 */
const TOPICS: Array<{ id: TopicId; short: string; full: string }> = [
  {
    id: "1",
    short: "Economics",
    full: "Economic Factors & Business Information",
  },
  {
    id: "2",
    short: "Vehicles",
    full: "Investment Vehicle Characteristics",
  },
  {
    id: "3",
    short: "Strategies",
    full: "Client Investment Recommendations & Strategies",
  },
  {
    id: "4",
    short: "Laws & Ethics",
    full: "Laws, Regulations, Guidelines & Ethics",
  },
];

export function TopicPicker({
  value,
  onChange,
  showAll = true,
}: TopicPickerProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Filter by topic"
      className="flex flex-wrap gap-2"
    >
      {showAll ? (
        <Chip
          selected={value === "all"}
          onClick={() => onChange("all")}
          label="All"
          title="All topics"
        />
      ) : null}
      {TOPICS.map((t) => (
        <Chip
          key={t.id}
          selected={value === t.id}
          onClick={() => onChange(t.id)}
          label={`${t.id}. ${t.short}`}
          title={t.full}
        />
      ))}
    </div>
  );
}

function Chip({
  selected,
  onClick,
  label,
  title,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  title: string;
}) {
  // Minimum tap target is 44px via min-h. Selected chip gets a solid fill;
  // unselected chips stay outlined to keep the visual weight light on the row.
  const base =
    "min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition";
  const selectedClasses =
    "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500";
  const unselectedClasses =
    "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 " +
    "dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text dark:hover:bg-neutral-800";
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      title={title}
      className={`${base} ${selected ? selectedClasses : unselectedClasses}`}
    >
      {label}
    </button>
  );
}
