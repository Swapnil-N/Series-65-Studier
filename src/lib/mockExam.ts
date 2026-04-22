import type { Question, TopicId } from "../types/content";
import type { MockExamSession } from "../types/state";
import type { Series65DB } from "./db";

// NASAA weighting: 130 scored questions (real exam also has 10 pretest, we
// skip those). Sum is 130 exactly.
export const TOPIC_COUNTS: Readonly<Record<TopicId, number>> = {
  "1": 20,
  "2": 32,
  "3": 39,
  "4": 39,
} as const;

// 180 minutes, matching NASAA's scored-exam time allotment.
export const MOCK_DURATION_MS = 180 * 60 * 1000;

// Passing percentage (NASAA Series 65 is 72.5%).
export const PASS_THRESHOLD = 72.5;

/**
 * Derive a topic id from a subtopic id like "2.3" → "2". Defensive: returns
 * null for any string that doesn't start with a valid topic digit so the
 * caller can skip items from malformed content.
 */
function topicOf(subtopicId: string): TopicId | null {
  const head = subtopicId.split(".")[0];
  if (head === "1" || head === "2" || head === "3" || head === "4") return head;
  return null;
}

/**
 * Fisher-Yates shuffle using an injected RNG, which lets tests pin a seed.
 * Non-mutating — returns a new array.
 */
function shuffleWith<T>(arr: T[], rng: () => number): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Compose a 130-question mock exam from the provided pool.
 *
 * Rules:
 *   - Only questions with `reviewed: true` are eligible for the primary draw.
 *   - Within each topic we first try to draw `TOPIC_COUNTS[topic]` items while
 *     avoiding `excludedIds`. If that bucket is short we fall back to the
 *     non-excluded (but still reviewed) pool. If still short we throw — the
 *     caller must gate on pool size before calling this.
 *   - Questions are unique across the whole exam.
 *   - The returned order is a single shuffled list (topics interleaved) so the
 *     test feels like the real exam rather than a topic-by-topic drill.
 */
export function composeExam(
  questions: Question[],
  excludedIds: Set<string>,
  rng: () => number = Math.random,
): string[] {
  const reviewed = questions.filter((q) => q.reviewed);

  // Bucket by topic up front to avoid O(topics * N) filtering.
  const buckets = new Map<TopicId, Question[]>();
  for (const q of reviewed) {
    const t = topicOf(q.subtopicId);
    if (!t) continue;
    const bucket = buckets.get(t) ?? [];
    bucket.push(q);
    buckets.set(t, bucket);
  }

  const used = new Set<string>();
  const picked: Question[] = [];

  const topics: TopicId[] = ["1", "2", "3", "4"];
  for (const topic of topics) {
    const need = TOPIC_COUNTS[topic];
    const bucket = buckets.get(topic) ?? [];

    const preferred = bucket.filter(
      (q) => !excludedIds.has(q.id) && !used.has(q.id),
    );
    const shuffledPreferred = shuffleWith(preferred, rng);
    const take: Question[] = [];
    for (const q of shuffledPreferred) {
      if (take.length >= need) break;
      take.push(q);
      used.add(q.id);
    }

    if (take.length < need) {
      // Fallback: relax the excluded filter but keep the reviewed+topic+unused
      // invariants so we never double-pick inside one exam.
      const fallback = bucket.filter(
        (q) => !used.has(q.id),
      );
      const shuffledFallback = shuffleWith(fallback, rng);
      for (const q of shuffledFallback) {
        if (take.length >= need) break;
        take.push(q);
        used.add(q.id);
      }
    }

    if (take.length < need) {
      throw new Error(`insufficient reviewed questions for topic ${topic}`);
    }

    picked.push(...take);
  }

  // Interleave topics by shuffling the assembled list. Order no longer matters
  // for scoring (we re-derive topic per questionId) and a shuffled feel better
  // mirrors the real exam.
  return shuffleWith(picked, rng).map((q) => q.id);
}

/**
 * Union of questionIds used across the most recent `lastK` mock sessions that
 * either completed (`status: "completed"`) or were merely started (active).
 * Abandoned sessions are intentionally excluded — the user bailed so we don't
 * penalize their next attempt by locking out that bucket.
 *
 * Dexie doesn't accept "!= abandoned" in a compound index query cleanly, so
 * we pull recent sessions by startedAt and filter in memory.
 */
export async function getExcludedIds(
  database: Pick<Series65DB, "mockSessions">,
  lastK = 3,
): Promise<Set<string>> {
  const all = await database.mockSessions.toArray();
  const eligible = all
    .filter((s) => s.status !== "abandoned")
    .sort((a, b) => b.startedAt - a.startedAt)
    .slice(0, lastK);

  const out = new Set<string>();
  for (const s of eligible) {
    for (const id of s.questionIds) out.add(id);
  }
  return out;
}

/**
 * Remaining milliseconds on the 180-minute timer.
 *
 * Source of truth is the wall clock + the stored `startedAt` and `pausedMs`
 * offsets on the session, NOT a JS counter. This means a tab that was
 * backgrounded or suspended resumes with the correct value regardless of
 * how many setInterval ticks actually fired.
 *
 * Clamped to >= 0; the caller is responsible for auto-submitting at zero.
 */
export function computeRemainingMs(
  session: Pick<MockExamSession, "startedAt" | "pausedMs">,
  now: number = Date.now(),
): number {
  const elapsed = now - session.startedAt - session.pausedMs;
  return Math.max(0, MOCK_DURATION_MS - elapsed);
}

export interface TopicScore {
  correct: number;
  total: number;
  pct: number;
}

export interface MockScore {
  overallPct: number;
  perTopic: Record<TopicId, TopicScore>;
  pass: boolean;
}

/**
 * Score a session against the original Question bank. Unanswered slots count
 * as wrong. Percentages are rounded to one decimal so the pass/fail boundary
 * (72.5%) is representable exactly.
 */
export function scoreMock(
  session: Pick<MockExamSession, "questionIds" | "answers">,
  questions: Question[],
): MockScore {
  const byId = new Map<string, Question>();
  for (const q of questions) byId.set(q.id, q);

  const perTopic: Record<TopicId, TopicScore> = {
    "1": { correct: 0, total: 0, pct: 0 },
    "2": { correct: 0, total: 0, pct: 0 },
    "3": { correct: 0, total: 0, pct: 0 },
    "4": { correct: 0, total: 0, pct: 0 },
  };
  let overallCorrect = 0;
  let overallTotal = 0;

  for (let i = 0; i < session.questionIds.length; i++) {
    const q = byId.get(session.questionIds[i]);
    if (!q) continue; // Question removed from corpus between start and scoring.
    const topic = topicOf(q.subtopicId);
    if (!topic) continue;
    const entry = perTopic[topic];
    entry.total += 1;
    overallTotal += 1;
    if (session.answers[i] === q.answerIndex) {
      entry.correct += 1;
      overallCorrect += 1;
    }
  }

  for (const t of ["1", "2", "3", "4"] as TopicId[]) {
    const { correct, total } = perTopic[t];
    perTopic[t].pct = total === 0 ? 0 : round1((correct / total) * 100);
  }

  const overallPct = overallTotal === 0
    ? 0
    : round1((overallCorrect / overallTotal) * 100);

  return {
    overallPct,
    perTopic,
    pass: overallPct >= PASS_THRESHOLD,
  };
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

function dateKeyOf(now: number): string {
  const d = new Date(now);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * On mock-exam completion, persist downstream state in a single transaction:
 *   - mockSessions row marked "completed"
 *   - one Attempt per answered question (mode "mock", carrying mockId)
 *   - missedQueue upsert for every wrong answer
 *   - dailyActivity.questionsAnswered incremented for today by answered count
 *
 * Skipped questions (answer === null) and unknown question IDs are ignored.
 */
export async function persistMockCompletion(
  session: MockExamSession,
  questions: Question[],
  database: Pick<
    Series65DB,
    "mockSessions" | "attempts" | "missedQueue" | "dailyActivity"
  > & { transaction: Series65DB["transaction"] },
  now: number = Date.now(),
): Promise<{
  attemptsWritten: number;
  missedAdded: number;
  questionsAnswered: number;
}> {
  const byId = new Map(questions.map((q) => [q.id, q]));
  const dateKey = dateKeyOf(now);
  const attemptRows: import("../types/state").Attempt[] = [];
  const missedIds = new Set<string>();
  let answeredCount = 0;
  for (let i = 0; i < session.questionIds.length; i++) {
    const ans = session.answers[i];
    if (ans === null) continue;
    const q = byId.get(session.questionIds[i]);
    if (!q) continue;
    const t = topicOf(q.subtopicId);
    if (!t) continue;
    answeredCount += 1;
    const correct = ans === q.answerIndex;
    attemptRows.push({
      questionId: q.id,
      subtopicId: q.subtopicId,
      topicId: t,
      correct,
      mode: "mock",
      mockId: session.id,
      timestamp: now,
    });
    if (!correct) missedIds.add(q.id);
  }
  await database.transaction(
    "rw",
    database.mockSessions,
    database.attempts,
    database.missedQueue,
    database.dailyActivity,
    async () => {
      await database.mockSessions.put({ ...session, status: "completed" });
      if (attemptRows.length) await database.attempts.bulkAdd(attemptRows);
      for (const id of missedIds) {
        const q = byId.get(id);
        if (!q) continue;
        const t = topicOf(q.subtopicId);
        if (!t) continue;
        await database.missedQueue.put({
          questionId: id,
          topicId: t,
          addedAt: now,
        });
      }
      if (answeredCount > 0) {
        const existing = await database.dailyActivity.get(dateKey);
        await database.dailyActivity.put({
          date: dateKey,
          cardsReviewed: existing?.cardsReviewed ?? 0,
          questionsAnswered:
            (existing?.questionsAnswered ?? 0) + answeredCount,
          lessonsCompleted: existing?.lessonsCompleted ?? 0,
        });
      }
    },
  );
  return {
    attemptsWritten: attemptRows.length,
    missedAdded: missedIds.size,
    questionsAnswered: answeredCount,
  };
}
