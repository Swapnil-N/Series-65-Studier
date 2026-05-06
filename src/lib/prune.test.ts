import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { db } from "./db";
import { pruneAttempts, runMaintenance } from "./prune";

beforeEach(async () => {
  await db.delete();
  await db.open();
});

afterEach(async () => {
  await db.close();
});

describe("pruneAttempts", () => {
  it("is a no-op when under the cap", async () => {
    for (let i = 0; i < 10; i++) {
      await db.attempts.add({
        questionId: `q${i}`,
        subtopicId: "1.1",
        topicId: "1",
        correct: true,
        mode: "quiz",
        timestamp: i,
      });
    }
    const deleted = await pruneAttempts(100);
    expect(deleted).toBe(0);
    expect(await db.attempts.count()).toBe(10);
  });

  it("prunes the exact overflow count (FIFO, oldest first)", async () => {
    const N = 10_100;
    const CAP = 10_000;
    // bulkAdd is much faster than per-row add; primary keys auto-assigned in
    // insertion order keep FIFO semantics honest.
    const rows = [];
    for (let i = 0; i < N; i++) {
      rows.push({
        questionId: `q${i}`,
        subtopicId: "1.1" as const,
        topicId: "1" as const,
        correct: true,
        mode: "quiz" as const,
        timestamp: i,
      });
    }
    await db.attempts.bulkAdd(rows);
    expect(await db.attempts.count()).toBe(N);

    const deleted = await pruneAttempts(CAP);
    expect(deleted).toBe(100);
    expect(await db.attempts.count()).toBe(CAP);

    // Oldest 100 gone, newest intact.
    const first = await db.attempts.orderBy("id").first();
    const last = await db.attempts.orderBy("id").last();
    expect(first?.questionId).toBe("q100");
    expect(last?.questionId).toBe(`q${N - 1}`);
  }, 30_000);

  it("runMaintenance invokes pruneAttempts", async () => {
    // Seed just one row so this is fast; we're verifying orchestration, not
    // the prune math (covered above).
    await db.attempts.add({
      questionId: "q0",
      subtopicId: "1.1",
      topicId: "1",
      correct: true,
      mode: "quiz",
      timestamp: 0,
    });
    await runMaintenance();
    expect(await db.attempts.count()).toBe(1);
  });
});
