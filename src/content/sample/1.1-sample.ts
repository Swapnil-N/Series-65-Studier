// dev-only stub; real content replaces via generator. IDs are hardcoded
// 12-hex-char strings so module-eval stays synchronous (cardId/questionId
// are async).
import type { Card, Lesson, Question } from "../../types/content";

export const sampleLesson: Lesson = {
  subtopicId: "1.1",
  title: "Business Cycles",
  bodyMd:
    "The **business cycle** describes the recurring expansions and contractions in real economic activity. Phases: expansion, peak, contraction, trough. Leading indicators (e.g., building permits) tend to turn before the cycle; lagging indicators (e.g., unemployment rate) turn after.",
  citations: [{ source: "NASAA", ref: "Section 1.A" }],
  reviewed: false,
};

export const sampleCards: Card[] = [
  {
    id: "aaaaaaaaaaaa",
    subtopicId: "1.1",
    front: "Name the four phases of the business cycle.",
    back: "Expansion, peak, contraction, trough.",
    citation: { source: "NASAA", ref: "Section 1.A" },
    reviewed: false,
  },
  {
    id: "bbbbbbbbbbbb",
    subtopicId: "1.1",
    front: "Is the unemployment rate a leading or lagging indicator?",
    back: "Lagging — it turns after the overall cycle has already shifted.",
    citation: { source: "NASAA", ref: "Section 1.A" },
    reviewed: false,
  },
];

export const sampleQuestions: Question[] = [
  {
    id: "cccccccccccc",
    subtopicId: "1.1",
    stem: "Which phase of the business cycle immediately follows a peak?",
    choices: ["Expansion", "Contraction", "Trough", "Recovery"],
    answerIndex: 1,
    rationale:
      "After a peak, real activity declines; that decline is the contraction phase, which bottoms at the trough.",
    citation: { source: "NASAA", ref: "Section 1.A" },
    difficulty: "easy",
    reviewed: false,
  },
  {
    id: "dddddddddddd",
    subtopicId: "1.1",
    stem: "Building permits are generally classified as which type of economic indicator?",
    choices: ["Leading", "Coincident", "Lagging", "Random"],
    answerIndex: 0,
    rationale:
      "Building permits precede actual construction activity, making them a leading indicator of future economic output.",
    citation: { source: "NASAA", ref: "Section 1.A" },
    difficulty: "medium",
    reviewed: false,
  },
  {
    id: "eeeeeeeeeeee",
    subtopicId: "1.1",
    stem: "Which indicator is LEAST useful for predicting upcoming shifts in the business cycle?",
    choices: [
      "New orders for consumer goods",
      "Average weekly hours worked in manufacturing",
      "Unemployment rate",
      "Stock prices",
    ],
    answerIndex: 2,
    rationale:
      "The unemployment rate is a lagging indicator; it confirms prior shifts rather than predicting upcoming ones.",
    citation: { source: "NASAA", ref: "Section 1.A" },
    difficulty: "hard",
    reviewed: false,
  },
];
