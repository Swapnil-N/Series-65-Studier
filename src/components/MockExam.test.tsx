import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MockExam } from "./MockExam";
import { db } from "../lib/db";
import { MOCK_DURATION_MS } from "../lib/mockExam";
import type { Question } from "../types/content";
import type { MockExamSession } from "../types/state";

const START = 1_700_000_000_000;

function makeQ(
  id: string,
  subtopicId: string,
  answerIndex: 0 | 1 | 2 | 3 = 0,
): Question {
  return {
    id,
    subtopicId,
    stem: `Stem ${id}`,
    choices: ["A", "B", "C", "D"],
    answerIndex,
    rationale: `Rationale ${id}`,
    citation: { source: "NASAA", ref: "r" },
    difficulty: "easy",
    reviewed: true,
  };
}

function makeSession(
  overrides: Partial<MockExamSession> = {},
): MockExamSession {
  return {
    id: "mock-1",
    startedAt: START,
    pausedMs: 0,
    questionIds: ["q1", "q2"],
    answers: [null, null],
    currentIndex: 0,
    status: "active",
    ...overrides,
  };
}

beforeEach(async () => {
  await db.delete();
  await db.open();
});

afterEach(async () => {
  await db.close();
  vi.useRealTimers();
});

describe("MockExam", () => {
  it("renders the scorecard when the session is completed", () => {
    // Score: correct q1, wrong q2 -> 50% -> FAIL.
    const session = makeSession({
      answers: [0, 0],
      status: "completed",
    });
    render(
      <MockExam
        questions={[makeQ("q1", "1.1", 0), makeQ("q2", "2.1", 1)]}
        initialSession={session}
        database={db}
        now={() => START}
      />,
    );
    expect(screen.getByTestId("mock-scorecard")).toBeInTheDocument();
    // 50% < 72.5% -> FAIL badge.
    expect(screen.getByTestId("mock-scorecard-overall")).toHaveTextContent(
      "50%",
    );
    expect(screen.getByTestId("mock-scorecard-overall")).toHaveTextContent(
      /FAIL/,
    );
    // Missed-question review should list q2 (the one we got wrong).
    expect(screen.getByTestId("mock-missed-q2")).toBeInTheDocument();
  });

  it("shows a timer that decreases as the injected clock advances", () => {
    vi.useFakeTimers();
    vi.setSystemTime(START);
    let t = START;
    const now = () => t;
    render(
      <MockExam
        questions={[makeQ("q1", "1.1", 0), makeQ("q2", "2.1", 1)]}
        initialSession={makeSession()}
        database={db}
        now={now}
      />,
    );
    // At t=START the timer should read the full 180:00 budget as 03:00:00.
    const first = screen.getByTestId("mock-timer").textContent;
    expect(first).toBe("03:00:00");

    // Advance 1:01 of wall time; force the 500ms heartbeat to re-render.
    t = START + 61 * 1000;
    act(() => {
      vi.advanceTimersByTime(600);
    });
    const second = screen.getByTestId("mock-timer").textContent;
    expect(second).toBe("02:58:59");
    expect(second).not.toBe(first);
  });

  it("persists an answer to the session object (and Dexie)", async () => {
    // Intentionally NOT using fake timers — fake-indexeddb schedules work on
    // real microtasks/timeouts and hangs under vi.useFakeTimers().
    render(
      <MockExam
        questions={[makeQ("q1", "1.1", 0), makeQ("q2", "2.1", 1)]}
        initialSession={makeSession()}
        database={db}
        now={() => START}
      />,
    );

    // Select choice 1 (letter "B"). q1's answerIndex is 0 so this is wrong,
    // but we're not testing correctness here — we're testing persistence.
    fireEvent.click(screen.getByRole("button", { name: /^2\. B$/ }));

    // Wait for the Dexie `put` microtask chain to settle. Poll until the
    // row reflects our answer (fake-indexeddb resolves on a real task loop).
    let row = await db.mockSessions.get("mock-1");
    for (let i = 0; i < 20 && (!row || row.answers[0] !== 1); i++) {
      await new Promise((r) => setTimeout(r, 10));
      row = await db.mockSessions.get("mock-1");
    }
    expect(row).toBeDefined();
    expect(row!.answers[0]).toBe(1);
    expect(row!.answers[1]).toBeNull();
  });

  it("auto-submits to the scorecard when the timer hits zero", () => {
    vi.useFakeTimers();
    vi.setSystemTime(START);
    let t = START;
    const now = () => t;
    const onComplete = vi.fn();
    render(
      <MockExam
        questions={[makeQ("q1", "1.1", 0), makeQ("q2", "2.1", 1)]}
        initialSession={makeSession()}
        database={db}
        now={now}
        onComplete={onComplete}
      />,
    );

    // Fast-forward past the 180-minute budget.
    t = START + MOCK_DURATION_MS + 1_000;
    act(() => {
      vi.advanceTimersByTime(600);
    });
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("mock-scorecard")).toBeInTheDocument();
  });

  it("does NOT self-persist status='completed' — parent's transaction owns that write (B6 fix)", async () => {
    // persistMockCompletion's transaction is the only writer that should
    // promote status. If MockExam fires its own mockSessions.put at
    // completion, the two writes race and a partial failure leaves the
    // session marked completed with zero downstream rows.
    await db.mockSessions.clear();
    const session = makeSession({ questionIds: ["q1"], currentIndex: 0 });
    await db.mockSessions.put(session);
    let t = START;
    const now = () => t;
    const onComplete = vi.fn();
    render(
      <MockExam
        questions={[makeQ("q1", "1.1", 0)]}
        initialSession={session}
        database={db}
        now={now}
        onComplete={onComplete}
      />,
    );
    // Select a correct answer.
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    // Advance past the last question to trigger completion.
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    await act(async () => {
      await Promise.resolve();
    });
    expect(onComplete).toHaveBeenCalledTimes(1);
    const stored = await db.mockSessions.get(session.id);
    // MockExam must not have flipped status on its own.
    expect(stored?.status).toBe("active");
  });

  it("shows a resume/abandon prompt if lastActivityTs was more than 10 minutes ago", () => {
    const session = makeSession();
    // 15 minutes gap since last activity.
    render(
      <MockExam
        questions={[makeQ("q1", "1.1", 0), makeQ("q2", "2.1", 1)]}
        initialSession={session}
        database={db}
        now={() => START + 15 * 60 * 1000}
        lastActivityTs={START}
      />,
    );
    expect(screen.getByTestId("mock-resume-prompt")).toBeInTheDocument();
    expect(screen.getByTestId("mock-resume")).toBeInTheDocument();
    expect(screen.getByTestId("mock-abandon")).toBeInTheDocument();
  });

  it("does NOT double-credit pausedMs when the tab hides while the resume modal is up (T1)", async () => {
    // Set up: a session that mounts already-needing-resume (15 min gap).
    // The modal owns the pause clock via promptEnteredAtRef. If the user
    // then hides the tab and returns 10 min later before clicking Resume,
    // the visibility handler must NOT also credit those 10 min.
    const session = makeSession();
    let t = START + 15 * 60 * 1000; // resume modal up
    render(
      <MockExam
        questions={[makeQ("q1", "1.1", 0)]}
        initialSession={session}
        database={db}
        now={() => t}
        lastActivityTs={START}
      />,
    );
    expect(screen.getByTestId("mock-resume-prompt")).toBeInTheDocument();

    // Read pausedMs before the visibility flicker.
    const before = (await db.mockSessions.get(session.id))?.pausedMs ?? 0;

    // Simulate: tab hidden for 10 min during the modal.
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
    t += 10 * 60 * 1000;
    Object.defineProperty(document, "hidden", {
      value: false,
      configurable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
    await act(async () => {
      await Promise.resolve();
    });

    // pausedMs must not have moved because the modal is still up — the
    // modal's pause-credit will fire when the user clicks Resume, not
    // from the visibility handler in parallel.
    const after = (await db.mockSessions.get(session.id))?.pausedMs ?? 0;
    expect(after).toBe(before);
  });

  it("credits pausedMs when the tab is hidden during the active exam (positive Q1 path)", async () => {
    // Counterpart to the T1 test: when the modal is NOT up, the visibility
    // handler must add the hidden duration to pausedMs so the timer
    // doesn't bleed away while the user was in another app.
    await db.mockSessions.clear();
    const session = makeSession();
    await db.mockSessions.put(session);
    let t = START + 60 * 1000; // 1 min into the exam — modal NOT triggered
    render(
      <MockExam
        questions={[makeQ("q1", "1.1", 0)]}
        initialSession={session}
        database={db}
        now={() => t}
      />,
    );
    expect(screen.queryByTestId("mock-resume-prompt")).toBeNull();

    // Hide the tab.
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
    // Three minutes of background time.
    t += 3 * 60 * 1000;
    Object.defineProperty(document, "hidden", {
      value: false,
      configurable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
    await act(async () => {
      await Promise.resolve();
    });
    const stored = await db.mockSessions.get(session.id);
    // pausedMs should reflect the 3-minute gap (within ms).
    expect(stored?.pausedMs).toBeGreaterThanOrEqual(3 * 60 * 1000 - 5);
    expect(stored?.pausedMs).toBeLessThanOrEqual(3 * 60 * 1000 + 5);
  });

  // T5 race guard (`onCompleteFiredRef`) is documented inline in
  // MockExam.tsx. It defends against a 1-frame window where auto-submit
  // and manual submit could both fire — too narrow to reproduce reliably
  // in jsdom, but the existing "does NOT self-persist" + "auto-submits
  // to the scorecard" tests each prove `onComplete` fires exactly once
  // in their respective paths, which is the practical guarantee.
});
