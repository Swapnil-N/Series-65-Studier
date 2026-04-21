import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  MOCK_DURATION_MS,
  PASS_THRESHOLD,
  TOPIC_COUNTS,
  composeExam,
  computeRemainingMs,
  getExcludedIds,
  scoreMock,
} from "./mockExam";
import { db } from "./db";
import type { Question, TopicId } from "../types/content";
import type { MockExamSession } from "../types/state";

// Deterministic pseudo-random generator so composeExam tests are reproducible.
// Mulberry32 — 32-bit integer seed, uniform output in [0, 1). Tiny, well-known.
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeQuestion(
  id: string,
  subtopicId: string,
  answerIndex: 0 | 1 | 2 | 3 = 0,
  reviewed = true,
): Question {
  return {
    id,
    subtopicId,
    stem: `Stem for ${id}?`,
    choices: ["A", "B", "C", "D"],
    answerIndex,
    rationale: `Rationale for ${id}`,
    citation: { source: "NASAA", ref: "ref" },
    difficulty: "medium",
    reviewed,
  };
}

/** Build a pool with `counts` reviewed questions per topic (plus optional
 * extras prefixed `u` that are unreviewed). Question ids are stable so tests
 * can reference them. */
function buildPool(
  counts: Record<TopicId, number>,
  unreviewedExtras = 0,
): Question[] {
  const out: Question[] = [];
  (["1", "2", "3", "4"] as TopicId[]).forEach((t) => {
    for (let i = 0; i < counts[t]; i++) {
      out.push(makeQuestion(`${t}-${i}`, `${t}.1`));
    }
    for (let i = 0; i < unreviewedExtras; i++) {
      out.push(makeQuestion(`u-${t}-${i}`, `${t}.1`, 0, false));
    }
  });
  return out;
}

describe("composeExam", () => {
  it("returns exactly 130 questions with the 20/32/39/39 topic split", () => {
    const pool = buildPool({ "1": 30, "2": 40, "3": 50, "4": 50 });
    const picked = composeExam(pool, new Set(), mulberry32(1));
    expect(picked.length).toBe(130);

    const byId = new Map(pool.map((q) => [q.id, q]));
    const perTopic: Record<TopicId, number> = { "1": 0, "2": 0, "3": 0, "4": 0 };
    for (const id of picked) {
      const q = byId.get(id);
      expect(q).toBeDefined();
      const t = q!.subtopicId.split(".")[0] as TopicId;
      perTopic[t] += 1;
    }
    expect(perTopic).toEqual(TOPIC_COUNTS);
  });

  it("excludes ids from the last-3 set when possible (never picks excluded)", () => {
    // Provide 1.5x the required per topic so the preferred filter can fully
    // satisfy every bucket without falling back onto excluded items.
    const pool = buildPool({ "1": 30, "2": 48, "3": 60, "4": 60 });
    const excluded = new Set<string>([
      "1-0",
      "1-1",
      "2-0",
      "2-1",
      "2-2",
      "3-5",
      "4-10",
    ]);
    const picked = new Set(composeExam(pool, excluded, mulberry32(7)));
    for (const id of excluded) {
      expect(picked.has(id)).toBe(false);
    }
  });

  it("throws on insufficient reviewed pool for a topic", () => {
    // Topic 3 is under the required 39.
    const pool = buildPool({ "1": 25, "2": 35, "3": 10, "4": 50 });
    expect(() => composeExam(pool, new Set(), mulberry32(1))).toThrow(
      /insufficient reviewed questions for topic 3/,
    );
  });

  it("never picks unreviewed questions even if the pool is huge", () => {
    // Keep reviewed counts exactly at required; pad with unreviewed to confirm
    // the filter excludes them from consideration rather than expanding the
    // bucket.
    const pool = buildPool(TOPIC_COUNTS, 100);
    const picked = composeExam(pool, new Set(), mulberry32(3));
    const byId = new Map(pool.map((q) => [q.id, q]));
    for (const id of picked) {
      expect(byId.get(id)!.reviewed).toBe(true);
    }
  });

  it("is deterministic when given the same seed", () => {
    const pool = buildPool({ "1": 30, "2": 40, "3": 50, "4": 50 });
    const a = composeExam(pool, new Set(), mulberry32(42));
    const b = composeExam(pool, new Set(), mulberry32(42));
    expect(a).toEqual(b);
  });

  it("produces different orderings with different seeds (smoke)", () => {
    const pool = buildPool({ "1": 30, "2": 40, "3": 50, "4": 50 });
    const a = composeExam(pool, new Set(), mulberry32(1));
    const b = composeExam(pool, new Set(), mulberry32(2));
    // Very unlikely to be equal for two different seeds over 130 picks.
    expect(a).not.toEqual(b);
  });

  it("falls back to excluded ids when the preferred pool is short", () => {
    // Topic 1 has exactly 20 reviewed items but 5 are excluded. The fallback
    // branch is required to hit 20.
    const pool = buildPool({ "1": 20, "2": 40, "3": 50, "4": 50 });
    const excluded = new Set<string>(["1-0", "1-1", "1-2", "1-3", "1-4"]);
    const picked = composeExam(pool, excluded, mulberry32(9));
    const byId = new Map(pool.map((q) => [q.id, q]));
    const topic1Ids = picked.filter(
      (id) => byId.get(id)!.subtopicId.startsWith("1."),
    );
    expect(topic1Ids.length).toBe(20);
    // At least one excluded id will have been pulled in via the fallback path.
    const overlap = topic1Ids.filter((id) => excluded.has(id));
    expect(overlap.length).toBeGreaterThan(0);
  });
});

describe("computeRemainingMs", () => {
  const baseSession = {
    startedAt: 1_000_000,
    pausedMs: 0,
  };

  it("returns the full duration at t=startedAt", () => {
    expect(computeRemainingMs(baseSession, baseSession.startedAt)).toBe(
      MOCK_DURATION_MS,
    );
  });

  it("decreases linearly with wall-clock time", () => {
    const after5min = baseSession.startedAt + 5 * 60 * 1000;
    expect(computeRemainingMs(baseSession, after5min)).toBe(
      MOCK_DURATION_MS - 5 * 60 * 1000,
    );
  });

  it("never goes negative after the timer runs out", () => {
    const wayLater = baseSession.startedAt + MOCK_DURATION_MS + 60_000;
    expect(computeRemainingMs(baseSession, wayLater)).toBe(0);
  });

  it("adds pausedMs back onto the remaining budget", () => {
    // 10 minutes of wall time elapsed, but 4 minutes counted as paused, so
    // only 6 minutes of active exam time have been consumed.
    const now = baseSession.startedAt + 10 * 60 * 1000;
    const remaining = computeRemainingMs(
      { startedAt: baseSession.startedAt, pausedMs: 4 * 60 * 1000 },
      now,
    );
    expect(remaining).toBe(MOCK_DURATION_MS - 6 * 60 * 1000);
  });
});

describe("getExcludedIds", () => {
  beforeEach(async () => {
    await db.delete();
    await db.open();
  });
  afterEach(async () => {
    await db.close();
  });

  it("unions questionIds across the most recent K non-abandoned sessions", async () => {
    // Four sessions, varying status and startedAt. We expect the three most
    // recent non-abandoned to be unioned; the abandoned one is skipped even
    // though it is the newest overall.
    await db.mockSessions.bulkPut([
      {
        id: "old",
        startedAt: 1,
        pausedMs: 0,
        questionIds: ["old-a"],
        answers: [null],
        currentIndex: 0,
        status: "completed",
      },
      {
        id: "mid",
        startedAt: 2,
        pausedMs: 0,
        questionIds: ["mid-a", "shared"],
        answers: [null, null],
        currentIndex: 0,
        status: "completed",
      },
      {
        id: "recent",
        startedAt: 3,
        pausedMs: 0,
        questionIds: ["recent-a", "shared"],
        answers: [null, null],
        currentIndex: 0,
        status: "active",
      },
      {
        id: "abandoned",
        startedAt: 4,
        pausedMs: 0,
        questionIds: ["abandoned-a"],
        answers: [null],
        currentIndex: 0,
        status: "abandoned",
      },
    ]);

    const excluded = await getExcludedIds(db, 3);
    expect(excluded.has("recent-a")).toBe(true);
    expect(excluded.has("mid-a")).toBe(true);
    expect(excluded.has("old-a")).toBe(true);
    expect(excluded.has("shared")).toBe(true);
    expect(excluded.has("abandoned-a")).toBe(false);
    expect(excluded.size).toBe(4);
  });

  it("returns an empty set when there are no sessions", async () => {
    const excluded = await getExcludedIds(db, 3);
    expect(excluded.size).toBe(0);
  });

  it("respects the lastK argument and drops older sessions", async () => {
    await db.mockSessions.bulkPut([
      {
        id: "s1",
        startedAt: 1,
        pausedMs: 0,
        questionIds: ["a"],
        answers: [null],
        currentIndex: 0,
        status: "completed",
      },
      {
        id: "s2",
        startedAt: 2,
        pausedMs: 0,
        questionIds: ["b"],
        answers: [null],
        currentIndex: 0,
        status: "completed",
      },
      {
        id: "s3",
        startedAt: 3,
        pausedMs: 0,
        questionIds: ["c"],
        answers: [null],
        currentIndex: 0,
        status: "completed",
      },
    ]);
    const excluded = await getExcludedIds(db, 1);
    expect(Array.from(excluded)).toEqual(["c"]);
  });
});

describe("scoreMock", () => {
  it("computes overall and per-topic percentages with pass flag", () => {
    const questions: Question[] = [
      makeQuestion("t1-a", "1.1", 0),
      makeQuestion("t1-b", "1.1", 1),
      makeQuestion("t2-a", "2.1", 2),
      makeQuestion("t3-a", "3.1", 3),
      makeQuestion("t4-a", "4.1", 0),
    ];
    const session: Pick<MockExamSession, "questionIds" | "answers"> = {
      questionIds: ["t1-a", "t1-b", "t2-a", "t3-a", "t4-a"],
      // 3 correct, 1 wrong (t3-a), 1 unanswered (t4-a); unanswered is "wrong"
      // for scoring but still counts in total — 3/5 = 60%.
      answers: [0, 1, 2, 0, null],
    };
    const score = scoreMock(session, questions);
    expect(score.overallPct).toBe(60);
    expect(score.perTopic["1"]).toEqual({ correct: 2, total: 2, pct: 100 });
    expect(score.perTopic["2"]).toEqual({ correct: 1, total: 1, pct: 100 });
    expect(score.perTopic["3"]).toEqual({ correct: 0, total: 1, pct: 0 });
    expect(score.perTopic["4"]).toEqual({ correct: 0, total: 1, pct: 0 });
    expect(score.pass).toBe(false);
  });

  it("marks pass=true at or above the 72.5% threshold", () => {
    // 3/4 = 75% — passing.
    const questions: Question[] = [
      makeQuestion("a", "1.1", 0),
      makeQuestion("b", "1.1", 1),
      makeQuestion("c", "2.1", 2),
      makeQuestion("d", "3.1", 3),
    ];
    const session = {
      questionIds: ["a", "b", "c", "d"],
      answers: [0, 1, 2, 0] as (0 | 1 | 2 | 3 | null)[],
    };
    const score = scoreMock(session, questions);
    expect(score.overallPct).toBe(75);
    expect(score.pass).toBe(true);
  });

  it("marks pass=false below the 72.5% threshold", () => {
    const questions: Question[] = [
      makeQuestion("a", "1.1", 0),
      makeQuestion("b", "1.1", 1),
      makeQuestion("c", "2.1", 2),
      makeQuestion("d", "3.1", 3),
    ];
    const session = {
      questionIds: ["a", "b", "c", "d"],
      answers: [0, 0, 0, 0] as (0 | 1 | 2 | 3 | null)[],
    };
    const score = scoreMock(session, questions);
    // 1/4 correct — well below PASS_THRESHOLD.
    expect(score.overallPct).toBeLessThan(PASS_THRESHOLD);
    expect(score.pass).toBe(false);
  });
});
