// Content types — ships in the bundle and is mirrored into Dexie at boot.
// These are the normative contract; do not add fields without updating the plan.

export type TopicId = "1" | "2" | "3" | "4";
export type SubtopicId = string;

export type CitationSource =
  | "NASAA"
  | "SEC"
  | "IA_ACT"
  | "NASAA_MODEL_RULE";

export type Citation = { source: CitationSource; ref: string };

export interface Lesson {
  subtopicId: SubtopicId;
  title: string;
  bodyMd: string;
  citations: Citation[];
  reviewed: boolean;
}

export interface Card {
  id: string;
  subtopicId: SubtopicId;
  front: string;
  back: string;
  citation: Citation;
  reviewed: boolean;
}

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  subtopicId: SubtopicId;
  stem: string;
  choices: [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  rationale: string;
  citation: Citation;
  difficulty: Difficulty;
  reviewed: boolean;
}

export type ContentItem = Lesson | Card | Question;

// Narrow via the fields each type uniquely has; Lesson has bodyMd, Card has
// front+back, Question has stem+choices.
export function isLesson(item: ContentItem): item is Lesson {
  return (item as Lesson).bodyMd !== undefined;
}

export function isCard(item: ContentItem): item is Card {
  return (
    (item as Card).front !== undefined && (item as Card).back !== undefined
  );
}

export function isQuestion(item: ContentItem): item is Question {
  return (
    (item as Question).stem !== undefined &&
    Array.isArray((item as Question).choices)
  );
}
