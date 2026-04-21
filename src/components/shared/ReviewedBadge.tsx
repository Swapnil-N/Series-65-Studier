export interface ReviewedBadgeProps {
  reviewed: boolean;
}

/**
 * Small "Unreviewed" pill shown on content items that haven't been manually
 * approved yet. Intentionally renders nothing when `reviewed` is true so
 * callers can drop it inline without conditional wrapping.
 */
export function ReviewedBadge({ reviewed }: ReviewedBadgeProps) {
  if (reviewed) return null;
  return (
    <span
      className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200"
      role="status"
      aria-label="Unreviewed item"
    >
      Unreviewed
    </span>
  );
}
