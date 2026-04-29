import { z } from "zod";

export const CitationSchema = z.object({
  source: z.enum(["NASAA", "SEC", "IA_ACT", "NASAA_MODEL_RULE", "OTHER"]),
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
  // Each choice must be non-empty — empty strings render as blank radio
  // options in QuestionCard. (Review W10.)
  choices: z.tuple([
    z.string().min(1),
    z.string().min(1),
    z.string().min(1),
    z.string().min(1),
  ]),
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

// -----------------------------------------------------------------------------
// LLM-input schemas: relaxed copies used by `scripts/generate-content.ts` to
// validate model output BEFORE the script back-fills `id`, `subtopicId`, and
// `reviewed`. We use `.omit()` (not `.partial()`) so a model that returns an
// empty-string id doesn't trip the `.min(1)` constraint on the strict schema.
// Zod strips unknown keys by default, so any id/subtopicId/reviewed the model
// happens to include is silently dropped. The script then writes the
// canonical values, and the strict schema above is what the app's
// `loadContent()` validates against later.
// -----------------------------------------------------------------------------

export const LLMLessonSchema = LessonSchema.omit({
  subtopicId: true,
  reviewed: true,
});
export const LLMCardSchema = CardSchema.omit({
  id: true,
  subtopicId: true,
  reviewed: true,
});
export const LLMQuestionSchema = QuestionSchema.omit({
  id: true,
  subtopicId: true,
  reviewed: true,
});
export const LLMCardsArraySchema = z.array(LLMCardSchema);
export const LLMQuestionsArraySchema = z.array(LLMQuestionSchema);
