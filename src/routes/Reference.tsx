import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { MarkdownRenderer } from "../components/shared/MarkdownRenderer";
import { EmptyState } from "../components/shared/EmptyState";
import { Citation } from "../components/shared/Citation";
import { formulas, type Formula } from "../content/reference/formulas";
import { glossary, type GlossaryEntry } from "../content/reference/glossary";

type Tab = "formulas" | "glossary";

const FUSE_OPTS_FORMULAS = {
  keys: ["name", "description", "tags"],
  threshold: 0.4,
  ignoreLocation: true,
} as const;

const FUSE_OPTS_GLOSSARY = {
  keys: ["term", "definition", "related"],
  threshold: 0.4,
  ignoreLocation: true,
} as const;

export default function Reference() {
  const [tab, setTab] = useState<Tab>("formulas");
  const [query, setQuery] = useState("");

  // Build Fuse indexes once per dataset. The two collections are small
  // (< 100 entries) so rebuilding on tab switch would be fine, but memoizing
  // keeps first-keystroke latency predictable.
  const formulaFuse = useMemo(
    () => new Fuse(formulas, FUSE_OPTS_FORMULAS),
    [],
  );
  const glossaryFuse = useMemo(
    () => new Fuse(glossary, FUSE_OPTS_GLOSSARY),
    [],
  );

  const trimmedQuery = query.trim();

  const filteredFormulas: Formula[] = useMemo(() => {
    if (!trimmedQuery) return formulas;
    return formulaFuse.search(trimmedQuery).map((r) => r.item);
  }, [trimmedQuery, formulaFuse]);

  const filteredGlossary: GlossaryEntry[] = useMemo(() => {
    if (!trimmedQuery) return glossary;
    return glossaryFuse.search(trimmedQuery).map((r) => r.item);
  }, [trimmedQuery, glossaryFuse]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4">
      <h1 className="text-2xl font-semibold">Reference</h1>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search formulas and glossary..."
        aria-label="Search reference"
        className="min-h-[44px] w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text"
      />

      <div role="tablist" aria-label="Reference sections" className="flex gap-2">
        <TabButton
          selected={tab === "formulas"}
          onClick={() => setTab("formulas")}
          label={`Formulas (${filteredFormulas.length})`}
          controls="reference-formulas-panel"
        />
        <TabButton
          selected={tab === "glossary"}
          onClick={() => setTab("glossary")}
          label={`Glossary (${filteredGlossary.length})`}
          controls="reference-glossary-panel"
        />
      </div>

      {tab === "formulas" ? (
        <section
          id="reference-formulas-panel"
          role="tabpanel"
          aria-label="Formulas"
          className="flex flex-col gap-3"
        >
          {filteredFormulas.length === 0 ? (
            <EmptyState
              title="No formulas found"
              message={`No formulas match "${trimmedQuery}". Try a different search term.`}
            />
          ) : (
            filteredFormulas.map((f) => <FormulaCard key={f.id} formula={f} />)
          )}
        </section>
      ) : (
        <section
          id="reference-glossary-panel"
          role="tabpanel"
          aria-label="Glossary"
          className="flex flex-col gap-3"
        >
          {filteredGlossary.length === 0 ? (
            <EmptyState
              title="No terms found"
              message={`No glossary entries match "${trimmedQuery}". Try a different search term.`}
            />
          ) : (
            filteredGlossary.map((g) => (
              <GlossaryCard key={g.id} entry={g} />
            ))
          )}
        </section>
      )}
    </div>
  );
}

function TabButton({
  selected,
  onClick,
  label,
  controls,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  controls: string;
}) {
  const base =
    "min-h-[44px] flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition";
  const selectedClasses =
    "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500";
  const unselectedClasses =
    "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text dark:hover:bg-neutral-800";
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={controls}
      onClick={onClick}
      className={`${base} ${selected ? selectedClasses : unselectedClasses}`}
    >
      {label}
    </button>
  );
}

function FormulaCard({ formula }: { formula: Formula }) {
  // LaTeX is rendered via the shared MarkdownRenderer by wrapping in $$...$$
  // so KaTeX handles it as display-mode math. The raw `latex` field has no
  // dollar-sign wrappers (per content contract).
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-ink-surface">
      <header className="mb-2">
        <h2 className="text-lg font-semibold">{formula.name}</h2>
      </header>
      <div className="my-2 overflow-x-auto">
        <MarkdownRenderer>{`$$${formula.latex}$$`}</MarkdownRenderer>
      </div>
      <p className="my-2 text-sm text-neutral-700 dark:text-neutral-300">
        {formula.description}
      </p>
      {formula.variables.length > 0 ? (
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
          {formula.variables.map((v) => (
            <div key={v.symbol} className="contents">
              <dt className="font-mono text-neutral-600 dark:text-neutral-400">
                <MarkdownRenderer>{`$${v.symbol}$`}</MarkdownRenderer>
              </dt>
              <dd className="text-neutral-800 dark:text-neutral-200">
                {v.meaning}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
      {formula.tags && formula.tags.length > 0 ? (
        <div
          className="mt-3 flex flex-wrap gap-1"
          aria-label="Formula tags"
        >
          {formula.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
      {formula.citation ? (
        <div className="mt-3">
          <Citation citation={formula.citation} />
        </div>
      ) : null}
    </article>
  );
}

function GlossaryCard({ entry }: { entry: GlossaryEntry }) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-ink-surface">
      <header className="mb-1">
        <h2 className="text-lg font-semibold">{entry.term}</h2>
      </header>
      <p className="my-2 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
        {entry.definition}
      </p>
      {entry.related && entry.related.length > 0 ? (
        <div
          className="mt-2 flex flex-wrap gap-1"
          aria-label="Related terms"
        >
          {entry.related.map((r) => (
            <span
              key={r}
              className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-300"
            >
              {r}
            </span>
          ))}
        </div>
      ) : null}
      {entry.citation ? (
        <div className="mt-3">
          <Citation citation={entry.citation} />
        </div>
      ) : null}
    </article>
  );
}
