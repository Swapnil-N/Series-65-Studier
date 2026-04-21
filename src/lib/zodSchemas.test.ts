import { describe, expect, it } from "vitest";
import {
  CardSchema,
  CardsArraySchema,
  CitationSchema,
  LessonSchema,
  QuestionSchema,
  QuestionsArraySchema,
} from "./zodSchemas";

const validCitation = { source: "NASAA", ref: "Section 1.A" };

const validLesson = {
  subtopicId: "1.1",
  title: "Business Cycles",
  bodyMd: "body",
  citations: [validCitation],
  reviewed: false,
};

const validCard = {
  id: "aaaaaaaaaaaa",
  subtopicId: "1.1",
  front: "Q",
  back: "A",
  citation: validCitation,
  reviewed: false,
};

const validQuestion = {
  id: "cccccccccccc",
  subtopicId: "1.1",
  stem: "stem",
  choices: ["a", "b", "c", "d"],
  answerIndex: 1,
  rationale: "because",
  citation: validCitation,
  difficulty: "easy",
  reviewed: false,
};

describe("CitationSchema", () => {
  it("round-trips a valid citation", () => {
    expect(CitationSchema.parse(validCitation)).toEqual(validCitation);
  });

  it("rejects a bad source enum value", () => {
    expect(
      CitationSchema.safeParse({ source: "FINRA", ref: "x" }).success,
    ).toBe(false);
  });

  it("rejects missing ref", () => {
    expect(CitationSchema.safeParse({ source: "NASAA" }).success).toBe(false);
  });
});

describe("LessonSchema", () => {
  it("round-trips a valid lesson", () => {
    expect(LessonSchema.parse(validLesson)).toEqual(validLesson);
  });

  it("rejects a lesson missing bodyMd", () => {
    const bad = { ...validLesson } as Record<string, unknown>;
    delete bad.bodyMd;
    expect(LessonSchema.safeParse(bad).success).toBe(false);
  });
});

describe("CardSchema", () => {
  it("round-trips a valid card", () => {
    expect(CardSchema.parse(validCard)).toEqual(validCard);
  });

  it("rejects a card missing front", () => {
    const bad = { ...validCard } as Record<string, unknown>;
    delete bad.front;
    expect(CardSchema.safeParse(bad).success).toBe(false);
  });

  it("rejects a card with wrong citation source", () => {
    const bad = { ...validCard, citation: { source: "UNKNOWN", ref: "x" } };
    expect(CardSchema.safeParse(bad).success).toBe(false);
  });
});

describe("QuestionSchema", () => {
  it("round-trips a valid question", () => {
    expect(QuestionSchema.parse(validQuestion)).toEqual(validQuestion);
  });

  it("rejects a question with 3 choices instead of 4", () => {
    const bad = { ...validQuestion, choices: ["a", "b", "c"] };
    expect(QuestionSchema.safeParse(bad).success).toBe(false);
  });

  it("rejects answerIndex out of range", () => {
    const bad = { ...validQuestion, answerIndex: 4 };
    expect(QuestionSchema.safeParse(bad).success).toBe(false);
  });

  it("rejects an invalid difficulty enum", () => {
    const bad = { ...validQuestion, difficulty: "impossible" };
    expect(QuestionSchema.safeParse(bad).success).toBe(false);
  });
});

describe("array schemas", () => {
  it("CardsArraySchema accepts an empty array", () => {
    expect(CardsArraySchema.parse([])).toEqual([]);
  });

  it("QuestionsArraySchema rejects if any element is bad", () => {
    expect(
      QuestionsArraySchema.safeParse([
        validQuestion,
        { ...validQuestion, answerIndex: 9 },
      ]).success,
    ).toBe(false);
  });
});
