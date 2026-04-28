# scripts/ — Content pipeline

This directory owns the **one-shot** content generation for the Series 65
Studier PWA. Everything that lives here is build-time tooling; nothing under
`scripts/**` ships in the app bundle.

## Files

- `generate-content.ts` — the generator CLI (dry-run, validate, real run).
- `promote-content.ts` — moves `scripts/out/*` into `src/content/` and
  regenerates the aggregator.
- `prompts/{lesson,cards,questions}.ts` — renders the per-subtopic prompts.
- `nasaa-outline.md` — authoritative outline (auto-derived from the
  `Series-65-Outline.pdf` source). `##` = topic, `###` = subtopic.
- `citation-allowlist.json` — 210 valid `source` + `ref` strings the
  generator may emit; everything else is dropped.
- `Series-65-Outline.pdf` — official NASAA source (eff. June 12, 2023).
- `fixtures/` — tiny inputs used by `generate-content.test.ts`.

## Prerequisites

- Node 20+.
- `npm install` (pulls in `@anthropic-ai/sdk`, `dotenv`, `tsx`, `zod`).

## Env vars

Copy `.env.example` to `.env` and fill in:

```
ANTHROPIC_API_KEY=...   # required for real runs
SPEND_CEILING_USD=200   # hard stop; configurable via --spend-ceiling too
```

## Commands

### Dry run (render prompts, no network)

```
npx tsx scripts/generate-content.ts --dry-run --subtopic 1.1
```

Prints the lesson / cards / questions prompts plus the expected JSON shape
for each. Use this before a real run to sanity-check that the outline entry
for `--subtopic` is complete and the prompts look right.

### Validate an already-generated JSON file

```
npx tsx scripts/generate-content.ts --validate path/to/cards.json
```

Runs the Zod schema plus the citation allowlist. Exit 0 = clean, exit 1 =
invalid (with a Zod error message or citation mismatch list on stderr).
Works for cards arrays, question arrays, and single lesson objects — the
shape is auto-detected.

### Real run

```
# One subtopic
ANTHROPIC_API_KEY=sk-... npx tsx scripts/generate-content.ts --subtopic 1.1

# All 37 subtopics (use after the one-subtopic test passes)
ANTHROPIC_API_KEY=sk-... npx tsx scripts/generate-content.ts
```

The generator:

- Calls Opus 4.7 with prompt caching on the system prompt + outline block.
- Validates each response with Zod + allowlist, retries parse failures up
  to 2× and validation failures once.
- Dedupes cards / questions per subtopic by stable hashed IDs
  (`src/lib/ids.ts`).
- Tracks spend; aborts before crossing `--spend-ceiling` /
  `SPEND_CEILING_USD`.
- Hard-stops if any subtopic's citation mismatch rate exceeds 10% — fix
  the allowlist or refine the prompt and re-run that subtopic with
  `--force --subtopic <id>`.
- Writes outputs under **`scripts/out/<topic-slug>/<subtopic-id>-<slug>/`**:
  `lesson.ts`, `cards.ts`, `questions.ts`, `manifest.json`.
- Skips already-generated subtopics unless `--force`.

### Promotion: scripts/out → src/content

```
npx tsx scripts/promote-content.ts            # do it
npx tsx scripts/promote-content.ts --dry-run  # preview what'd happen
```

Moves every generated subtopic dir into `src/content/`, regenerates
`src/content/index.ts` so the app's `loadContent()` picks them up, and
deletes the dev stub at `src/content/sample/` (use `--keep-stub` to
override). Run `npm test && npm run build` after to confirm.

### ID stability + manifest

Content IDs are stable 12-char SHA-1 hashes prefixed with `c|` for cards
and `q|` for questions over `subtopicId + normalizeText(text)` (see
`src/lib/ids.ts`). A `manifest.json` is written alongside each generated
subtopic so re-runs with `--force` preserve IDs wherever the normalized
text still matches. This is what lets in-app user edits survive a
regeneration.
