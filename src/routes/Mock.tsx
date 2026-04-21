import { useCallback, useEffect, useMemo, useState } from "react";
import { MockExam } from "../components/MockExam";
import { EmptyState } from "../components/shared";
import { loadContent } from "../lib/content";
import { db } from "../lib/db";
import {
  TOPIC_COUNTS,
  composeExam,
  getExcludedIds,
} from "../lib/mockExam";
import type { Question, TopicId } from "../types/content";
import type { MockExamSession } from "../types/state";

/**
 * Simple id generator — stable enough for Dexie primary key. Not cryptographic.
 * Prefers crypto.randomUUID when present (jsdom in tests may not implement it).
 */
function makeId(): string {
  const maybeCrypto = (globalThis as { crypto?: Crypto }).crypto;
  if (maybeCrypto && typeof maybeCrypto.randomUUID === "function") {
    return maybeCrypto.randomUUID();
  }
  return `mock-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

/** Count reviewed questions per topic from the loaded pool. */
function countReviewedByTopic(
  questions: Question[],
): Record<TopicId, number> {
  const counts: Record<TopicId, number> = { "1": 0, "2": 0, "3": 0, "4": 0 };
  for (const q of questions) {
    if (!q.reviewed) continue;
    const head = q.subtopicId.split(".")[0];
    if (head === "1" || head === "2" || head === "3" || head === "4") {
      counts[head] += 1;
    }
  }
  return counts;
}

export default function Mock() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [activeSession, setActiveSession] = useState<MockExamSession | null>(
    null,
  );
  const [resumable, setResumable] = useState<MockExamSession | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load content + probe Dexie for any in-progress mock.
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const content = await loadContent();
      if (cancelled) return;
      setQuestions(content.questions);

      const all = await db.mockSessions.toArray();
      if (cancelled) return;
      // Most recent active session, if any.
      const active = all
        .filter((s) => s.status === "active")
        .sort((a, b) => b.startedAt - a.startedAt)[0];
      if (active) setResumable(active);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const reviewedCounts = useMemo(() => {
    if (!questions) return null;
    return countReviewedByTopic(questions);
  }, [questions]);

  const insufficientTopics = useMemo<TopicId[]>(() => {
    if (!reviewedCounts) return [];
    return (["1", "2", "3", "4"] as TopicId[]).filter(
      (t) => reviewedCounts[t] < TOPIC_COUNTS[t],
    );
  }, [reviewedCounts]);

  const handleStart = useCallback(async () => {
    if (!questions) return;
    setError(null);
    try {
      const excluded = await getExcludedIds(db, 3);
      const ids = composeExam(questions, excluded);
      const session: MockExamSession = {
        id: makeId(),
        startedAt: Date.now(),
        pausedMs: 0,
        questionIds: ids,
        answers: ids.map(() => null),
        currentIndex: 0,
        status: "active",
      };
      await db.mockSessions.put(session);
      setActiveSession(session);
      setResumable(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }, [questions]);

  const handleResume = useCallback(() => {
    if (!resumable) return;
    setActiveSession(resumable);
    setResumable(null);
  }, [resumable]);

  const handleComplete = useCallback(async (session: MockExamSession) => {
    // MockExam already persists status:"completed" but we re-assert here in
    // case anything upstream races with a stale copy.
    await db.mockSessions.put({ ...session, status: "completed" });
  }, []);

  const handleAbandon = useCallback(async (session: MockExamSession) => {
    await db.mockSessions.put({ ...session, status: "abandoned" });
    setActiveSession(null);
  }, []);

  // -------------------------------------------------------------- active exam
  if (activeSession && questions) {
    return (
      <MockExam
        questions={questions}
        initialSession={activeSession}
        database={db}
        now={Date.now}
        lastActivityTs={activeSession.startedAt}
        onComplete={handleComplete}
        onAbandon={handleAbandon}
      />
    );
  }

  // -------------------------------------------------------------- landing
  if (questions === null || reviewedCounts === null) {
    return (
      <div className="p-4 text-sm text-neutral-500" role="status">
        Loading mock exam…
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Mock exam</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          130 questions, 180 minutes, NASAA-weighted. Draws only from
          questions marked reviewed.
        </p>
      </header>

      {resumable ? (
        <div
          className="flex flex-col gap-2 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm dark:border-amber-700 dark:bg-amber-950"
          data-testid="mock-resume-banner"
        >
          <div>
            You have an active mock exam from earlier. Resume where you left
            off?
          </div>
          <div>
            <button
              type="button"
              onClick={handleResume}
              className="min-h-[44px] rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white dark:border-blue-500 dark:bg-blue-500"
              data-testid="mock-resume-banner-button"
            >
              Resume active mock
            </button>
          </div>
        </div>
      ) : null}

      <section
        className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="mock-pool-summary"
      >
        <div className="mb-2 text-sm font-semibold">Reviewed pool by topic</div>
        <ul className="flex flex-col gap-1 text-sm">
          {(["1", "2", "3", "4"] as TopicId[]).map((t) => {
            const have = reviewedCounts[t];
            const need = TOPIC_COUNTS[t];
            const short = have < need;
            return (
              <li
                key={t}
                className="flex items-center justify-between"
                data-testid={`mock-pool-topic-${t}`}
              >
                <span>Topic {t}</span>
                <span
                  className={
                    "tabular-nums " +
                    (short
                      ? "text-red-600 dark:text-red-400"
                      : "text-neutral-800 dark:text-neutral-200")
                  }
                >
                  {have} / {need} reviewed
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {insufficientTopics.length > 0 ? (
        <EmptyState
          title={`Not enough reviewed questions in topic ${insufficientTopics
            .map(String)
            .join(", ")}.`}
          message="Mark more as reviewed before starting a mock."
        />
      ) : (
        <div>
          <button
            type="button"
            onClick={handleStart}
            className="min-h-[44px] rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
            data-testid="mock-start"
          >
            Start mock
          </button>
        </div>
      )}

      {error ? (
        <div
          className="rounded-lg border border-red-500 bg-red-50 p-3 text-sm text-red-900 dark:bg-red-950 dark:text-red-100"
          role="alert"
        >
          {error}
        </div>
      ) : null}
    </div>
  );
}
