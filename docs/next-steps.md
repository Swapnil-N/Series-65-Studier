# Next steps

The real NASAA outline is in (`scripts/nasaa-outline.md`, 4 topics, 37 subtopics). Phase 5 is now executable. This doc tells you what's ready, what's left, and what I need from you.

## Status snapshot

- **Branch:** `claude/series-65-study-app-65Urn` (24+ commits, 201/201 tests, build green)
- **Plan:** `docs/IMPLEMENTATION_PLAN.md`
- **QA report:** `docs/qa-report.md`
- **Review history:** `docs/review-findings.md`, `docs/review-pass4/`, `docs/review-pass5/` (5 review passes, 38+ findings absorbed)
- **Outline:** `scripts/nasaa-outline.md` — 4 topics, 37 subtopics, derived from `Series-65-Outline.pdf` (eff. June 12, 2023)
- **Generator:** `scripts/generate-content.ts` — sanity-checked against the new outline (`--dry-run --subtopic 1.1` ✅)

## Phase 5 — content generation (your run)

### Pick a backend

The generator now supports two billing paths:

| Backend | Default? | Auth | Billed against |
|---|---|---|---|
| Claude Code CLI | yes | local `claude` login | Max plan |
| @anthropic-ai/sdk | `--api` flag | `ANTHROPIC_API_KEY` | API account |

You said no separate API spend — so the **default Claude Code CLI** path is
what you want. Make sure no `ANTHROPIC_API_KEY` is in your env (the script
aborts if one is set without `--api` to avoid surprise charges).

### Sanity walk (Max-billed default)

1. **Dry-run one subtopic** to confirm the prompts look right (no backend call):
   ```bash
   npx tsx scripts/generate-content.ts --dry-run --subtopic 1.1
   ```
2. **Validate fixtures still pass** (covered by `npm test`):
   ```bash
   npx tsx scripts/generate-content.ts --validate scripts/fixtures/good-cards.json
   ```
3. **One real subtopic** via Claude Code CLI:
   ```bash
   unset ANTHROPIC_API_KEY    # if any
   npx tsx scripts/generate-content.ts --subtopic 1.1
   ```
   The script will spawn `claude -p` 3 times (lesson + cards + questions),
   check usage at https://claude.com/settings/billing afterwards, and inspect
   `scripts/out/topic-1-econ/1.1-basic-economic-concepts/`. Spot-check 5
   cards and 5 questions for accuracy.
4. **Spread across the weekly cap.** The Max plan has a weekly compute-hour
   ceiling that 37 × 3 Opus calls may exceed in one go. Use `--max-subtopics`:
   ```bash
   # First batch of 5 today; auto-skips any that already exist on next run
   npx tsx scripts/generate-content.ts --max-subtopics 5
   ```
   If a rate limit hits mid-run, the script writes a partial aggregator and
   exits 1 with the message "Saved progress so far. Re-run later". The
   manifest preserves stable IDs across runs.

### Cost framing

**Default (CLI / Max):** burns through your Max plan's weekly compute-hour
allotment. Anthropic doesn't publish exact thresholds, but Opus is heavy —
expect 5-10 large subtopics per day before the weekly cap warns. Plan for
4-7 days of staggered runs.

**Alternative (`--api`):** ~$15-30 total for the corpus with prompt caching
on (cache_control plumbed in API mode only). $200 default ceiling.

## Citation allowlist — needs a real review

`scripts/citation-allowlist.json` is a seed I wrote against generic NASAA / SEC / IA Act / Model Rule references. It WILL reject generated content that cites anything outside the seed. Before Phase 5 you should:

1. Open the file and scan against your study materials. Add any §§ / Rule numbers / Model Rule numbers your materials reference (especially Topic 4, which is heavy on cited rules: Investment Advisers Act §§ 202(a)(11), 203, 204, 206, NASAA Model Rules around 102, 502, IA-USA, etc.).
2. The "> 10% citation mismatch" hard-stop logic in the generator will catch a too-strict allowlist quickly — first run will tell you what's missing.

Decision needed: **do you want me to take a pass at expanding the allowlist** based on the outline's content (I can read the outline and pre-populate every § / Rule the outline alludes to), or do you prefer to curate it yourself from your study materials?

## After generation — you must wire the aggregator

The generator writes to `scripts/out/<topic-slug>/<subtopic-id>-<slug>/` (intentionally outside `src/content/` to keep agent boundaries clean). After a successful run:

```bash
# Move generated content into the app's content tree
mv scripts/out/* src/content/
# Regenerate the aggregator that the app's loadContent() reads
# (the generator emits scripts/out/index.generated.ts; copy it over)
cp scripts/out/index.generated.ts src/content/index.ts
```

Then `npm run build && npm test` to confirm everything still parses and the app's `loadContent()` picks up the real corpus.

The dev stub at `src/content/sample/1.1-sample.ts` should be deleted after real content for `1.1` exists, otherwise duplicate ID collisions are likely (real `cardId` hashes vs the hardcoded `aaaa…aaaa` placeholders are disjoint, but the duplicate `subtopicId: "1.1"` lessons would both load).

## Review queue — gates the mock exam

Every generated item ships `reviewed: false`. The mock exam (`/mock`) DRAWS ONLY FROM `reviewed: true` items, so until you flip flags the mock will show "Not enough reviewed questions in topic X."

Recommended workflow:
1. Use the app's `/quiz` route (no review-gate) to triage. Each question has an "Unreviewed" badge.
2. For each topic: study 30-50 random questions, edit-pencil any that are wrong/confusing, click "Mark as reviewed" on the rest.
3. Once each of the 4 topics has ≥ 39 reviewed questions (matching mock-exam requirements), `/mock` will let you start a real exam.

Settings → "Stale edits" surfaces edits whose target IDs vanished after a regeneration; cleanup there before a re-run.

## Operational items still open (from `docs/qa-report.md`)

| # | Item | Owner | Notes |
|---|---|---|---|
| 1 | `vite.config.ts` `base` for GH Pages | you | Probably needs `"/Series-65-Studier/"` unless you wire a custom domain. Currently `"/"` with TODO comment. |
| 2 | Merge `claude/series-65-study-app-65Urn` → `main` | you | Branch is ready. PR review or direct merge — your call. |
| 3 | Enable GH Pages in repo settings | you | Source: gh-pages branch (deploy.yml writes there). Confirm Actions has write permission. |
| 4 | Replace placeholder icons | you | `public/icons/{apple-touch-180,icon-192,icon-512,maskable-512}.png` are flat "S65" text on dark. Real artwork before sharing. |
| 5 | Real-iPhone QA | you | Walk the manual checklist in `docs/qa-report.md` "Physical-device verification" — install, airplane mode, force-quit recovery, 7-day eviction. |

## Open decisions / blockers — what I need from you

1. **Citation allowlist**: do you want me to pre-populate from the outline, or will you curate it?
2. **Content review pace**: do you want a "review batch" UI (e.g., a Review queue tab) on top of the existing per-question pencil flow, or is the current "edit-then-mark-as-reviewed" enough?
3. **GH Pages URL**: confirm the repo will be served at `https://swapnil-n.github.io/Series-65-Studier/` so I can lock the vite `base` and re-run the QA's URL-tied checks. (Or: a custom domain — name it.)
4. **Phase-4-T3 mock-pause durability across kill+relaunch** — pass-4 noted that if iOS evicts the tab while backgrounded, the in-tab pause gap is lost. The fix is to persist `hiddenAt` to Dexie. Low priority for normal use; want it before shipping?
5. **Deploy automation**: GH Action currently triggers on `push: branches: [main]`. If you want a "review PR before merging to main" gate, we can add a `workflow_dispatch` trigger or split deploy off into a manual approval step.

## Suggested order if you want me to keep going

If you'd like me to take any of these on as the next slice, my recommendation in priority order:

1. **Add the @anthropic-ai/sdk wiring** to `scripts/generate-content.ts` so you can run Phase 5 with one command. ~30 LOC + cost-tracking + manifest write. This unblocks everything downstream.
2. **Pre-populate the citation allowlist** from the outline — about 30 mins of careful reading, will save you hours of "why did the generator reject this?" debugging.
3. **Wire the post-generation aggregator step** so `scripts/out/*` lands cleanly in `src/content/` without manual `mv`. Could be a `scripts/promote-content.ts` runner.
4. **Build the in-app "review queue" view** so flagging items as reviewed is one tap from a curated list, not a hunt through `/quiz`.

Ping me with which one (or in what combination) and I'll go.
