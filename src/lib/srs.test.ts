import { describe, it, expect } from "vitest";
import { Rating } from "ts-fsrs";
import { mapGradeToFsrs, newCardState, review } from "./srs";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

describe("newCardState", () => {
  it("initializes a fresh card in state 0 (New) with due=now", () => {
    const now = 1_700_000_000_000;
    const s = newCardState("card-abc", now);
    expect(s.cardId).toBe("card-abc");
    expect(s.state).toBe(0);
    expect(s.stability).toBe(0);
    expect(s.difficulty).toBe(0);
    expect(s.reps).toBe(0);
    expect(s.lapses).toBe(0);
    expect(s.elapsedDays).toBe(0);
    expect(s.scheduledDays).toBe(0);
    expect(s.lastReview).toBe(0);
    expect(s.due).toBe(now);
  });

  it("defaults `now` to Date.now() when omitted", () => {
    const before = Date.now();
    const s = newCardState("card-xyz");
    const after = Date.now();
    expect(s.due).toBeGreaterThanOrEqual(before);
    expect(s.due).toBeLessThanOrEqual(after);
  });
});

describe("mapGradeToFsrs", () => {
  it("maps 1/2/3/4 → Again/Hard/Good/Easy", () => {
    expect(mapGradeToFsrs(1)).toBe(Rating.Again);
    expect(mapGradeToFsrs(2)).toBe(Rating.Hard);
    expect(mapGradeToFsrs(3)).toBe(Rating.Good);
    expect(mapGradeToFsrs(4)).toBe(Rating.Easy);
  });
});

describe("review", () => {
  const now = 1_700_000_000_000;

  it("review advances lastReview, grows reps, and never schedules in the past", () => {
    const primed = review(review(newCardState("c1", now), 3, { now }), 3, {
      now,
    });
    const again = review(primed, 1, { now });
    const good = review(primed, 3, { now });
    const easy = review(primed, 4, { now });
    // Easy schedules at least as far out as Good (monotonic on grade).
    expect(easy.scheduledDays).toBeGreaterThanOrEqual(good.scheduledDays);
    // Reps increments on every graded review (including Again, which is
    // still a graded attempt even though it resets progress).
    for (const r of [again, good, easy]) {
      expect(r.reps).toBeGreaterThan(primed.reps);
      expect(r.lastReview).toBe(now);
      expect(r.due).toBeGreaterThanOrEqual(now);
    }
  });

  it("Again resets or lowers stability relative to Good on a reviewed card", () => {
    // Prime a reviewed card so Again has a meaningful stability to lower.
    const seeded = review(newCardState("c1", now), 3, { now });
    const laterNow = now + 3 * MS_PER_DAY;
    const afterGood = review(seeded, 3, { now: laterNow });
    const afterAgain = review(seeded, 1, { now: laterNow });
    expect(afterAgain.stability).toBeLessThan(afterGood.stability);
    expect(afterAgain.lapses).toBeGreaterThanOrEqual(seeded.lapses);
  });

  it("Easy schedules a longer interval than Good on a fresh card", () => {
    const fresh = newCardState("c1", now);
    const good = review(fresh, 3, { now });
    const easy = review(fresh, 4, { now });
    expect(easy.scheduledDays).toBeGreaterThanOrEqual(good.scheduledDays);
    expect(easy.due).toBeGreaterThanOrEqual(good.due);
    // At least one of them must show the Easy-vs-Good interval gap.
    expect(easy.scheduledDays + easy.due).toBeGreaterThan(
      good.scheduledDays + good.due,
    );
  });

  it("is deterministic: same state + same grade + same now yields identical output", () => {
    const fresh = newCardState("c1", now);
    const a = review(fresh, 3, { now });
    const b = review(fresh, 3, { now });
    expect(a).toEqual(b);
  });

  it("cram mode caps scheduledDays at 7 and due at now + 7 days", () => {
    // Build a state that would naturally schedule well past 7 days: seed a
    // high-stability reviewed card and hit it with Easy.
    let s = newCardState("c1", now);
    // Several Good reviews to build up stability.
    let t = now;
    for (let i = 0; i < 5; i++) {
      t = t + Math.max(1, s.scheduledDays) * MS_PER_DAY;
      s = review(s, 3, { now: t });
    }
    const easyNoCram = review(s, 4, { now: t });
    const easyCram = review(s, 4, { now: t, cramMode: true });

    // Sanity: the uncapped interval should exceed the cram ceiling; otherwise
    // this test has nothing to verify.
    expect(easyNoCram.scheduledDays).toBeGreaterThan(7);
    expect(easyCram.scheduledDays).toBeLessThanOrEqual(7);
    expect(easyCram.due).toBeLessThanOrEqual(t + 7 * MS_PER_DAY);
  });

  it("cram mode is a no-op when the natural interval is already ≤ 7 days", () => {
    const fresh = newCardState("c1", now);
    const plain = review(fresh, 1, { now }); // Again → very short interval
    const cram = review(fresh, 1, { now, cramMode: true });
    expect(cram.scheduledDays).toBe(plain.scheduledDays);
    expect(cram.due).toBe(plain.due);
  });

  it("respects a custom targetRetention", () => {
    // Higher retention target should yield a shorter or equal interval on Good
    // than a lower target on the same fresh card.
    const fresh = newCardState("c1", now);
    const tight = review(fresh, 3, { now, targetRetention: 0.95 });
    const loose = review(fresh, 3, { now, targetRetention: 0.8 });
    expect(tight.scheduledDays).toBeLessThanOrEqual(loose.scheduledDays);
  });

  it("preserves cardId across reviews", () => {
    const fresh = newCardState("card-preserved", now);
    const next = review(fresh, 3, { now });
    expect(next.cardId).toBe("card-preserved");
  });

  it("defaults now to Date.now() when omitted and still returns a valid state", () => {
    const fresh = newCardState("c1");
    const next = review(fresh, 3);
    expect(next.cardId).toBe("c1");
    expect(next.due).toBeGreaterThan(0);
    expect(next.lastReview).toBeGreaterThan(0);
  });
});
