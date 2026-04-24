import type { DailyActivity } from "../types/state";
import type { Series65DB } from "./db";

// -----------------------------------------------------------------------------
// Streaks
// -----------------------------------------------------------------------------
//
// A day "qualifies" toward the streak when the user did at least one of:
//   - reviewed a flashcard
//   - answered a question (quiz / mock / missed-review)
//   - completed a lesson
//
// We store a single `DailyActivity` row per YYYY-MM-DD; callers bump the
// relevant counter through `incrementActivity`. The streak routine is pure —
// given a list of rows and "today", return { current, longest }.
//
// Grace: if the user hasn't qualified *today* yet, the current streak counts
// consecutive days ending at yesterday. Without this grace, the streak chip
// would reset to 0 every morning until the first activity, which is the exact
// UX we want to avoid.

/**
 * Day-of-year formatting as YYYY-MM-DD in the **local** timezone. The plan
 * keys dailyActivity rows by date string, and "did I study today?" is a
 * human-local question, not a UTC one. Using toISOString() here would flip
 * the date at midnight UTC and give weird streak behaviour for any user
 * outside GMT.
 */
export function dateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Convenience: `dateKey(new Date(ms))`. Use this across the app so there's
 * exactly one local-time YYYY-MM-DD formatter. */
export function dateKeyFromMs(ms: number): string {
  return dateKey(new Date(ms));
}

/** Returns true iff at least one qualifying activity was logged this day. */
export function dayQualifies(activity: DailyActivity): boolean {
  return (
    activity.cardsReviewed >= 1 ||
    activity.questionsAnswered >= 1 ||
    activity.lessonsCompleted >= 1
  );
}

/**
 * Walks back from `today` (or `today - 1` if today hasn't qualified yet),
 * counting consecutive qualifying days. Also returns `longest`, which scans
 * the full history for the best streak ever.
 *
 * Implementation notes:
 *   - We tolerate out-of-order `activities` arrays; we build a Set of
 *     qualifying date-keys first so the algorithm is O(n) on the scan.
 *   - "Consecutive" is measured in *calendar* days in the viewer's local
 *     timezone (see `dateKey`). Timezone edge cases are the caller's problem.
 */
export function computeStreak(
  activities: DailyActivity[],
  today: Date = new Date(),
): { current: number; longest: number } {
  const qualified = new Set<string>();
  for (const a of activities) {
    if (dayQualifies(a)) qualified.add(a.date);
  }

  // --- current streak ---------------------------------------------------
  const todayKey = dateKey(today);
  // Anchor walks back from today; if today hasn't qualified, start at yday
  // (grace period — don't zero-out until the user misses a full day).
  let cursor = new Date(today);
  if (!qualified.has(todayKey)) {
    cursor.setDate(cursor.getDate() - 1);
  }
  let current = 0;
  while (qualified.has(dateKey(cursor))) {
    current += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  // --- longest streak ---------------------------------------------------
  // Sort qualifying keys asc and walk; reset the run counter whenever the
  // gap to the previous date is > 1 day.
  const sorted = Array.from(qualified).sort();
  let longest = 0;
  let run = 0;
  let prev: Date | null = null;
  for (const key of sorted) {
    const d = parseDateKey(key);
    if (prev === null) {
      run = 1;
    } else {
      const diff = daysBetween(prev, d);
      run = diff === 1 ? run + 1 : 1;
    }
    if (run > longest) longest = run;
    prev = d;
  }
  if (current > longest) longest = current;

  return { current, longest };
}

function parseDateKey(key: string): Date {
  // "YYYY-MM-DD" → local Date at 00:00. Constructing via `new Date(key)` uses
  // UTC parsing for ISO strings, which we don't want here.
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function daysBetween(a: Date, b: Date): number {
  // Normalise both to local midnight so DST transitions don't leave a stray
  // hour that rounds wrong.
  const a0 = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
  const b0 = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
  return Math.round((b0 - a0) / (24 * 3600 * 1000));
}

/**
 * Bump today's DailyActivity row by 1 for the given kind. Creates the row
 * lazily with zero'd counters if it doesn't exist yet. All three counters are
 * kept on the row so the UI can drive daily-goal progress without a join.
 */
export async function incrementActivity(
  kind: "card" | "question" | "lesson",
  db: Pick<Series65DB, "dailyActivity">,
  now: Date = new Date(),
): Promise<void> {
  const key = dateKey(now);
  const existing = await db.dailyActivity.get(key);
  const base: DailyActivity = existing ?? {
    date: key,
    cardsReviewed: 0,
    questionsAnswered: 0,
    lessonsCompleted: 0,
  };
  const next: DailyActivity = { ...base };
  if (kind === "card") next.cardsReviewed += 1;
  else if (kind === "question") next.questionsAnswered += 1;
  else next.lessonsCompleted += 1;
  await db.dailyActivity.put(next);
}
