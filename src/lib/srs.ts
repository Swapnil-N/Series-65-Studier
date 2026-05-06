// SRS facade over `ts-fsrs`. Keeps the algorithm swappable by exposing a narrow
// interface (`newCardState`, `review`) to the rest of the app. All `CardState`
// fields are epoch-ms scalars the way Dexie stores them; conversions to the
// ts-fsrs `Card` (which uses `Date` objects under the hood) are done inline.

import {
  fsrs,
  generatorParameters,
  Rating,
  State,
  type Card as FsrsCard,
  type FSRSParameters,
  type Grade as FsrsGrade,
} from "ts-fsrs";
import type { CardState } from "../types/state";

/** 1=Again, 2=Hard, 3=Good, 4=Easy — matches ts-fsrs's `Rating` scale. */
export type Grade = 1 | 2 | 3 | 4;

/** 7 days in ms — cram-mode clamp horizon. */
const CRAM_MAX_DAYS = 7;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export interface ReviewOptions {
  cramMode?: boolean;
  targetRetention?: number;
  now?: number;
}

/**
 * Build an initial FSRS state for a freshly-seen card. `state: 0` = New;
 * `due = now` so the card immediately shows up in the due queue. Stability and
 * difficulty are left at 0 (ts-fsrs seeds them on the first review).
 */
export function newCardState(cardId: string, now: number = Date.now()): CardState {
  return {
    cardId,
    stability: 0,
    difficulty: 0,
    elapsedDays: 0,
    scheduledDays: 0,
    reps: 0,
    lapses: 0,
    state: 0,
    lastReview: 0,
    due: now,
  };
}

/** Map our 1-4 grade to `ts-fsrs` Rating enum. Narrowed to `FsrsGrade` (which
 *  excludes `Rating.Manual`) so callers can pass the result straight into
 *  `FSRS.next()`. */
export function mapGradeToFsrs(grade: Grade): FsrsGrade {
  switch (grade) {
    case 1:
      return Rating.Again;
    case 2:
      return Rating.Hard;
    case 3:
      return Rating.Good;
    case 4:
      return Rating.Easy;
  }
}

/**
 * Apply a grade to a CardState. Cram mode caps `scheduledDays` at 7 and
 * `due` at `now + 7 days` so nothing drifts past the exam-prep horizon.
 *
 * Deterministic: same input state + same grade + same `now` → same output.
 * We disable fuzz in the FSRS parameters for predictability.
 */
export function review(
  state: CardState,
  grade: Grade,
  opts: ReviewOptions = {},
): CardState {
  const now = opts.now ?? Date.now();
  const targetRetention = opts.targetRetention ?? 0.9;
  const cramMode = opts.cramMode ?? false;

  const params: FSRSParameters = generatorParameters({
    request_retention: targetRetention,
    enable_fuzz: false,
  });
  const scheduler = fsrs(params);

  const fsrsCard: FsrsCard = cardStateToFsrs(state);
  const { card: next } = scheduler.next(fsrsCard, new Date(now), mapGradeToFsrs(grade));

  let scheduledDays = next.scheduled_days;
  let due = next.due.getTime();
  if (cramMode) {
    if (scheduledDays > CRAM_MAX_DAYS) scheduledDays = CRAM_MAX_DAYS;
    const cramCeiling = now + CRAM_MAX_DAYS * MS_PER_DAY;
    if (due > cramCeiling) due = cramCeiling;
  }

  return {
    cardId: state.cardId,
    stability: next.stability,
    difficulty: next.difficulty,
    elapsedDays: next.elapsed_days,
    scheduledDays,
    reps: next.reps,
    lapses: next.lapses,
    state: next.state as 0 | 1 | 2 | 3,
    lastReview: next.last_review ? next.last_review.getTime() : now,
    due,
  };
}

/**
 * Convert our persisted CardState shape into the `ts-fsrs` Card shape (Date
 * objects + snake-case). A freshly-minted CardState (state=0, lastReview=0)
 * maps to an empty card with no `last_review`.
 */
function cardStateToFsrs(s: CardState): FsrsCard {
  return {
    due: new Date(s.due),
    stability: s.stability,
    difficulty: s.difficulty,
    elapsed_days: s.elapsedDays,
    scheduled_days: s.scheduledDays,
    learning_steps: 0,
    reps: s.reps,
    lapses: s.lapses,
    state: s.state as State,
    last_review: s.lastReview > 0 ? new Date(s.lastReview) : undefined,
  };
}
