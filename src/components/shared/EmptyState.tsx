import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  message?: string;
  cta?: ReactNode;
}

/**
 * Centered empty state for zero-queue / zero-results screens.
 */
export function EmptyState({ title, message, cta }: EmptyStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 px-6 py-12 text-center"
      role="status"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {message ? (
        <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
          {message}
        </p>
      ) : null}
      {cta ? <div className="mt-2">{cta}</div> : null}
    </div>
  );
}
