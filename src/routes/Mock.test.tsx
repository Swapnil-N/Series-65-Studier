import { describe, expect, it, beforeEach } from "vitest";
import "fake-indexeddb/auto";
import { db } from "../lib/db";
import { persistMockCompletion } from "../lib/mockExam";
import type { Question } from "../types/content";
import type { MockExamSession } from "../types/state";

// Locks in the B1 fix: completing a mock must write Attempts, missed-queue
// rows, and dailyActivity. Without this the 130-Q flow is cosmetic.

const Q = (
  id: string,
  subtopicId: string,
  answerIndex: 0 | 1 | 2 | 3,
): Question => ({
  id,
  subtopicId,
  stem: `stem-${id}`,
  choices: ["a", "b", "c", "d"],
  answerIndex,
  rationale: "",
  citation: { source: "NASAA", ref: "Section 1.A" },
  difficulty: "easy",
  reviewed: true,
});

function todayKey(now: number): string {
  const d = new Date(now);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

describe("Mock completion persistence (B1 fix)", () => {
  beforeEach(async () => {
    await db.mockSessions.clear();
    await db.attempts.clear();
    await db.missedQueue.clear();
    await db.dailyActivity.clear();
  });

  it("writes one Attempt per answered question with mode='mock' + mockId", async () => {
    const questions = [Q("q1", "1.1", 0), Q("q2", "2.3", 1), Q("q3", "3.1", 2)];
    const session: MockExamSession = {
      id: "mock-1",
      startedAt: 1_700_000_000_000,
      pausedMs: 0,
      questionIds: ["q1", "q2", "q3"],
      answers: [0, 0, 2], // q1 correct, q2 wrong, q3 correct
      currentIndex: 2,
      status: "active",
    };
    const result = await persistMockCompletion(
      session,
      questions,
      db,
      1_700_000_100_000,
    );
    expect(result.attemptsWritten).toBe(3);
    const rows = await db.attempts.toArray();
    expect(rows).toHaveLength(3);
    expect(rows.every((r) => r.mode === "mock")).toBe(true);
    expect(rows.every((r) => r.mockId === "mock-1")).toBe(true);
    expect(rows.find((r) => r.questionId === "q1")?.correct).toBe(true);
    expect(rows.find((r) => r.questionId === "q2")?.correct).toBe(false);
    expect(rows.find((r) => r.questionId === "q3")?.correct).toBe(true);
  });

  it("upserts wrong answers into the missed queue", async () => {
    const questions = [Q("q1", "1.1", 0), Q("q2", "2.3", 1)];
    const session: MockExamSession = {
      id: "mock-2",
      startedAt: 0,
      pausedMs: 0,
      questionIds: ["q1", "q2"],
      answers: [3, 1], // q1 wrong, q2 right
      currentIndex: 1,
      status: "active",
    };
    await persistMockCompletion(session, questions, db, 1_700_000_000_000);
    const missed = await db.missedQueue.toArray();
    expect(missed.map((m) => m.questionId)).toEqual(["q1"]);
    expect(missed[0].topicId).toBe("1");
  });

  it("increments today's dailyActivity.questionsAnswered by answered count", async () => {
    const questions = [Q("q1", "1.1", 0), Q("q2", "2.3", 1), Q("q3", "3.1", 2)];
    const session: MockExamSession = {
      id: "mock-3",
      startedAt: 0,
      pausedMs: 0,
      questionIds: ["q1", "q2", "q3"],
      answers: [0, 1, null], // 2 answered, 1 unanswered
      currentIndex: 2,
      status: "active",
    };
    const now = 1_700_000_000_000;
    await persistMockCompletion(session, questions, db, now);
    const row = await db.dailyActivity.get(todayKey(now));
    expect(row?.questionsAnswered).toBe(2);
  });

  it("marks the session as completed", async () => {
    const questions = [Q("q1", "1.1", 0)];
    const session: MockExamSession = {
      id: "mock-4",
      startedAt: 0,
      pausedMs: 0,
      questionIds: ["q1"],
      answers: [0],
      currentIndex: 0,
      status: "active",
    };
    await persistMockCompletion(session, questions, db);
    const stored = await db.mockSessions.get("mock-4");
    expect(stored?.status).toBe("completed");
  });

  it("skips unknown question IDs but records every known slot (answered or not)", async () => {
    // Unanswered slots are recorded as `correct: false` so readiness sees
    // the same denominator scoreMock uses on the scorecard. Unknown IDs
    // (no matching question content) are still skipped. (Review M4.)
    const questions = [Q("q1", "1.1", 0)];
    const session: MockExamSession = {
      id: "mock-5",
      startedAt: 0,
      pausedMs: 0,
      questionIds: ["q1", "ghost", "q1"],
      answers: [0, 0, null],
      currentIndex: 2,
      status: "active",
    };
    const result = await persistMockCompletion(session, questions, db);
    // 2 known questionIds (q1 twice), 1 unknown (ghost) → 2 attempt rows.
    expect(result.attemptsWritten).toBe(2);
    // Of those, only one slot was answered (the trailing null counts as
    // unanswered for the questionsAnswered increment).
    expect(result.questionsAnswered).toBe(1);
    const rows = await db.attempts.toArray();
    const byCorrect = rows.map((r) => r.correct);
    // First q1 answered correctly; second q1 unanswered → false.
    expect(byCorrect).toEqual([true, false]);
  });
});
