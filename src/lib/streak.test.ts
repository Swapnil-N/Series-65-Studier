import { describe, it, expect, beforeEach } from "vitest";
import type { DailyActivity } from "../types/state";
import {
  computeStreak,
  dateKey,
  dayQualifies,
  incrementActivity,
} from "./streak";
import { db } from "./db";

// Build a DailyActivity for a Date with configurable counts.
function activity(
  d: Date,
  counts: Partial<Omit<DailyActivity, "date">> = { cardsReviewed: 1 },
): DailyActivity {
  return {
    date: dateKey(d),
    cardsReviewed: counts.cardsReviewed ?? 0,
    questionsAnswered: counts.questionsAnswered ?? 0,
    lessonsCompleted: counts.lessonsCompleted ?? 0,
  };
}

function daysAgo(today: Date, n: number): Date {
  const d = new Date(today);
  d.setDate(d.getDate() - n);
  return d;
}

describe("dayQualifies", () => {
  it("returns true when any counter is ≥ 1", () => {
    const d = new Date(2026, 3, 21);
    expect(dayQualifies(activity(d, { cardsReviewed: 1 }))).toBe(true);
    expect(dayQualifies(activity(d, { questionsAnswered: 1 }))).toBe(true);
    expect(dayQualifies(activity(d, { lessonsCompleted: 1 }))).toBe(true);
  });

  it("returns false when all counters are 0", () => {
    const d = new Date(2026, 3, 21);
    expect(
      dayQualifies(
        activity(d, {
          cardsReviewed: 0,
          questionsAnswered: 0,
          lessonsCompleted: 0,
        }),
      ),
    ).toBe(false);
  });
});

describe("computeStreak", () => {
  const today = new Date(2026, 3, 21); // April 21 2026 (matches env currentDate)

  it("returns 0/0 for an empty activity list", () => {
    expect(computeStreak([], today)).toEqual({ current: 0, longest: 0 });
  });

  it("returns 1/1 for a single qualifying day today", () => {
    expect(computeStreak([activity(today)], today)).toEqual({
      current: 1,
      longest: 1,
    });
  });

  it("counts consecutive days ending today", () => {
    const a = [
      activity(today),
      activity(daysAgo(today, 1)),
      activity(daysAgo(today, 2)),
      activity(daysAgo(today, 3)),
      activity(daysAgo(today, 4)),
    ];
    expect(computeStreak(a, today)).toEqual({ current: 5, longest: 5 });
  });

  it("grants grace: yesterday-only streak still counts toward current", () => {
    // Today hasn't qualified yet (no row). Yesterday + day before both did.
    const a = [activity(daysAgo(today, 1)), activity(daysAgo(today, 2))];
    expect(computeStreak(a, today)).toEqual({ current: 2, longest: 2 });
  });

  it("resets current to 0 when yesterday and today are both missing", () => {
    // Gap of 2 days means neither today nor yesterday qualify.
    const a = [
      activity(daysAgo(today, 3)),
      activity(daysAgo(today, 4)),
      activity(daysAgo(today, 5)),
    ];
    const r = computeStreak(a, today);
    expect(r.current).toBe(0);
    // Longest reflects the historical 3-in-a-row run.
    expect(r.longest).toBe(3);
  });

  it("longest differs from current when history has a gap", () => {
    const a = [
      // Old 4-day streak (days 10..13 ago).
      activity(daysAgo(today, 10)),
      activity(daysAgo(today, 11)),
      activity(daysAgo(today, 12)),
      activity(daysAgo(today, 13)),
      // Gap.
      // Recent 2-day streak (today + yesterday).
      activity(daysAgo(today, 0)),
      activity(daysAgo(today, 1)),
    ];
    expect(computeStreak(a, today)).toEqual({ current: 2, longest: 4 });
  });

  it("ignores non-qualifying (zero-count) rows", () => {
    const a = [
      activity(today),
      activity(daysAgo(today, 1), {
        cardsReviewed: 0,
        questionsAnswered: 0,
        lessonsCompleted: 0,
      }),
      activity(daysAgo(today, 2)),
    ];
    // Yesterday row exists but does not qualify → breaks the streak.
    // Today qualifies → current = 1. Longest historical = 1.
    expect(computeStreak(a, today)).toEqual({ current: 1, longest: 1 });
  });
});

describe("incrementActivity", () => {
  beforeEach(async () => {
    await db.dailyActivity.clear();
  });

  it("creates a new row with the correct counter on first call", async () => {
    const d = new Date(2026, 3, 21);
    await incrementActivity("card", db, d);
    const row = await db.dailyActivity.get(dateKey(d));
    expect(row).toBeDefined();
    expect(row!.cardsReviewed).toBe(1);
    expect(row!.questionsAnswered).toBe(0);
    expect(row!.lessonsCompleted).toBe(0);
  });

  it("bumps the existing row for subsequent calls on the same day", async () => {
    const d = new Date(2026, 3, 21);
    await incrementActivity("question", db, d);
    await incrementActivity("question", db, d);
    await incrementActivity("lesson", db, d);
    const row = await db.dailyActivity.get(dateKey(d));
    expect(row!.questionsAnswered).toBe(2);
    expect(row!.lessonsCompleted).toBe(1);
    expect(row!.cardsReviewed).toBe(0);
  });
});
