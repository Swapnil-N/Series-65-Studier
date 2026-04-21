import { z } from "zod";

export const CitationSchema = z.object({
  source: z.enum(["NASAA", "SEC", "IA_ACT", "NASAA_MODEL_RULE"]),
  ref: z.string().min(1),
});

export const LessonSchema = z.object({
  subtopicId: z.string().min(1),
  title: z.string().min(1),
  bodyMd: z.string().min(1),
  citations: z.array(CitationSchema),
  reviewed: z.boolean(),
});

export const CardSchema = z.object({
  id: z.string().min(1),
  subtopicId: z.string().min(1),
  front: z.string().min(1),
  back: z.string().min(1),
  citation: CitationSchema,
  reviewed: z.boolean(),
});

export const DifficultySchema = z.enum(["easy", "medium", "hard"]);

export const QuestionSchema = z.object({
  id: z.string().min(1),
  subtopicId: z.string().min(1),
  stem: z.string().min(1),
  choices: z.tuple([z.string(), z.string(), z.string(), z.string()]),
  answerIndex: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
  ]),
  rationale: z.string().min(1),
  citation: CitationSchema,
  difficulty: DifficultySchema,
  reviewed: z.boolean(),
});

export const LessonsArraySchema = z.array(LessonSchema);
export const CardsArraySchema = z.array(CardSchema);
export const QuestionsArraySchema = z.array(QuestionSchema);
