import type { Citation as CitationType } from "../../types/content";

/**
 * Renders a tiny, non-intrusive cite line like `NASAA §1.A`, `SEC Rule 10b-5`,
 * `IA Act §203`, `NASAA MR 102(a)` based on the `source` enum.
 *
 * The full source name is exposed through `title` so a hover reveals context
 * for sighted users and it becomes the accessible name for screen readers.
 */
const SOURCE_LABEL: Record<CitationType["source"], string> = {
  NASAA: "NASAA",
  SEC: "SEC Rule",
  IA_ACT: "IA Act",
  NASAA_MODEL_RULE: "NASAA MR",
  // OTHER covers non-regulatory references the model cites (Federal
  // Reserve, BLS, GAAP, PCAOB, SIPC, etc.). Render with no prefix —
  // the `ref` text already names the source.
  OTHER: "",
};

const SOURCE_FULL_NAME: Record<CitationType["source"], string> = {
  NASAA: "NASAA Outline",
  SEC: "Securities and Exchange Commission Rule",
  IA_ACT: "Investment Advisers Act of 1940",
  NASAA_MODEL_RULE: "NASAA Model Rule",
  OTHER: "",
};

export function Citation({ citation }: { citation: CitationType }) {
  const label = SOURCE_LABEL[citation.source];
  const fullName = SOURCE_FULL_NAME[citation.source];
  // NASAA / NASAA Model Rule / IA Act citations are traditionally written with
  // a section symbol; SEC rule numbers and OTHER refs are rendered as-is.
  const prefix = citation.source === "SEC" || citation.source === "OTHER" ? "" : "§";
  const display = label ? `${label} ${prefix}${citation.ref}` : citation.ref;
  const title = fullName ? `${fullName} ${citation.ref}` : citation.ref;
  return (
    <span
      className="text-xs text-neutral-500 dark:text-neutral-400"
      title={title}
      aria-label={title}
    >
      {display}
    </span>
  );
}
