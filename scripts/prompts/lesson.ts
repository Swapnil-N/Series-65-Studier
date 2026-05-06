// Prompt renderer for the LESSON generation call.
//
// Returns a plain string to send as the user turn. The caller assembles the
// system prompt and the (cache-controlled) NASAA outline block separately.

export interface SubtopicPromptInput {
  id: string; // e.g. "1.1"
  title: string; // "Business Cycles"
  outlineText: string; // the raw ### block contents (bullets etc.)
}

export const LESSON_JSON_SHAPE = `{
  "title": "<human title>",
  "bodyMd": "<1000-1500 words of GitHub-flavored markdown; include at least one worked example and any relevant formulas in KaTeX inline ($...$) or block ($$...$$) form>",
  "citations": [ { "source": "NASAA|SEC|IA_ACT|NASAA_MODEL_RULE|OTHER", "ref": "<exact allowlist value>" } ]
}`;

export function renderLessonPrompt(input: SubtopicPromptInput): string {
  const { id, title, outlineText } = input;
  return [
    `Generate a LESSON module for NASAA Series 65 subtopic ${id} — "${title}".`,
    ``,
    `Source outline block (authoritative scope):`,
    `"""`,
    outlineText.trim(),
    `"""`,
    ``,
    `Requirements:`,
    `- Audience: an adult self-studying for the Series 65 with no prior finance background.`,
    `- Length: 1,000–1,500 words of markdown in bodyMd.`,
    `- Structure: a short intro, two to four H3 section headings, a worked example, and a terse summary.`,
    `- Include formulas inline with KaTeX ($...$) or blocks ($$...$$) wherever numeric reasoning is taught.`,
    `- Every substantive claim must be traceable to a citation listed in the 'citations' array.`,
    `- Use 'citations[].source' ∈ {"NASAA", "SEC", "IA_ACT", "NASAA_MODEL_RULE", "OTHER"} and 'ref' = the exact allowlist entry.`,
    `- "OTHER" is the bucket for non-regulatory references — Federal Reserve, BLS, GAAP, PCAOB, SIPC, ratings agencies, IRS publications, etc. Use it when the natural authority isn't NASAA/SEC/IA-Act/Model-Rule.`,
    `- Do NOT invent citations. If uncertain, omit the claim.`,
    `- Output ONLY the three fields shown in the JSON shape (title/bodyMd/citations). Do NOT include 'subtopicId' or 'reviewed' — the generator assigns them after parsing.`,
    ``,
    `Return a single JSON object (no surrounding prose, no code fences) matching this shape:`,
    LESSON_JSON_SHAPE,
  ].join("\n");
}
