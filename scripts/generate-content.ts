// Series 65 Studier — content generation CLI (A3).
//
// Runs under `npx tsx`. Supports --dry-run (render prompts, no network) and
// --validate (Zod + citation-allowlist). A real run requires the Anthropic
// SDK, which is intentionally NOT a dependency of this repo yet; the script
// prints install instructions and exits 0 in that path.

import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";
import { parseArgs } from "node:util";

import {
  CardsArraySchema,
  LessonSchema,
  QuestionsArraySchema,
} from "../src/lib/zodSchemas.ts";
import { CARDS_JSON_SHAPE, renderCardsPrompt } from "./prompts/cards.ts";
import { LESSON_JSON_SHAPE, renderLessonPrompt } from "./prompts/lesson.ts";
import {
  QUESTIONS_JSON_SHAPE,
  renderQuestionsPrompt,
} from "./prompts/questions.ts";

const USAGE = `Usage: tsx scripts/generate-content.ts [options]

Options:
  --subtopic <id>         Subtopic id like "1.1".
  --outline <path>        Outline file (default scripts/nasaa-outline.md).
  --dry-run               Render prompts for --subtopic without calling any API.
  --validate <path>       Zod + citation-allowlist check a JSON file.
  --force                 Regenerate even if an output already exists (real run).
  --spend-ceiling <usd>   Dollar ceiling (default env SPEND_CEILING_USD or 200).
  --help                  Show this message.

Examples:
  tsx scripts/generate-content.ts --dry-run --subtopic 1.1
  tsx scripts/generate-content.ts --validate path/to/cards.json
`;

const out = (s: string): void => void process.stdout.write(s + "\n");
const err = (s: string): void => void process.stderr.write(s + "\n");

interface Subtopic { id: string; title: string; outlineText: string }

export function parseOutline(md: string): Subtopic[] {
  const subs: Subtopic[] = [];
  let cur: Subtopic | null = null;
  const subRe = /^###\s+(\d+\.\d+)\s+(.+?)\s*$/;
  for (const line of md.split(/\r?\n/)) {
    const sub = line.match(subRe);
    if (sub) {
      if (cur) subs.push(cur);
      cur = { id: sub[1], title: sub[2].trim(), outlineText: "" };
      continue;
    }
    // Any other heading (# or ##) closes the current subtopic block.
    if (/^#{1,2}\s+/.test(line)) {
      if (cur) { subs.push(cur); cur = null; }
      continue;
    }
    if (cur) cur.outlineText += line + "\n";
  }
  if (cur) subs.push(cur);
  return subs;
}

type Allowlist = Record<string, string[]>;

function loadAllowlist(): Allowlist {
  const here = path.dirname(new URL(import.meta.url).pathname);
  return JSON.parse(
    fs.readFileSync(path.join(here, "citation-allowlist.json"), "utf8"),
  ) as Allowlist;
}

interface Citation { source?: string; ref?: string }

function collectCitations(data: unknown): Citation[] {
  const out: Citation[] = [];
  const walk = (v: unknown): void => {
    if (!v || typeof v !== "object") return;
    if (Array.isArray(v)) { for (const x of v) walk(x); return; }
    const obj = v as Record<string, unknown>;
    if (typeof obj.source === "string" && typeof obj.ref === "string") {
      out.push({ source: obj.source, ref: obj.ref });
    }
    for (const x of Object.values(obj)) walk(x);
  };
  walk(data);
  return out;
}

function checkCitations(data: unknown, allow: Allowlist): Citation[] {
  return collectCitations(data).filter(
    (c) => !(allow[c.source ?? ""]?.includes(c.ref ?? "")),
  );
}

interface SchemaResult { ok: boolean; kind: string; error?: string }

function tryValidate(data: unknown): SchemaResult {
  // Heuristic: array of cards vs questions by distinguishing field names.
  if (Array.isArray(data)) {
    const first = data[0] as Record<string, unknown> | undefined;
    if (first && typeof first === "object") {
      if ("front" in first || "back" in first) {
        const r = CardsArraySchema.safeParse(data);
        return { ok: r.success, kind: "cards", error: r.success ? undefined : r.error.message };
      }
      if ("stem" in first || "choices" in first) {
        const r = QuestionsArraySchema.safeParse(data);
        return { ok: r.success, kind: "questions", error: r.success ? undefined : r.error.message };
      }
    }
    const c = CardsArraySchema.safeParse(data);
    if (c.success) return { ok: true, kind: "cards" };
    const q = QuestionsArraySchema.safeParse(data);
    if (q.success) return { ok: true, kind: "questions" };
    return { ok: false, kind: "array", error: `cards: ${c.error.message}\nquestions: ${q.error.message}` };
  }
  const l = LessonSchema.safeParse(data);
  return l.success
    ? { ok: true, kind: "lesson" }
    : { ok: false, kind: "lesson", error: l.error.message };
}

function runValidate(filePath: string): number {
  const abs = path.resolve(filePath);
  if (!fs.existsSync(abs)) { err(`--validate: file not found: ${abs}`); return 1; }
  let data: unknown;
  try { data = JSON.parse(fs.readFileSync(abs, "utf8")); }
  catch (e) { err(`--validate: JSON parse failed: ${(e as Error).message}`); return 1; }
  const sr = tryValidate(data);
  if (!sr.ok) {
    err(`Zod validation failed (${sr.kind}):`);
    err(sr.error ?? "unknown error");
    return 1;
  }
  const bad = checkCitations(data, loadAllowlist());
  if (bad.length > 0) {
    err(`Citation allowlist mismatches: ${bad.length}`);
    for (const m of bad) err(`  - ${m.source} :: ${m.ref}`);
    return 1;
  }
  out(`OK: ${sr.kind} (${path.basename(abs)}) — citations clean.`);
  return 0;
}

function runDryRun(subId: string, outlinePath: string): number {
  const abs = path.resolve(outlinePath);
  if (!fs.existsSync(abs)) { err(`--dry-run: outline not found: ${abs}`); return 1; }
  const subs = parseOutline(fs.readFileSync(abs, "utf8"));
  const sub = subs.find((s) => s.id === subId);
  if (!sub) {
    err(`--dry-run: subtopic "${subId}" not found in ${abs}. Available: ${subs.map((s) => s.id).join(", ") || "(none)"}`);
    return 1;
  }
  const input = { id: sub.id, title: sub.title, outlineText: sub.outlineText };
  const sections: [string, string, string][] = [
    ["lesson", renderLessonPrompt(input), LESSON_JSON_SHAPE],
    ["cards", renderCardsPrompt(input), CARDS_JSON_SHAPE],
    ["questions", renderQuestionsPrompt(input), QUESTIONS_JSON_SHAPE],
  ];
  for (const [name, body, shape] of sections) {
    out(`=== ${name} prompt ===`);
    out(body);
    out("\nExpected JSON shape:");
    out(shape.replace(/\s+/g, " ").trim());
    out("");
  }
  return 0;
}

function main(argv: string[]): number {
  let parsed;
  try {
    parsed = parseArgs({
      args: argv,
      options: {
        subtopic: { type: "string" },
        outline: { type: "string", default: "scripts/nasaa-outline.md" },
        "dry-run": { type: "boolean", default: false },
        validate: { type: "string" },
        force: { type: "boolean", default: false },
        "spend-ceiling": { type: "string" },
        help: { type: "boolean", default: false },
      },
      allowPositionals: false,
      strict: true,
    });
  } catch (e) {
    err((e as Error).message);
    err(USAGE);
    return 2;
  }
  const v = parsed.values as Record<string, string | boolean | undefined>;

  if (v.help) { out(USAGE); return 2; }
  if (typeof v.validate === "string") return runValidate(v.validate);

  if (v["dry-run"]) {
    if (typeof v.subtopic !== "string") {
      err("--dry-run requires --subtopic <id>.");
      err(USAGE);
      return 2;
    }
    return runDryRun(v.subtopic, (v.outline as string) ?? "scripts/nasaa-outline.md");
  }

  // Real run path. Parse the spend ceiling so the env-var path is exercised
  // even though we don't call the API in this phase.
  const ceilingRaw = (v["spend-ceiling"] as string) ?? process.env.SPEND_CEILING_USD ?? "200";
  const ceiling = Number(ceilingRaw);
  if (!Number.isFinite(ceiling) || ceiling <= 0) {
    err(`Invalid --spend-ceiling: ${ceilingRaw}`);
    return 2;
  }
  if (typeof v.subtopic !== "string" && !v.force) {
    out(USAGE);
    return 2;
  }
  out("Install `@anthropic-ai/sdk` and set `ANTHROPIC_API_KEY` before running for real. For now, only --dry-run and --validate are supported out of the box. See scripts/README.md.");
  out(`(spend-ceiling acknowledged: $${ceiling})`);
  return 0;
}

const invoked = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invoked.endsWith("generate-content.ts")) {
  process.exit(main(process.argv.slice(2)));
}
