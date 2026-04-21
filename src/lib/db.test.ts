import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  DEFAULT_SETTINGS,
  Series65DB,
  db,
  getSettings,
  saveSettings,
} from "./db";

// Each test opens a fresh DB so assertions don't leak across tests.
async function resetDb(): Promise<void> {
  await db.delete();
  // Re-open by touching a table; Dexie lazily re-opens after delete.
  await db.open();
}

beforeEach(async () => {
  await resetDb();
});

afterEach(async () => {
  await db.close();
});

describe("Series65DB", () => {
  it("instantiates with the expected tables", () => {
    expect(db).toBeInstanceOf(Series65DB);
    const names = db.tables.map((t) => t.name).sort();
    expect(names).toEqual(
      [
        "attempts",
        "bookmarks",
        "cardState",
        "dailyActivity",
        "edits",
        "missedQueue",
        "mockSessions",
        "notes",
        "settings",
      ].sort(),
    );
  });

  it("round-trips a cardState row", async () => {
    await db.cardState.put({
      cardId: "aaaaaaaaaaaa",
      stability: 1,
      difficulty: 5,
      elapsedDays: 0,
      scheduledDays: 1,
      reps: 0,
      lapses: 0,
      state: 0,
      lastReview: 0,
      due: 0,
    });
    const row = await db.cardState.get("aaaaaaaaaaaa");
    expect(row?.stability).toBe(1);
  });

  it("round-trips an attempt and auto-increments id", async () => {
    const id = await db.attempts.add({
      questionId: "q1",
      subtopicId: "1.1",
      topicId: "1",
      correct: true,
      mode: "quiz",
      timestamp: 1,
    });
    const row = await db.attempts.get(id as number);
    expect(row?.questionId).toBe("q1");
  });

  it("round-trips missedQueue / bookmarks / notes / edits / dailyActivity / mockSessions", async () => {
    await db.missedQueue.put({
      questionId: "q1",
      topicId: "1",
      addedAt: 1,
    });
    await db.bookmarks.put({
      itemId: "c1",
      type: "card",
      createdAt: 1,
    });
    await db.notes.put({ itemId: "c1", body: "note", updatedAt: 1 });
    await db.edits.put({
      itemId: "c1",
      type: "card",
      patch: { front: "new" },
      updatedAt: 1,
    });
    await db.dailyActivity.put({
      date: "2026-04-21",
      cardsReviewed: 1,
      questionsAnswered: 2,
      lessonsCompleted: 0,
    });
    await db.mockSessions.put({
      id: "m1",
      startedAt: 1,
      pausedMs: 0,
      questionIds: ["q1"],
      answers: [null],
      currentIndex: 0,
      status: "active",
    });

    expect((await db.missedQueue.get("q1"))?.topicId).toBe("1");
    expect((await db.bookmarks.get("c1"))?.type).toBe("card");
    expect((await db.notes.get("c1"))?.body).toBe("note");
    expect((await db.edits.get("c1"))?.type).toBe("card");
    expect((await db.dailyActivity.get("2026-04-21"))?.cardsReviewed).toBe(1);
    expect((await db.mockSessions.get("m1"))?.status).toBe("active");
  });
});

describe("getSettings / saveSettings", () => {
  it("returns defaults when nothing is stored", async () => {
    const s = await getSettings();
    expect(s).toEqual(DEFAULT_SETTINGS);
    expect(s.newCardsPerDay).toBe(30);
    expect(s.targetRetention).toBe(0.9);
    expect(s.dailyGoalCards).toBe(20);
    expect(s.dailyGoalQuestions).toBe(10);
    expect(s.darkMode).toBe("auto");
    expect(s.highContrast).toBe(false);
    expect(s.fontScale).toBe(1);
    expect(s.cramMode).toBe(false);
    expect(s.lastExportAt).toBe(0);
  });

  it("round-trips after save", async () => {
    const next = {
      ...DEFAULT_SETTINGS,
      darkMode: "dark" as const,
      newCardsPerDay: 50,
      cramMode: true,
      lastExportAt: 1234,
    };
    await saveSettings(next);
    const loaded = await getSettings();
    expect(loaded).toEqual(next);
  });
});
