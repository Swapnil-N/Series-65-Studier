# scripts/ — Content pipeline (Agent A3)

This directory owns the **one-shot** content generation for the Series 65
Studier PWA. Everything that lives here is build-time tooling; nothing under
`scripts/**` ships in the app bundle.

## Files

- `generate-content.ts` — the CLI (`--dry-run`, `--validate`, real run).
- `prompts/{lesson,cards,questions}.ts` — renders the per-subtopic prompts.
- `nasaa-outline.md` — authoritative outline. `##` = topic, `###` = subtopic.
- `citation-allowlist.json` — enumerates valid `source` + `ref` strings.
- `fixtures/` — tiny inputs used by `generate-content.test.ts`.

## Prerequisites

- Node 20+.
- `tsx` runner: already available via `npx tsx` (devDep cached in
  `node_modules/.bin` once any command invokes it).
- `zod` (already a dependency).
- **Only required for a real run:** `npm install --save-dev @anthropic-ai/sdk`.
  We intentionally do NOT list this dep yet — Phase 1.5 ships dry-run and
  validation only.

## Env vars

Copy `.env.example` to `.env` and fill in:

```
ANTHROPIC_API_KEY=...   # required for real runs only
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

### Real run (not enabled until the SDK is installed)

```
ANTHROPIC_API_KEY=sk-... npx tsx scripts/generate-content.ts --subtopic 1.1
```

Today this path prints an "install `@anthropic-ai/sdk`" message and exits 0.
When wired up it will:

- Stream Opus 4.7 requests per subtopic.
- Validate each response with Zod + allowlist, retry parse failures up to 2×.
- Dedupe cards / questions across subtopics by stable hashed IDs
  (`src/lib/ids.ts`).
- Track spend; abort before crossing `--spend-ceiling` /
  `SPEND_CEILING_USD`.
- Write outputs under **`scripts/out/`** along with a `manifest.json`
  recording the ID for every item. **Do not** write under `src/content/`
  directly — A2 owns that path and runs the aggregator.

### ID stability + manifest

Content IDs are stable 12-char SHA-1 hashes of `subtopicId + normalizedText`
(see `src/lib/ids.ts`). A `manifest.json` is written alongside each run so
that re-runs with `--force` preserve IDs wherever the normalized text still
matches. This is what lets in-app user edits survive a regeneration.
