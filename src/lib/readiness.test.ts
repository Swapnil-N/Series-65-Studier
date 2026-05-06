import { describe, it, expect } from "vitest";
import type { Attempt } from "../types/state";
import type { TopicId } from "../types/content";
import {
  MIN_N_PER_TOPIC,
  NASAA_WEIGHTS,
  PASS,
  BUFFER,
  ageDecayWeight,
  computeReadiness,
  computeTopicScore,
  dedupeAttempts,
  studyNextTopic,
  wilsonInterval,
} from "./readiness";

const DAY = 24 * 3600 * 1000;

// Small helper to create attempts of a given topic with a timestamp offset
// from a fixed "now" reference. Keeps tests concise.
function make(
  qid: string,
  topicId: TopicId,
  correct: boolean,
  ts: number,
): Attempt {
  return {
    questionId: qid,
    subtopicId: `${topicId}.1`,
    topicId,
    correct,
    mode: "quiz",
    timestamp: ts,
  };
}

describe("constants", () => {
  it("exposes the expected thresholds and weights", () => {
    expect(MIN_N_PER_TOPIC).toBe(20);
    expect(PASS).toBe(72.5);
    expect(BUFFER).toBe(80);
    // NASAA weights sum to 1 by definition; guards against typos.
    const sum = NASAA_WEIGHTS["1"] + NASAA_WEIGHTS["2"] +
      NASAA_WEIGHTS["3"] + NASAA_WEIGHTS["4"];
    expect(sum).toBeCloseTo(1, 10);
    expect(NASAA_WEIGHTS["1"]).toBe(0.15);
    expect(NASAA_WEIGHTS["2"]).toBe(0.25);
    expect(NASAA_WEIGHTS["3"]).toBe(0.30);
    expect(NASAA_WEIGHTS["4"]).toBe(0.30);
  });
});

describe("wilsonInterval", () => {
  it("returns zeros when total is 0", () => {
    const w = wilsonInterval(0, 0);
    expect(w.point).toBe(0);
    expect(w.lower).toBe(0);
    expect(w.upper).toBe(0);
    expect(w.halfWidth).toBe(0);
  });

  it("computes the known Wilson interval for 80/100", () => {
    // Canonical Wilson reference: 80/100 at z=1.96 → ~[71.14%, 86.74%].
    const w = wilsonInterval(80, 100);
    expect(w.point).toBeCloseTo(80, 5);
    expect(w.lower).toBeGreaterThan(70.5);
    expect(w.lower).toBeLessThan(72);
    expect(w.upper).toBeGreaterThan(86);
    expect(w.upper).toBeLessThan(87.5);
    expect(w.halfWidth).toBeGreaterThan(7);
    expect(w.halfWidth).toBeLessThan(9);
  });

  it("computes a symmetric-ish interval for 50/100", () => {
    const w = wilsonInterval(50, 100);
    expect(w.point).toBeCloseTo(50, 5);
    // Standard Wilson for 50/100: ~[40.38%, 59.62%].
    expect(w.lower).toBeGreaterThan(39);
    expect(w.upper).toBeLessThan(61);
  });

  it("narrows the interval as total grows", () => {
    const small = wilsonInterval(8, 10);
    const large = wilsonInterval(800, 1000);
    expect(large.halfWidth).toBeLessThan(small.halfWidth);
  });

  it("clamps bounds to [0, 100]", () => {
    const perfect = wilsonInterval(10, 10);
    expect(perfect.upper).toBeLessThanOrEqual(100);
    const zero = wilsonInterval(0, 10);
    expect(zero.lower).toBeGreaterThanOrEqual(0);
  });
});

describe("dedupeAttempts", () => {
  const now = 1_700_000_000_000;

  it("within the 7-day window, keeps only the most recent per questionId", () => {
    const attempts: Attempt[] = [
      make("q1", "1", false, now - 3 * DAY),
      make("q1", "1", true, now - 1 * DAY),
      make("q2", "1", true, now - 2 * DAY),
    ];
    const out = dedupeAttempts(attempts, 7 * DAY, now);
    expect(out).toHaveLength(2);
    const q1 = out.find((a) => a.questionId === "q1")!;
    expect(q1.correct).toBe(true);
    expect(q1.timestamp).toBe(now - 1 * DAY);
  });

  it("preserves attempts outside the dedupe window", () => {
    const attempts: Attempt[] = [
      make("q1", "1", false, now - 10 * DAY), // outside window
      make("q1", "1", true, now - 1 * DAY), // inside window
    ];
    const out = dedupeAttempts(attempts, 7 * DAY, now);
    // Outside-window attempt + the one in-window survivor.
    expect(out).toHaveLength(2);
  });

  it("keeps a single attempt untouched", () => {
    const a = [make("q1", "1", true, now - 1 * DAY)];
    const out = dedupeAttempts(a, 7 * DAY, now);
    expect(out).toEqual(a);
  });

  it("handles the 7-day boundary inclusively on windowStart", () => {
    const attempts: Attempt[] = [
      // Exactly 7 days old counts as in-window (>= windowStart).
      make("q1", "1", false, now - 7 * DAY),
      make("q1", "1", true, now - 1 * DAY),
    ];
    const out = dedupeAttempts(attempts, 7 * DAY, now);
    expect(out).toHaveLength(1);
    expect(out[0].correct).toBe(true);
  });
});

describe("ageDecayWeight", () => {
  const now = 1_700_000_000_000;

  it("weights ≤ 30-day-old attempts at 1.0", () => {
    const a = make("q1", "1", true, now - 5 * DAY);
    expect(ageDecayWeight(a, now)).toBe(1.0);
  });

  it("weights exactly-30-day-old attempts at 1.0 (boundary)", () => {
    const a = make("q1", "1", true, now - 30 * DAY);
    expect(ageDecayWeight(a, now)).toBe(1.0);
  });

  it("weights > 30-day-old attempts at 0.5", () => {
    const a = make("q1", "1", true, now - 31 * DAY);
    expect(ageDecayWeight(a, now)).toBe(0.5);
  });
});

describe("computeTopicScore", () => {
  const now = 1_700_000_000_000;

  function buildAttempts(n: number, correctCount: number, topicId: TopicId) {
    const out: Attempt[] = [];
    for (let i = 0; i < n; i++) {
      out.push(make(`q${i}`, topicId, i < correctCount, now - (i + 1) * DAY));
    }
    return out;
  }

  it("reports insufficient when distinct n < 20", () => {
    const attempts = buildAttempts(19, 15, "1");
    const s = computeTopicScore(attempts, "1", now);
    expect(s.n).toBe(19);
    expect(s.sufficient).toBe(false);
    expect(s.point).toBeNull();
    expect(s.halfWidth).toBeNull();
  });

  it("flips to sufficient at exactly 20 distinct attempts", () => {
    const attempts = buildAttempts(20, 15, "1");
    const s = computeTopicScore(attempts, "1", now);
    expect(s.n).toBe(20);
    expect(s.sufficient).toBe(true);
    expect(s.point).not.toBeNull();
    expect(s.halfWidth).not.toBeNull();
  });

  it("filters attempts to the requested topic only", () => {
    const a: Attempt[] = [
      ...buildAttempts(20, 20, "1"),
      ...buildAttempts(20, 0, "2"),
    ];
    const s = computeTopicScore(a, "1", now);
    expect(s.n).toBe(20);
    // All 20 correct in topic 1 → point = 100%.
    expect(s.point).toBeCloseTo(100, 5);
  });

  it("caps at the last 50 distinct questions (most recent first)", () => {
    const out: Attempt[] = [];
    // 60 distinct questions, all within the 30-day window so age-decay is a
    // non-factor here (this test targets the last-50 cap, not age-decay).
    // qIndex 0 → oldest (29 days old), qIndex 59 → newest (< 1 day).
    for (let i = 0; i < 60; i++) {
      const ts = now - (30 - (i * 29) / 59) * DAY;
      // Correct only for i < 30 (the oldest half).
      out.push(make(`q${i}`, "1", i < 30, ts));
    }
    const s = computeTopicScore(out, "1", now);
    expect(s.n).toBe(50);
    // Last 50 distinct = i in [10, 59]; 20 of those (i=10..29) are correct.
    // All rows inside the 30-day window → weights 1.0 throughout.
    expect(s.point).toBeCloseTo(40, 1);
  });

  it("applies age-decay so older-but-correct answers weigh less than recent wrong ones", () => {
    // 20 distinct questions. 10 correct but all > 30 days old (weight 0.5).
    // 10 wrong, all within 30 days (weight 1.0).
    // → weightedCorrect = 10*0.5 = 5; weightedTotal = 10*0.5 + 10*1.0 = 15.
    // → point = 5/15 = 33.3…%.
    const attempts: Attempt[] = [];
    for (let i = 0; i < 10; i++) {
      attempts.push(make(`oldq${i}`, "1", true, now - (60 + i) * DAY));
    }
    for (let i = 0; i < 10; i++) {
      attempts.push(make(`newq${i}`, "1", false, now - (i + 1) * DAY));
    }
    const s = computeTopicScore(attempts, "1", now);
    expect(s.n).toBe(20);
    expect(s.sufficient).toBe(true);
    // Allow loose tolerance because Wilson's `point` is p̂ = correct/total.
    expect(s.point).toBeCloseTo((5 / 15) * 100, 1);
  });

  it("Wilson half-width uses RAW counts (not age-decay-weighted) — review M1", () => {
    // Two scenarios with the same RAW counts (15 correct / 20) but different
    // age splits. The point estimate diverges (age decay weights recent
    // wrongs more) but the Wilson half-width must be the same because
    // raw counts are identical.
    const all30dWrong: Attempt[] = [];
    for (let i = 0; i < 15; i++) {
      all30dWrong.push(make(`a${i}`, "1", true, now - (i + 1) * DAY));
    }
    for (let i = 0; i < 5; i++) {
      all30dWrong.push(make(`b${i}`, "1", false, now - (i + 1) * DAY));
    }

    const oldWrongMix: Attempt[] = [];
    for (let i = 0; i < 15; i++) {
      oldWrongMix.push(make(`c${i}`, "1", true, now - (i + 1) * DAY));
    }
    for (let i = 0; i < 5; i++) {
      // 60d ago — age-decay weight 0.5×.
      oldWrongMix.push(make(`d${i}`, "1", false, now - (60 + i) * DAY));
    }

    const a = computeTopicScore(all30dWrong, "1", now);
    const b = computeTopicScore(oldWrongMix, "1", now);
    // Same raw counts → same half-width.
    expect(a.halfWidth).toBeCloseTo(b.halfWidth ?? 0, 6);
    // Different age distributions → different point estimates.
    expect(a.point).not.toBeCloseTo(b.point ?? -1, 1);
  });

  it("dedupes retries within 7 days using the most-recent attempt", () => {
    // Same questionId answered twice within 3 days — newer is wrong.
    // Then 19 other distinct attempts. Distinct n should be 20.
    const dupes: Attempt[] = [
      make("dup", "1", true, now - 3 * DAY),
      make("dup", "1", false, now - 1 * DAY),
    ];
    const others: Attempt[] = [];
    for (let i = 0; i < 19; i++) {
      others.push(make(`q${i}`, "1", true, now - (i + 5) * DAY));
    }
    const s = computeTopicScore([...dupes, ...others], "1", now);
    expect(s.n).toBe(20);
    // 19 correct + the deduped "dup" which is now incorrect → 19/20 = 95%.
    expect(s.point).toBeCloseTo(95, 1);
  });
});

describe("computeReadiness", () => {
  const now = 1_700_000_000_000;

  it("returns a partial-rollup overall when at least one topic is sufficient", () => {
    // Topic 1 only. Other topics empty → insufficient. Plan says insufficient
    // topics are excluded from the rollup, not that overall goes null while
    // any data exists.
    const attempts: Attempt[] = [];
    for (let i = 0; i < 20; i++) {
      attempts.push(make(`q${i}`, "1", true, now - (i + 1) * DAY));
    }
    const r = computeReadiness(attempts, now);
    expect(r.sufficient).toBe(false); // not all four topics yet
    expect(r.overall).not.toBeNull();
    expect(r.overall).toBeCloseTo(100, 1); // topic 1 = 100%, only contributor
    expect(r.contributingTopics).toEqual(["1"]);
    expect(r.perTopic).toHaveLength(4);
    expect(r.perTopic[0].sufficient).toBe(true);
    expect(r.perTopic[1].sufficient).toBe(false);
  });

  it("returns null overall only when no topic is sufficient", () => {
    const attempts: Attempt[] = [];
    for (let i = 0; i < 5; i++) {
      attempts.push(make(`q${i}`, "1", true, now - (i + 1) * DAY));
    }
    const r = computeReadiness(attempts, now);
    expect(r.overall).toBeNull();
    expect(r.sufficient).toBe(false);
    expect(r.contributingTopics).toEqual([]);
  });

  it("renormalises NASAA weights across contributing topics", () => {
    // Topics 1 (15%) and 2 (25%) sufficient; 3 and 4 not. Renormalised:
    // weight1 = 15/(15+25) = 0.375, weight2 = 25/40 = 0.625.
    // Topic 1 = 100%, topic 2 = 80% → 100*0.375 + 80*0.625 = 87.5.
    const attempts: Attempt[] = [];
    for (let i = 0; i < 20; i++) {
      attempts.push(make(`a${i}`, "1", true, now - (i + 1) * DAY));
      attempts.push(make(`b${i}`, "2", i < 16, now - (i + 1) * DAY));
    }
    const r = computeReadiness(attempts, now);
    expect(r.overall).toBeCloseTo(87.5, 1);
    expect(r.contributingTopics).toEqual(["1", "2"]);
    expect(r.sufficient).toBe(false);
  });

  it("computes a NASAA-weighted overall when all topics are sufficient", () => {
    const attempts: Attempt[] = [];
    // Topic 1: 20 attempts, 100% correct.
    // Topic 2: 20 attempts, 80% correct.
    // Topic 3: 20 attempts, 60% correct.
    // Topic 4: 20 attempts, 40% correct.
    const pctByTopic: Record<TopicId, number> = {
      "1": 100,
      "2": 80,
      "3": 60,
      "4": 40,
    };
    const topics: TopicId[] = ["1", "2", "3", "4"];
    for (const t of topics) {
      const correctCount = (pctByTopic[t] / 100) * 20;
      for (let i = 0; i < 20; i++) {
        attempts.push(
          make(`${t}-q${i}`, t, i < correctCount, now - (i + 1) * DAY),
        );
      }
    }
    const r = computeReadiness(attempts, now);
    expect(r.sufficient).toBe(true);
    // 100*0.15 + 80*0.25 + 60*0.30 + 40*0.30 = 15 + 20 + 18 + 12 = 65.
    expect(r.overall).toBeCloseTo(65, 1);
  });
});

describe("studyNextTopic", () => {
  const now = 1_700_000_000_000;

  function buildAttempts(n: number, correctCount: number, topicId: TopicId) {
    const out: Attempt[] = [];
    for (let i = 0; i < n; i++) {
      out.push(make(`${topicId}-q${i}`, topicId, i < correctCount, now - (i + 1) * DAY));
    }
    return out;
  }

  it("picks the topic with the lowest point estimate when all sufficient", () => {
    const attempts: Attempt[] = [
      ...buildAttempts(20, 20, "1"), // 100%
      ...buildAttempts(20, 10, "2"), // 50% — lowest
      ...buildAttempts(20, 16, "3"), // 80%
      ...buildAttempts(20, 18, "4"), // 90%
    ];
    const r = computeReadiness(attempts, now);
    expect(studyNextTopic(r)).toBe("2");
  });

  it("tiebreaks by topic id asc when points are equal", () => {
    const attempts: Attempt[] = [
      ...buildAttempts(20, 20, "1"),
      ...buildAttempts(20, 10, "2"),
      ...buildAttempts(20, 10, "3"),
      ...buildAttempts(20, 20, "4"),
    ];
    const r = computeReadiness(attempts, now);
    // Topics 2 and 3 both at 50%; "2" wins the asc tiebreak.
    expect(studyNextTopic(r)).toBe("2");
  });

  it("falls back to least-attempted topic when no topic is sufficient", () => {
    const attempts: Attempt[] = [
      ...buildAttempts(5, 5, "1"),
      ...buildAttempts(3, 3, "2"),
      ...buildAttempts(10, 10, "3"),
      ...buildAttempts(1, 1, "4"), // fewest
    ];
    const r = computeReadiness(attempts, now);
    expect(r.sufficient).toBe(false);
    expect(studyNextTopic(r)).toBe("4");
  });

  it("falls back to topic 1 when perTopic is empty (defensive)", () => {
    // Directly construct an empty ReadinessResult.
    expect(
      studyNextTopic({
        perTopic: [],
        overall: null,
        sufficient: false,
        contributingTopics: [],
      }),
    ).toBe("1");
  });

  it("prefers an n=0 topic when at least one sufficient topic is past BUFFER (review W9)", () => {
    // Topic 1 sufficient at 95% (mastered), topic 2 has 0 attempts. Plan
    // says "study next" should send the user to the unstarted topic, not
    // tell them to keep drilling what they already know.
    const attempts: Attempt[] = [];
    for (let i = 0; i < 20; i++) {
      attempts.push(make(`q${i}`, "1", true, now - (i + 1) * DAY));
    }
    const r = computeReadiness(attempts, now);
    expect(r.perTopic[0].sufficient).toBe(true);
    expect(r.perTopic[0].point).toBeGreaterThanOrEqual(80);
    expect(r.perTopic[1].n).toBe(0);
    // Without the W9 carve-out this would return "1" (lowest sufficient).
    expect(studyNextTopic(r)).toBe("2");
  });
});
