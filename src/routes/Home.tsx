import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  computeReadiness,
  studyNextTopic,
  type ReadinessResult,
} from "../lib/readiness";
import { computeStreak, dateKey } from "../lib/streak";
import { DEFAULT_SETTINGS, db } from "../lib/db";
import type { Attempt, AppSettings, DailyActivity } from "../types/state";
import ReadinessChart from "../components/ReadinessChart";

// -----------------------------------------------------------------------------
// Home / Dashboard
// -----------------------------------------------------------------------------
//
// Pulls together readiness, streak, due cards, missed queue and daily goal
// progress. All reads are via Dexie; the component is tolerant of an empty
// database (first launch) — every data shape has a sensible default.

function greeting(hour: number): string {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

interface DashboardState {
  attempts: Attempt[];
  activities: DailyActivity[];
  todayActivity: DailyActivity | null;
  dueCards: number;
  missedCount: number;
  settings: AppSettings;
  loaded: boolean;
}

export default function Home() {
  const [now] = useState<Date>(() => new Date());
  const [state, setState] = useState<DashboardState>(() => ({
    attempts: [],
    activities: [],
    todayActivity: null,
    dueCards: 0,
    missedCount: 0,
    settings: { ...DEFAULT_SETTINGS },
    loaded: false,
  }));

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [attempts, activities, cardStates, missedCount, settingsRow] =
        await Promise.all([
          db.attempts.toArray(),
          db.dailyActivity.toArray(),
          // Only cards with a due date on or before now count. The plan
          // references a `.where("due").belowOrEqual(Date.now()).count()`
          // query, but the Dexie v1 schema owned by A2 indexes cardState by
          // `cardId` only — no secondary index on `due`. We do the
          // equivalent scan here rather than mutate the schema from outside
          // our Owns set; corpus is small (one row per card) so this is
          // fine for dashboard latency.
          db.cardState.toArray(),
          db.missedQueue.count(),
          db.settings.get("app"),
        ]);
      if (cancelled) return;
      const settings: AppSettings = settingsRow
        ? { ...DEFAULT_SETTINGS, ...settingsRow.value }
        : { ...DEFAULT_SETTINGS };
      const todayKey = dateKey(now);
      const todayActivity = activities.find((a) => a.date === todayKey) ?? null;
      const nowMs = Date.now();
      const dueCards = cardStates.filter((c) => c.due <= nowMs).length;
      setState({
        attempts,
        activities,
        todayActivity,
        dueCards,
        missedCount,
        settings,
        loaded: true,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [now]);

  const readiness: ReadinessResult = computeReadiness(
    state.attempts,
    now.getTime(),
  );
  const streak = computeStreak(state.activities, now);
  const nextTopic = studyNextTopic(readiness);

  const cardsToday = state.todayActivity?.cardsReviewed ?? 0;
  const questionsToday = state.todayActivity?.questionsAnswered ?? 0;
  const cardGoal = state.settings.dailyGoalCards;
  const questionGoal = state.settings.dailyGoalQuestions;

  const overallDisplay = readiness.overall !== null
    ? `${Math.round(readiness.overall)}%`
    : "—";

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4" data-testid="home">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{greeting(now.getHours())}</h1>
        <span
          className="inline-flex items-center gap-1 rounded-full border border-orange-400 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-900 dark:border-orange-500 dark:bg-orange-950 dark:text-orange-200"
          data-testid="streak-chip"
          aria-label={`${streak.current}-day streak`}
        >
          <span aria-hidden="true">🔥</span>
          {streak.current}-day streak
        </span>
      </header>

      {/* Readiness block — overall score prominent, per-topic bars below. */}
      <section
        className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="readiness-block"
      >
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Readiness
          </h2>
          <div className="text-3xl font-bold" data-testid="overall-score">
            {overallDisplay}
          </div>
        </div>
        {readiness.overall === null ? (
          <p className="mb-2 text-xs text-neutral-500 dark:text-neutral-400">
            Not enough data yet — answer at least 20 questions per topic to
            unlock your overall score.
          </p>
        ) : null}
        <ReadinessChart readiness={readiness} />
      </section>

      {/* Study-next card. */}
      <Link
        to={`/learn?topic=${nextTopic}`}
        className="block rounded-xl border border-blue-200 bg-blue-50 p-4 transition hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:hover:bg-blue-900"
        data-testid="study-next"
      >
        <div className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
          Study next
        </div>
        <div className="text-base font-semibold text-blue-900 dark:text-blue-100">
          Topic {nextTopic}
        </div>
      </Link>

      {/* Due cards + missed count row. */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          to="/cards"
          className="rounded-xl border border-neutral-200 bg-white p-4 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-ink-surface dark:hover:bg-neutral-900"
          data-testid="due-cards-card"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Due cards
          </div>
          <div className="text-2xl font-bold">{state.dueCards}</div>
        </Link>

        {state.missedCount > 0 ? (
          <Link
            to="/missed"
            className="rounded-xl border border-amber-300 bg-amber-50 p-4 transition hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:hover:bg-amber-900"
            data-testid="missed-card"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200">
              Missed questions
            </div>
            <div className="text-sm font-semibold text-amber-900 dark:text-amber-100">
              {state.missedCount} missed — review now
            </div>
          </Link>
        ) : null}
      </div>

      {/* Daily goal progress — cards + questions. */}
      <section
        className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="daily-goals"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Today
        </h2>
        <GoalRow
          label="Cards reviewed"
          value={cardsToday}
          goal={cardGoal}
          testid="goal-cards"
        />
        <GoalRow
          label="Questions answered"
          value={questionsToday}
          goal={questionGoal}
          testid="goal-questions"
        />
      </section>

      {!state.loaded ? (
        <div className="text-xs text-neutral-400" role="status">
          Loading…
        </div>
      ) : null}
    </div>
  );
}

interface GoalRowProps {
  label: string;
  value: number;
  goal: number;
  testid: string;
}

function GoalRow({ label, value, goal, testid }: GoalRowProps) {
  const pct = goal > 0 ? Math.min(100, Math.round((value / goal) * 100)) : 0;
  return (
    <div className="mb-2 last:mb-0" data-testid={testid}>
      <div className="mb-1 flex justify-between text-sm">
        <span>{label}</span>
        <span className="tabular-nums text-neutral-500 dark:text-neutral-400">
          {value} / {goal}
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full bg-blue-500 dark:bg-blue-400"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
