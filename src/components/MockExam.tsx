import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Question, TopicId } from "../types/content";
import type { MockExamSession } from "../types/state";
import type { Series65DB } from "../lib/db";
import {
  PASS_THRESHOLD,
  computeRemainingMs,
  scoreMock,
} from "../lib/mockExam";
import { QuestionCard, type ChoiceIndex } from "./shared";
import { Citation } from "./shared/Citation";
import { MarkdownRenderer } from "./shared/MarkdownRenderer";

/** 10 minutes. If the tab was backgrounded longer than this on mount we prompt
 * the user to resume or abandon rather than silently swallowing the gap. */
const BACKGROUND_WARN_MS = 10 * 60 * 1000;

export interface MockExamProps {
  /** Questions the exam was composed from — must include every id in
   * `session.questionIds`. Read-only from the perspective of this component. */
  questions: Question[];
  /** Starting session state, already persisted (or about to be) in Dexie. */
  initialSession: MockExamSession;
  /** Dexie handle for persistence. Narrowed to the single table we touch. */
  database: Pick<Series65DB, "mockSessions">;
  /** Timestamp of the last activity before this mount. Used to decide whether
   * to prompt on "You were away for N minutes." Defaults to startedAt. */
  lastActivityTs?: number;
  /** Lets tests pin the wall clock. Defaults to Date.now. */
  now?: () => number;
  /** Fired once after the user (or auto-submit) completes the exam. Parent
   * typically flips `status` to `"completed"` in Dexie (we also do that here)
   * and navigates away or re-renders the landing screen. */
  onComplete?: (session: MockExamSession) => void;
  /** Fired if the user explicitly abandons from the background prompt. */
  onAbandon?: (session: MockExamSession) => void;
}

type ResumePromptState = "none" | "awaiting" | "dismissed";

function formatTimer(ms: number): string {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function topicOf(subtopicId: string): TopicId {
  const head = subtopicId.split(".")[0];
  if (head === "1" || head === "2" || head === "3" || head === "4") return head;
  return "1";
}

/**
 * 130-question timed mock exam.
 *
 * Timer correctness is the non-negotiable requirement here: the displayed
 * remaining time is *always* recomputed from the session's persisted
 * `startedAt + pausedMs` via `computeRemainingMs(session, now())`. A 500ms
 * `setInterval` only triggers re-renders — it does NOT decrement a local
 * counter, so a tab that is suspended for 20 minutes and then resumed
 * resumes with the correct remaining time regardless of how many ticks fired.
 *
 * Persistence cadence: on every answer submit and on `visibilitychange` when
 * `document.hidden` becomes true. This minimises Dexie writes vs every-tick
 * while still covering the two "user leaves the page" paths.
 */
export function MockExam({
  questions,
  initialSession,
  database,
  lastActivityTs,
  now = Date.now,
  onComplete,
  onAbandon,
}: MockExamProps) {
  // Mirror the Dexie row in React state so the UI drives from one source of
  // truth. We call `database.mockSessions.put(session)` to persist — the React
  // state is the working copy.
  const [session, setSession] = useState<MockExamSession>(initialSession);
  const [selectedIndex, setSelectedIndex] = useState<ChoiceIndex | null>(() => {
    return initialSession.answers[initialSession.currentIndex] ?? null;
  });
  // 500ms heartbeat purely to trigger re-render so `computeRemainingMs` is
  // evaluated against a fresh `now()`.
  const [, setTick] = useState(0);

  const [resumePrompt, setResumePrompt] = useState<ResumePromptState>(() => {
    if (initialSession.status !== "active") return "none";
    const delta = now() - (lastActivityTs ?? initialSession.startedAt);
    return delta > BACKGROUND_WARN_MS ? "awaiting" : "none";
  });
  // When the user is deciding whether to resume or abandon we treat that
  // interval as paused so the timer doesn't punish them while the modal is up.
  const promptEnteredAtRef = useRef<number | null>(null);
  useEffect(() => {
    if (resumePrompt === "awaiting" && promptEnteredAtRef.current === null) {
      promptEnteredAtRef.current = now();
    }
  }, [resumePrompt, now]);

  // Latest session ref, for handlers that want a fresh copy without re-binding
  // on every change (visibility handler, interval tick closure).
  const sessionRef = useRef(session);
  sessionRef.current = session;

  const persist = useCallback(
    async (next: MockExamSession) => {
      // `status: "completed"` is owned by the parent's persistMockCompletion
      // transaction, which writes mockSessions alongside attempts /
      // missedQueue / dailyActivity atomically. Skipping it here prevents a
      // racing unawaited write that could land the status flip without the
      // downstream rows.
      if (next.status === "completed") return;
      try {
        await database.mockSessions.put(next);
      } catch {
        // Best effort — persistence failures shouldn't block the exam.
      }
    },
    [database],
  );

  const updateSession = useCallback(
    (updater: (prev: MockExamSession) => MockExamSession): MockExamSession => {
      const next = updater(sessionRef.current);
      sessionRef.current = next;
      setSession(next);
      void persist(next);
      return next;
    },
    [persist],
  );

  // Heartbeat — 500ms, re-render only. Never mutates session state.
  useEffect(() => {
    if (session.status !== "active") return;
    const id = window.setInterval(() => {
      setTick((n) => (n + 1) & 0xffff);
    }, 500);
    return () => window.clearInterval(id);
  }, [session.status]);

  // visibilitychange: persist when the user is leaving the tab. Don't touch
  // pausedMs here — the 180-minute timer on a real exam does not pause just
  // because you checked another app.
  useEffect(() => {
    function onVis() {
      if (document.hidden) {
        void persist(sessionRef.current);
      }
    }
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [persist]);

  // Clock read — one call per render so child components all see the same
  // snapshot.
  const nowMs = now();
  const remainingMs =
    session.status === "active" && resumePrompt !== "awaiting"
      ? computeRemainingMs(session, nowMs)
      : session.status === "active"
        ? computeRemainingMs(session, promptEnteredAtRef.current ?? nowMs)
        : 0;

  // Auto-submit at zero.
  const autoSubmitRef = useRef(false);
  useEffect(() => {
    if (session.status !== "active") return;
    if (resumePrompt === "awaiting") return;
    if (remainingMs > 0) return;
    if (autoSubmitRef.current) return;
    autoSubmitRef.current = true;
    const next = updateSession((prev) => ({ ...prev, status: "completed" }));
    onComplete?.(next);
  }, [remainingMs, session.status, resumePrompt, updateSession, onComplete]);

  const currentQuestion = useMemo<Question | null>(() => {
    const id = session.questionIds[session.currentIndex];
    if (!id) return null;
    return questions.find((q) => q.id === id) ?? null;
  }, [questions, session.questionIds, session.currentIndex]);

  const handleSelect = useCallback(
    (choice: ChoiceIndex) => {
      if (session.status !== "active") return;
      if (resumePrompt === "awaiting") return;
      // Already answered? Ignore rapid double-tap.
      if (session.answers[session.currentIndex] !== null) return;
      setSelectedIndex(choice);
      updateSession((prev) => {
        const answers = prev.answers.slice();
        answers[prev.currentIndex] = choice;
        return { ...prev, answers };
      });
    },
    [session.status, session.answers, session.currentIndex, resumePrompt, updateSession],
  );

  const handleNext = useCallback(() => {
    if (session.status !== "active") return;
    if (resumePrompt === "awaiting") return;
    const isLast = session.currentIndex >= session.questionIds.length - 1;
    if (isLast) {
      const next = updateSession((prev) => ({ ...prev, status: "completed" }));
      onComplete?.(next);
      return;
    }
    updateSession((prev) => ({
      ...prev,
      currentIndex: Math.min(prev.currentIndex + 1, prev.questionIds.length - 1),
    }));
    // Sync the UI's selected-choice state with the next slot's answer (usually
    // null unless the user is flipping back through prior answers).
    const nextAnswer = session.answers[session.currentIndex + 1] ?? null;
    setSelectedIndex(nextAnswer);
  }, [
    session.status,
    session.currentIndex,
    session.answers,
    session.questionIds.length,
    resumePrompt,
    updateSession,
    onComplete,
  ]);

  // Enter advances from an answered question.
  useEffect(() => {
    if (session.status !== "active") return;
    if (resumePrompt === "awaiting") return;
    const answered = session.answers[session.currentIndex] !== null;
    if (!answered) return;
    function onKey(e: KeyboardEvent) {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [
    session.status,
    session.answers,
    session.currentIndex,
    resumePrompt,
    handleNext,
  ]);

  // ---------------------------------------------------------------- resume modal
  if (resumePrompt === "awaiting") {
    const awayMs =
      now() - (lastActivityTs ?? session.startedAt);
    const awayMin = Math.max(1, Math.round(awayMs / 60_000));
    return (
      <div
        className="mx-auto flex max-w-md flex-col gap-3 p-4"
        data-testid="mock-resume-prompt"
        role="alertdialog"
        aria-labelledby="mock-resume-title"
      >
        <h2 id="mock-resume-title" className="text-lg font-semibold">
          You were away for {awayMin} minutes
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Your exam has been running the whole time. Resume where you left off,
          or abandon this attempt?
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              // Credit the away time to pausedMs so the user isn't punished
              // for the decision window, then continue.
              const promptStart = promptEnteredAtRef.current ?? now();
              const pauseDelta = now() - promptStart;
              promptEnteredAtRef.current = null;
              setResumePrompt("dismissed");
              updateSession((prev) => ({
                ...prev,
                pausedMs: prev.pausedMs + pauseDelta,
              }));
            }}
            className="min-h-[44px] rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white dark:border-blue-500 dark:bg-blue-500"
            data-testid="mock-resume"
          >
            Resume
          </button>
          <button
            type="button"
            onClick={() => {
              promptEnteredAtRef.current = null;
              setResumePrompt("dismissed");
              const next = updateSession((prev) => ({
                ...prev,
                status: "abandoned",
              }));
              onAbandon?.(next);
            }}
            className="min-h-[44px] rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium dark:border-neutral-700 dark:bg-ink-surface"
            data-testid="mock-abandon"
          >
            Abandon
          </button>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------- scorecard
  if (session.status !== "active") {
    return (
      <Scorecard session={session} questions={questions} />
    );
  }

  if (!currentQuestion) {
    return (
      <div className="p-4 text-sm text-neutral-500" role="status">
        Exam content missing. This usually means the question corpus changed
        while the exam was in progress — restart a new mock.
      </div>
    );
  }

  const answered = session.answers[session.currentIndex] !== null;
  const totalCount = session.questionIds.length;
  const positionLabel = `${session.currentIndex + 1} / ${totalCount}`;
  const timerLow = remainingMs < 5 * 60 * 1000;
  const questionForCard = { ...currentQuestion, reviewed: true };

  return (
    <div
      className="mx-auto flex max-w-2xl flex-col gap-4 p-4"
      data-testid="mock-exam"
    >
      <div className="flex items-center justify-between text-sm">
        <span aria-label="mock-position" className="font-medium">
          {positionLabel}
        </span>
        <span
          data-testid="mock-timer"
          aria-label="time remaining"
          className={
            "font-mono text-base tabular-nums " +
            (timerLow
              ? "text-red-600 dark:text-red-400"
              : "text-neutral-800 dark:text-neutral-200")
          }
        >
          {formatTimer(remainingMs)}
        </span>
      </div>
      <QuestionCard
        question={questionForCard}
        selectedIndex={selectedIndex}
        // Mock exam never reveals during the exam — rationales only appear on
        // the scorecard's per-question review.
        revealed={false}
        onSelect={handleSelect}
        showCitation={false}
      />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          disabled={!answered}
          className={
            "min-h-[44px] rounded-lg border px-4 py-2 text-sm font-semibold transition " +
            (answered
              ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500"
              : "border-neutral-300 bg-neutral-100 text-neutral-400 dark:border-neutral-700 dark:bg-ink-surface")
          }
          data-testid="mock-next"
        >
          {session.currentIndex >= totalCount - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- Scorecard

interface ScorecardProps {
  session: MockExamSession;
  questions: Question[];
}

function Scorecard({ session, questions }: ScorecardProps) {
  const score = useMemo(() => scoreMock(session, questions), [session, questions]);
  const byId = useMemo(() => {
    const m = new Map<string, Question>();
    for (const q of questions) m.set(q.id, q);
    return m;
  }, [questions]);

  const missed = useMemo(() => {
    const out: { q: Question; idx: number; chosen: ChoiceIndex | null }[] = [];
    for (let i = 0; i < session.questionIds.length; i++) {
      const q = byId.get(session.questionIds[i]);
      if (!q) continue;
      const choice = session.answers[i];
      if (choice !== q.answerIndex) {
        out.push({ q, idx: i, chosen: choice });
      }
    }
    return out;
  }, [session.questionIds, session.answers, byId]);

  const perTopicRows = (["1", "2", "3", "4"] as TopicId[]).map((t) => {
    const s = score.perTopic[t];
    return { topicId: t, ...s };
  });

  return (
    <div
      className="mx-auto flex max-w-2xl flex-col gap-4 p-4"
      data-testid="mock-scorecard"
    >
      <h2 className="text-xl font-semibold">Mock exam complete</h2>
      <div
        className={
          "rounded-xl border p-4 " +
          (score.pass
            ? "border-green-500 bg-green-50 dark:border-green-700 dark:bg-green-950"
            : "border-red-500 bg-red-50 dark:border-red-700 dark:bg-red-950")
        }
        data-testid="mock-scorecard-overall"
      >
        <div className="text-sm text-neutral-600 dark:text-neutral-300">
          Overall vs {PASS_THRESHOLD}% pass line
        </div>
        <div className="text-3xl font-bold tabular-nums">
          {score.overallPct}%
        </div>
        <div className="text-sm font-medium">
          {score.pass ? "PASS" : "FAIL"}
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface">
        <div className="mb-2 text-sm font-semibold">By topic</div>
        <ul className="flex flex-col gap-2">
          {perTopicRows.map((row) => (
            <li
              key={row.topicId}
              className="flex items-center justify-between text-sm"
              data-testid={`mock-scorecard-topic-${row.topicId}`}
            >
              <span>Topic {row.topicId}</span>
              <span className="tabular-nums">
                {row.correct} / {row.total} ({row.pct}%)
              </span>
            </li>
          ))}
        </ul>
      </div>

      {missed.length > 0 ? (
        <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface">
          <div className="mb-2 text-sm font-semibold">
            Review missed ({missed.length})
          </div>
          <ul className="flex flex-col gap-4">
            {missed.map(({ q, idx, chosen }) => (
              <li
                key={q.id}
                data-testid={`mock-missed-${q.id}`}
                className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800"
              >
                <div className="mb-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Q{idx + 1} · Topic {topicOf(q.subtopicId)}
                </div>
                <div className="mb-2 text-sm">
                  <MarkdownRenderer>{q.stem}</MarkdownRenderer>
                </div>
                <div className="text-xs">
                  <span className="font-semibold">Your answer: </span>
                  {chosen === null ? "— (no answer)" : q.choices[chosen]}
                </div>
                <div className="text-xs">
                  <span className="font-semibold">Correct: </span>
                  {q.choices[q.answerIndex]}
                </div>
                <div className="mt-2 text-sm">
                  <MarkdownRenderer>{q.rationale}</MarkdownRenderer>
                </div>
                <div className="mt-2">
                  <Citation citation={q.citation} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
