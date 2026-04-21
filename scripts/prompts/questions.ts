// Prompt renderer for the QUESTIONS generation call.
//
// Returns a plain string to send as the user turn. The caller assembles the
// system prompt and the (cache-controlled) NASAA outline block separately.

import type { SubtopicPromptInput } from "./lesson.ts";

export const QUESTIONS_JSON_SHAPE = `[
  {
    "stem": "<the question itself, 1–3 sentences, ending in a question mark or a completion-blank>",
    "choices": ["<A>", "<B>", "<C>", "<D>"],
    "answerIndex": 0,
    "rationale": "<2–5 sentences explaining why the correct choice is right AND why the top distractor is wrong>",
    "citation": { "source": "NASAA|SEC|IA_ACT|NASAA_MODEL_RULE", "ref": "<exact allowlist value>" },
    "difficulty": "easy|medium|hard",
    "reviewed": false
  }
]`;

export const QUESTIONS_COUNT_MIN = 30;
export const QUESTIONS_COUNT_MAX = 50;

// Difficulty distribution targets (approximate; validator is tolerant).
export const DIFFICULTY_MIX = {
  easy: 0.3,
  medium: 0.5,
  hard: 0.2,
} as const;

export function renderQuestionsPrompt(input: SubtopicPromptInput): string {
  const { id, title, outlineText } = input;
  return [
    `Generate a MULTIPLE-CHOICE QUESTION BANK for NASAA Series 65 subtopic ${id} — "${title}".`,
    ``,
    `Source outline block (authoritative scope):`,
    `"""`,
    outlineText.trim(),
    `"""`,
    ``,
    `Requirements:`,
    `- Produce between ${QUESTIONS_COUNT_MIN} and ${QUESTIONS_COUNT_MAX} questions.`,
    `- Difficulty mix target: ~${Math.round(DIFFICULTY_MIX.easy * 100)}% easy, ~${Math.round(DIFFICULTY_MIX.medium * 100)}% medium, ~${Math.round(DIFFICULTY_MIX.hard * 100)}% hard. Mark each via the 'difficulty' field.`,
    `- Every question has exactly 4 choices. 'answerIndex' ∈ {0,1,2,3}.`,
    `- Distractors must be plausible and subject-relevant. Do not use "all of the above" / "none of the above".`,
    `- Rationale (2–5 sentences) must explain why the key is correct AND identify the top distractor and why it is wrong.`,
    `- Each question carries a 'citation' with 'source' ∈ {"NASAA", "SEC", "IA_ACT", "NASAA_MODEL_RULE"} and 'ref' equal to an exact allowlist entry. Do not invent citations.`,
    `- Avoid repetition: normalized 'stem' text must be unique within the batch.`,
    `- Omit 'id' and 'subtopicId' — the generator assigns them from stable hashes of the normalized stem.`,
    `- Set reviewed=false on every question.`,
    ``,
    `Return a single JSON array (no surrounding prose, no code fences) matching this shape:`,
    QUESTIONS_JSON_SHAPE,
  ].join("\n");
}
