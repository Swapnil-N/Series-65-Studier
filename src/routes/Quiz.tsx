import { useCallback, useEffect, useMemo, useState } from "react";
import { QuizRunner } from "../components/QuizRunner";
import EditPencil from "../components/EditPencil";
import {
  EmptyState,
  TopicPicker,
  type TopicPickerValue,
} from "../components/shared";
import type { ChoiceIndex } from "../components/shared/QuestionCard";
import { loadContent } from "../lib/content";
import { db } from "../lib/db";
import type { Question } from "../types/content";
import type { Attempt } from "../types/state";

// Scratch key used for in-progress quiz recovery across an accidental reload.
// We deliberately use sessionStorage rather than Dexie (mockSessions is for
// mock exams, and we don't want to extend the Dexie schema for a short-lived
// recovery record).
const SESSION_KEY = "quizInProgress";

type QuizCount = 10 | 25 | 50;
const COUNT_OPTIONS: QuizCount[] = [10, 25, 50];

/**
 * Persistence shape written to sessionStorage on every progress tick. We store
 * the full question list so that a reload can reconstruct the quiz without
 * re-running the shuffle (which would reorder questions). `version` lets us
 * silently drop incompatible payloads after a format change instead of
 * blowing up.
 */
interface PersistedSession {
  version: 1;
  topic: TopicPickerValue;
  count: QuizCount;
  questions: Question[];
  index: number;
  answers: (ChoiceIndex | null)[];
  startedAt: number;
}

/**
 * Today's date in YYYY-MM-DD using local time — matches the shared
 * dailyActivity key convention used by FlashcardSession.
 */
function toDateKey(ts: number): string {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * Fisher-Yates. We intentionally do not seed this — the quiz is ephemeral and
 * consistent ordering isn't a user-visible concern. Tests that need determinism
 * can inject a fixed question list directly into `<QuizRunner>`.
 */
function shuffle<T>(arr: T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function filterByTopic(
  pool: Question[],
  topic: TopicPickerValue,
): Question[] {
  if (topic === "all") return pool;
  const prefix = `${topic}.`;
  return pool.filter((q) => q.subtopicId.startsWith(prefix));
}

function loadPersisted(): PersistedSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedSession;
    if (!parsed || parsed.version !== 1) return null;
    if (!Array.isArray(parsed.questions) || parsed.questions.length === 0) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writePersisted(session: PersistedSession): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // Quota exceeded or disabled storage — best effort only.
  }
}

function clearPersisted(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

/**
 * Persist an Attempt + increment today's questionsAnswered. Incorrect answers
 * also upsert into missedQueue with a fresh `addedAt` timestamp so the most
 * recently-missed items surface first in the Missed review flow.
 */
async function persistAttempt(attempt: Attempt): Promise<void> {
  await db.attempts.add(attempt);

  const dateKey = toDateKey(attempt.timestamp);
  const existing = await db.dailyActivity.get(dateKey);
  if (existing) {
    await db.dailyActivity.put({
      ...existing,
      questionsAnswered: existing.questionsAnswered + 1,
    });
  } else {
    await db.dailyActivity.put({
      date: dateKey,
      cardsReviewed: 0,
      questionsAnswered: 1,
      lessonsCompleted: 0,
    });
  }

  if (!attempt.correct) {
    // Upsert — Dexie's `put` replaces on primary-key match (questionId).
    await db.missedQueue.put({
      questionId: attempt.questionId,
      topicId: attempt.topicId,
      addedAt: attempt.timestamp,
    });
  }
}

export default function Quiz() {
  const [pool, setPool] = useState<Question[] | null>(null);
  const [topic, setTopic] = useState<TopicPickerValue>("all");
  const [count, setCount] = useState<QuizCount>(10);
  const [session, setSession] = useState<PersistedSession | null>(null);
  const [resumable, setResumable] = useState<PersistedSession | null>(null);

  // Load the full content pool + detect a resumable session on mount.
  useEffect(() => {
    let cancelled = false;
    void loadContent().then((c) => {
      if (cancelled) return;
      setPool(c.questions);
    });
    const existing = loadPersisted();
    if (existing) setResumable(existing);
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredPool = useMemo(() => {
    if (!pool) return null;
    return filterByTopic(pool, topic);
  }, [pool, topic]);

  const startSession = useCallback(
    (nextTopic: TopicPickerValue, nextCount: QuizCount) => {
      if (!pool) return;
      const filtered = filterByTopic(pool, nextTopic);
      if (filtered.length === 0) return;
      const picked = shuffle(filtered).slice(
        0,
        Math.min(nextCount, filtered.length),
      );
      const next: PersistedSession = {
        version: 1,
        topic: nextTopic,
        count: nextCount,
        questions: picked,
        index: 0,
        answers: picked.map(() => null),
        startedAt: Date.now(),
      };
      setSession(next);
      setResumable(null);
      writePersisted(next);
    },
    [pool],
  );

  const resumeSession = useCallback(() => {
    if (!resumable) return;
    setSession(resumable);
    setResumable(null);
  }, [resumable]);

  const discardResumable = useCallback(() => {
    clearPersisted();
    setResumable(null);
  }, []);

  const handleAnswer = useCallback((attempt: Attempt) => {
    // Fire-and-forget: failures in persistence shouldn't block the UX. Any
    // surfaced error would come from a storage-eviction banner elsewhere.
    void persistAttempt(attempt);
  }, []);

  const handleProgress = useCallback(
    (state: { index: number; answers: (ChoiceIndex | null)[] }) => {
      setSession((prev) => {
        if (!prev) return prev;
        const next: PersistedSession = {
          ...prev,
          index: state.index,
          answers: state.answers,
        };
        // Quiz completion (index past the last question) clears the scratch key
        // so a refresh starts clean. Prior answers are already persisted via
        // db.attempts.
        if (state.index >= prev.questions.length) {
          clearPersisted();
        } else {
          writePersisted(next);
        }
        return next;
      });
    },
    [],
  );

  const handleRestart = useCallback(() => {
    clearPersisted();
    setSession(null);
  }, []);

  // Landing screen: topic + count pickers + (optional) resume banner.
  if (!session) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <header className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Quiz</h1>
        </header>

        {resumable ? (
          <div
            className="flex flex-col gap-2 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm dark:border-amber-700 dark:bg-amber-950"
            data-testid="quiz-resume-banner"
          >
            <div>
              You have an in-progress quiz ({resumable.questions.length}{" "}
              questions, {resumable.index} answered).
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={resumeSession}
                className="min-h-[44px] rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500"
                data-testid="quiz-resume"
              >
                Resume
              </button>
              <button
                type="button"
                onClick={discardResumable}
                className="min-h-[44px] rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
                data-testid="quiz-resume-discard"
              >
                Start new
              </button>
            </div>
          </div>
        ) : null}

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold">Topic</h2>
          <TopicPicker value={topic} onChange={setTopic} />
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold">Question count</h2>
          <div
            role="radiogroup"
            aria-label="Question count"
            className="flex flex-wrap gap-2"
          >
            {COUNT_OPTIONS.map((n) => {
              const selected = n === count;
              return (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setCount(n)}
                  className={
                    "min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition " +
                    (selected
                      ? "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500"
                      : "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text dark:hover:bg-neutral-800")
                  }
                >
                  {n}
                </button>
              );
            })}
          </div>
        </section>

        {pool === null ? (
          <div className="p-4 text-sm text-neutral-500" role="status">
            Loading questions…
          </div>
        ) : filteredPool && filteredPool.length === 0 ? (
          <EmptyState
            title="No questions in this topic."
            message="Pick a different topic or generate content for this one."
          />
        ) : (
          <div>
            <button
              type="button"
              onClick={() => startSession(topic, count)}
              disabled={!filteredPool || filteredPool.length === 0}
              className="min-h-[44px] rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-40 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
              data-testid="quiz-start"
            >
              Start quiz
            </button>
          </div>
        )}
      </div>
    );
  }

  // EditPencil for the currently-displayed question. Scoped here (rather than
  // inside QuestionCard, which A4 owns) so we don't stray from A11's Owns set.
  const activeQuestion =
    session.index < session.questions.length
      ? session.questions[session.index]
      : null;

  return (
    <div className="flex flex-col">
      {activeQuestion ? (
        <div
          className="mx-auto flex w-full max-w-2xl justify-end px-4 pt-2"
          data-testid="quiz-edit-pencil-wrap"
        >
          <EditPencil
            type="question"
            itemId={activeQuestion.id}
            currentText={activeQuestion.stem}
            field="stem"
          />
        </div>
      ) : null}
      <QuizRunner
        questions={session.questions}
        initialIndex={session.index}
        initialAnswers={session.answers}
        onAnswer={handleAnswer}
        onProgress={handleProgress}
        onRestart={handleRestart}
      />
    </div>
  );
}
