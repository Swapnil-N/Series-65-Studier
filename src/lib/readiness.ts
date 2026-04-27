import type { Attempt } from "../types/state";
import type { TopicId } from "../types/content";

// -----------------------------------------------------------------------------
// Readiness score
// -----------------------------------------------------------------------------
//
// The plan's "Readiness score" section is the normative spec. Every guardrail
// (min-N=20, 7-day dedupe, age-decay, Wilson CI, weighted rollup) is encoded
// here so the UI never needs to re-derive the math.
//
// The public API is intentionally pure and synchronous: the Dashboard passes
// in the latest attempts array and receives a structured result. Persistence
// lives in the caller.

/** Minimum distinct questions per topic before that topic counts. */
export const MIN_N_PER_TOPIC = 20;

/** NASAA pass score (%). */
export const PASS = 72.5;

/** "Comfortable" buffer above the passline (%). */
export const BUFFER = 80;

/** NASAA topic weights used for the overall readiness rollup. */
export const NASAA_WEIGHTS: Record<TopicId, number> = {
  "1": 0.15,
  "2": 0.25,
  "3": 0.30,
  "4": 0.30,
};

/** 30 days in ms — boundary for age-decay. */
const THIRTY_DAYS_MS = 30 * 24 * 3600 * 1000;

/**
 * Within a sliding window, keep only the most recent attempt per `questionId`.
 * Attempts outside the window are preserved unchanged (the "dedupe retries"
 * rule targets rapid re-drilling of the same question; older attempts still
 * count via the distinct-last-50 cap).
 */
export function dedupeAttempts(
  attempts: Attempt[],
  windowMs = 7 * 24 * 3600 * 1000,
  now: number = Date.now(),
): Attempt[] {
  const windowStart = now - windowMs;
  // Within window: keep the max-timestamp attempt per questionId.
  const byQid = new Map<string, Attempt>();
  const outsideWindow: Attempt[] = [];
  for (const a of attempts) {
    if (a.timestamp < windowStart) {
      outsideWindow.push(a);
      continue;
    }
    const cur = byQid.get(a.questionId);
    if (!cur || a.timestamp > cur.timestamp) byQid.set(a.questionId, a);
  }
  return [...outsideWindow, ...byQid.values()];
}

/**
 * Age-decay weight for a single attempt. Attempts ≤ 30 days old contribute
 * full weight; older attempts contribute 0.5×. Keeps readiness biased toward
 * recent performance without completely discarding older data.
 */
export function ageDecayWeight(
  attempt: Attempt,
  now: number = Date.now(),
): number {
  const age = now - attempt.timestamp;
  return age <= THIRTY_DAYS_MS ? 1.0 : 0.5;
}

/**
 * Wilson score interval for a binomial proportion, rendered as percentages
 * on [0, 100]. Uses the standard form:
 *
 *     p̂ = correct / total
 *     center = (p̂ + z²/(2n)) / (1 + z²/n)
 *     half   = z * sqrt( (p̂(1-p̂) + z²/(4n)) / n ) / (1 + z²/n)
 *
 * `point` is the maximum-likelihood estimate (p̂) in percent, which is what
 * the Dashboard displays next to the bar. `lower`/`upper` bound the Wilson
 * CI; `halfWidth` is (upper - lower) / 2 for error-bar rendering.
 *
 * When total = 0 we return zeros rather than NaN — callers guard via the
 * sufficient flag on `computeTopicScore`.
 */
export function wilsonInterval(
  correct: number,
  total: number,
  z = 1.96,
): { point: number; lower: number; upper: number; halfWidth: number } {
  if (total <= 0) {
    return { point: 0, lower: 0, upper: 0, halfWidth: 0 };
  }
  const n = total;
  const pHat = correct / n;
  const z2 = z * z;
  const denom = 1 + z2 / n;
  const center = (pHat + z2 / (2 * n)) / denom;
  const margin =
    (z * Math.sqrt((pHat * (1 - pHat) + z2 / (4 * n)) / n)) / denom;
  const lower = Math.max(0, center - margin);
  const upper = Math.min(1, center + margin);
  // Point estimate uses p̂, not the Wilson center, because that's what users
  // intuitively expect ("I got 42 out of 50, so 84%"). The CI is reported
  // alongside via halfWidth.
  return {
    point: pHat * 100,
    lower: lower * 100,
    upper: upper * 100,
    halfWidth: ((upper - lower) / 2) * 100,
  };
}

export interface TopicScore {
  topicId: TopicId;
  /** Distinct-question sample size after dedupe + last-50 cap. */
  n: number;
  /** Age-decay-weighted correct count. */
  correct: number;
  /** Age-decay-weighted total count. */
  total: number;
  /** Point estimate (percent), or null when n < MIN_N_PER_TOPIC. */
  point: number | null;
  /** Wilson CI half-width (percent), or null when insufficient. */
  halfWidth: number | null;
  /** true iff n ≥ MIN_N_PER_TOPIC and the topic may enter the rollup. */
  sufficient: boolean;
}

/**
 * Per-topic readiness score.
 *
 * Pipeline:
 *   1. Filter attempts to `topicId`.
 *   2. Dedupe retries within 7 days (keep most recent per questionId).
 *   3. Sort desc by timestamp.
 *   4. Take the last 50 **distinct** questions (one row per questionId, most
 *      recent wins — "last" in time, not in array order).
 *   5. Apply age-decay weight to both correct and total so decay reduces the
 *      effective sample size symmetrically.
 *   6. Gate on MIN_N_PER_TOPIC.
 */
export function computeTopicScore(
  attempts: Attempt[],
  topicId: TopicId,
  now: number = Date.now(),
): TopicScore {
  const forTopic = attempts.filter((a) => a.topicId === topicId);
  const deduped = dedupeAttempts(forTopic, 7 * 24 * 3600 * 1000, now);
  // Sort desc by timestamp.
  const sorted = deduped.slice().sort((a, b) => b.timestamp - a.timestamp);
  // Take last 50 distinct questions (desc order → first 50 unique questionIds).
  const seen = new Set<string>();
  const last50: Attempt[] = [];
  for (const a of sorted) {
    if (seen.has(a.questionId)) continue;
    seen.add(a.questionId);
    last50.push(a);
    if (last50.length >= 50) break;
  }

  const distinctN = last50.length;

  // Age-decay: weight contributes to numerator when correct AND denominator.
  let weightedCorrect = 0;
  let weightedTotal = 0;
  for (const a of last50) {
    const w = ageDecayWeight(a, now);
    weightedTotal += w;
    if (a.correct) weightedCorrect += w;
  }

  if (distinctN < MIN_N_PER_TOPIC) {
    return {
      topicId,
      n: distinctN,
      correct: weightedCorrect,
      total: weightedTotal,
      point: null,
      halfWidth: null,
      sufficient: false,
    };
  }

  // Wilson CI over RAW last-50 distinct counts — its half-width should
  // reflect sample-size uncertainty, not an age-decay artefact. Point
  // estimate stays age-decay-weighted so recent performance dominates.
  // (M1 review finding.)
  let rawCorrect = 0;
  for (const a of last50) if (a.correct) rawCorrect += 1;
  const wilson = wilsonInterval(rawCorrect, distinctN);
  const point = weightedTotal === 0 ? 0 : (weightedCorrect / weightedTotal) * 100;
  return {
    topicId,
    n: distinctN,
    correct: weightedCorrect,
    total: weightedTotal,
    point,
    halfWidth: wilson.halfWidth,
    sufficient: true,
  };
}

export interface ReadinessResult {
  perTopic: TopicScore[];
  /**
   * Weighted overall (percent) over only sufficient topics, with weights
   * renormalised among them. Null only when **no** topic is yet sufficient.
   */
  overall: number | null;
  /** True when every topic meets MIN_N_PER_TOPIC. */
  sufficient: boolean;
  /** Topic ids that contributed to `overall`. Empty when overall is null. */
  contributingTopics: TopicId[];
}

/**
 * Full readiness rollup for all four NASAA topics.
 *
 * Per the plan: insufficient topics are reported but excluded from the
 * weighted rollup. We renormalise the NASAA weights among contributing
 * (sufficient) topics so the headline number is meaningful as soon as any
 * topic crosses MIN_N, instead of staying null until all four do.
 *
 * `sufficient` remains `true` only when every topic crosses MIN_N.
 */
export function computeReadiness(
  attempts: Attempt[],
  now: number = Date.now(),
): ReadinessResult {
  const topics: TopicId[] = ["1", "2", "3", "4"];
  const perTopic = topics.map((t) => computeTopicScore(attempts, t, now));
  const sufficient = perTopic.filter((t) => t.sufficient);
  const allSufficient = sufficient.length === perTopic.length;
  if (sufficient.length === 0) {
    return {
      perTopic,
      overall: null,
      sufficient: false,
      contributingTopics: [],
    };
  }
  const weightSum = sufficient.reduce(
    (acc, t) => acc + NASAA_WEIGHTS[t.topicId],
    0,
  );
  let overall = 0;
  for (const t of sufficient) {
    overall += (t.point ?? 0) * (NASAA_WEIGHTS[t.topicId] / weightSum);
  }
  return {
    perTopic,
    overall,
    sufficient: allSufficient,
    contributingTopics: sufficient.map((t) => t.topicId),
  };
}

/**
 * "Study next" recommendation.
 *
 *  - If at least one topic is sufficient (n ≥ MIN_N): return the one with the
 *    lowest point estimate (ties broken by topic id asc).
 *  - If none sufficient: return the topic with the fewest attempts so far
 *    (ties broken by topic id asc). Falls back to topic "1" when the score
 *    is empty (perTopic empty) — this never happens via computeReadiness,
 *    which always returns four entries, but is defensive for direct callers.
 */
export function studyNextTopic(score: ReadinessResult): TopicId {
  if (score.perTopic.length === 0) return "1";
  const sufficient = score.perTopic.filter((t) => t.sufficient);
  // Partial-rollup carve-out: if we already cleared one topic past BUFFER
  // but other topics have ZERO attempts, recommend the untouched one
  // instead of telling the user to keep drilling what they've mastered.
  // (Review W9.)
  if (sufficient.length > 0 && sufficient.length < score.perTopic.length) {
    const anyMastered = sufficient.some((t) => (t.point ?? 0) >= BUFFER);
    if (anyMastered) {
      const untouched = score.perTopic.filter(
        (t) => !t.sufficient && t.n === 0,
      );
      if (untouched.length > 0) {
        return untouched.sort((a, b) => a.topicId.localeCompare(b.topicId))[0]
          .topicId;
      }
    }
  }
  if (sufficient.length > 0) {
    let best = sufficient[0];
    for (const t of sufficient) {
      // Point cannot be null when sufficient=true, but guard anyway.
      const bestPoint = best.point ?? Infinity;
      const curPoint = t.point ?? Infinity;
      if (curPoint < bestPoint) best = t;
      else if (curPoint === bestPoint && t.topicId < best.topicId) best = t;
    }
    return best.topicId;
  }
  // None sufficient — pick the topic with the fewest attempts.
  let fewest = score.perTopic[0];
  for (const t of score.perTopic) {
    if (t.n < fewest.n) fewest = t;
    else if (t.n === fewest.n && t.topicId < fewest.topicId) fewest = t;
  }
  return fewest.topicId;
}
