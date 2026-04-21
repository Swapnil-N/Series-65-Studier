import MissedReview from "../components/MissedReview";

/**
 * Route wrapper for the missed-questions review session. See
 * `<MissedReview />` for the review rules (cycle until correct twice in a
 * row, then retire from `db.missedQueue`).
 */
export default function Missed() {
  return (
    <div className="mx-auto max-w-2xl" data-testid="missed-route">
      <header className="px-4 pt-4">
        <h1 className="text-2xl font-semibold">Missed questions</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Answer each question correctly twice in a row to retire it.
        </p>
      </header>
      <MissedReview />
    </div>
  );
}
