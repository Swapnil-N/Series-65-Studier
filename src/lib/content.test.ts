import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { db } from "./db";
import {
  getAllSubtopics,
  getCards,
  getLesson,
  getQuestions,
  loadContent,
  mirrorToDexie,
} from "./content";

beforeEach(async () => {
  await db.delete();
  await db.open();
});

afterEach(async () => {
  await db.close();
  vi.restoreAllMocks();
});

describe("loadContent", () => {
  it("returns the shipped content when no edits exist", async () => {
    const { lessons, cards, questions } = await loadContent();
    expect(lessons.length).toBeGreaterThan(0);
    expect(cards.length).toBeGreaterThan(0);
    expect(questions.length).toBeGreaterThan(0);
  });

  it("applies an edit to a shipped card by itemId", async () => {
    const { cards: before } = await loadContent();
    const target = before[0];
    await db.edits.put({
      itemId: target.id,
      type: "card",
      patch: { front: "EDITED FRONT" },
      updatedAt: Date.now(),
    });
    const { cards: after } = await loadContent();
    const edited = after.find((c) => c.id === target.id);
    expect(edited?.front).toBe("EDITED FRONT");
    // Other fields untouched
    expect(edited?.back).toBe(target.back);
  });

  it("applies a lesson edit keyed by subtopicId", async () => {
    const { lessons: before } = await loadContent();
    const target = before[0];
    await db.edits.put({
      itemId: target.subtopicId,
      type: "lesson",
      patch: { title: "EDITED TITLE" },
      updatedAt: Date.now(),
    });
    const { lessons: after } = await loadContent();
    expect(after.find((l) => l.subtopicId === target.subtopicId)?.title).toBe(
      "EDITED TITLE",
    );
  });

  it("ignores a stale edit whose itemId no longer exists, with a warn log", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    await db.edits.put({
      itemId: "does-not-exist",
      type: "card",
      patch: { front: "ghost" },
      updatedAt: Date.now(),
    });
    const result = await loadContent();
    expect(result.cards.find((c) => c.front === "ghost")).toBeUndefined();
    expect(warn).toHaveBeenCalled();
    const args = warn.mock.calls.map((c) => String(c[0])).join(" ");
    expect(args).toMatch(/stale edit/i);
  });
});

describe("accessors", () => {
  it("getLesson finds by subtopicId", () => {
    expect(getLesson("1.1")?.subtopicId).toBe("1.1");
    expect(getLesson("9.9")).toBeUndefined();
  });

  it("getCards / getQuestions filter by subtopicId", () => {
    expect(getCards("1.1").every((c) => c.subtopicId === "1.1")).toBe(true);
    expect(getQuestions("1.1").every((q) => q.subtopicId === "1.1")).toBe(
      true,
    );
    expect(getCards("9.9")).toEqual([]);
  });

  it("getAllSubtopics derives topicId from the leading number", () => {
    const subs = getAllSubtopics();
    expect(subs.length).toBeGreaterThan(0);
    for (const s of subs) {
      expect(s.topicId).toBe(s.subtopicId.split(".")[0]);
      expect(typeof s.title).toBe("string");
    }
  });
});

describe("mirrorToDexie", () => {
  it("resolves without throwing (no-op by design)", async () => {
    await expect(mirrorToDexie()).resolves.toBeUndefined();
  });
});
