// Prompt renderer for the CARDS generation call.
//
// Returns a plain string to send as the user turn. The caller assembles the
// system prompt and the (cache-controlled) NASAA outline block separately.

import type { SubtopicPromptInput } from "./lesson.ts";

export const CARDS_JSON_SHAPE = `[
  {
    "front": "<concise prompt, question, or cue — 1 sentence or short phrase>",
    "back": "<concise, self-contained answer — 1–3 sentences>",
    "citation": { "source": "NASAA|SEC|IA_ACT|NASAA_MODEL_RULE", "ref": "<exact allowlist value>" },
    "reviewed": false
  }
]`;

export const CARDS_COUNT_MIN = 20;
export const CARDS_COUNT_MAX = 30;

export function renderCardsPrompt(input: SubtopicPromptInput): string {
  const { id, title, outlineText } = input;
  return [
    `Generate a FLASHCARD DECK for NASAA Series 65 subtopic ${id} — "${title}".`,
    ``,
    `Source outline block (authoritative scope):`,
    `"""`,
    outlineText.trim(),
    `"""`,
    ``,
    `Requirements:`,
    `- Produce between ${CARDS_COUNT_MIN} and ${CARDS_COUNT_MAX} cards. Aim for full topical coverage, not trivia.`,
    `- Each card's 'front' is a single question, prompt, or cue; 'back' is the answer in 1–3 sentences (no preamble).`,
    `- Each card carries a 'citation' with 'source' ∈ {"NASAA", "SEC", "IA_ACT", "NASAA_MODEL_RULE"} and 'ref' equal to an exact allowlist entry. Do not invent citations.`,
    `- Cards must be independent: a reader should be able to answer without having seen the other cards in the deck.`,
    `- Cover definitions, distinctions (e.g., X vs Y), numeric/threshold facts, and one-step calculations where relevant.`,
    `- Never include the answer in the question (no "what is X, which means…" giveaways).`,
    `- Do not duplicate 'front' text within the deck (normalized comparison: lowercased, punctuation-stripped).`,
    `- Omit 'id' and 'subtopicId' — the generator assigns them from stable hashes of the normalized front.`,
    `- Set reviewed=false on every card.`,
    ``,
    `Return a single JSON array (no surrounding prose, no code fences) matching this shape:`,
    CARDS_JSON_SHAPE,
  ].join("\n");
}
