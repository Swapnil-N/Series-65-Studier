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
import {
  CARDS_JSON_SHAPE,
  renderCardsPrompt,
} from "./prompts/cards.ts";
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

function print(msg: string): void {
  process.stdout.write(msg + "\n");
}

function printErr(msg: string): void {
  process.stderr.write(msg + "\n");
}

interface Subtopic {
  id: string;
  title: string;
  outlineText: string;
}

export function parseOutline(md: string): Subtopic[] {
  const lines = md.split(/\r?\n/);
  const subtopics: Subtopic[] = [];
  let current: Subtopic | null = null;
  const subRe = /^###\s+(\d+\.\d+)\s+(.+?)\s*$/;
  const topicRe = /^##\s+\d+\.\s+.+$/;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("<!--") || trimmed === "") {
      if (current) current.outlineText += line + "\n";
      continue;
    }
    const sub = line.match(subRe);
    if (sub) {
      if (current) subtopics.push(current);
      current = { id: sub[1], title: sub[2].trim(), outlineText: "" };
      continue;
    }
    if (topicRe.test(line) || /^#\s+/.test(line)) {
      if (current) {
        subtopics.push(current);
        current = null;
      }
      continue;
    }
    if (current) current.outlineText += line + "\n";
  }
  if (current) subtopics.push(current);
  return subtopics;
}

type Allowlist = Record<string, string[]>;

function loadAllowlist(): Allowlist {
  const p = path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "citation-allowlist.json",
  );
  return JSON.parse(fs.readFileSync(p, "utf8")) as Allowlist;
}

interface Citation {
  source?: string;
  ref?: string;
}

function collectCitations(data: unknown): Citation[] {
  const out: Citation[] = [];
  const walk = (v: unknown): void => {
    if (!v || typeof v !== "object") return;
    if (Array.isArray(v)) {
      for (const item of v) walk(item);
      return;
    }
    const obj = v as Record<string, unknown>;
    if (
      "source" in obj &&
      "ref" in obj &&
      typeof obj.source === "string" &&
      typeof obj.ref === "string"
    ) {
      out.push({ source: obj.source, ref: obj.ref });
    }
    for (const val of Object.values(obj)) walk(val);
  };
  walk(data);
  return out;
}

function checkCitations(
  data: unknown,
  allow: Allowlist,
): { mismatches: Citation[]; count: number } {
  const cites = collectCitations(data);
  const bad: Citation[] = [];
  for (const c of cites) {
    const src = c.source ?? "";
    const ref = c.ref ?? "";
    const entries = allow[src];
    if (!entries || !entries.includes(ref)) bad.push(c);
  }
  return { mismatches: bad, count: bad.length };
}

function tryValidate(data: unknown): { ok: boolean; kind?: string; error?: string } {
  // Heuristic: arrays of objects with `front`/`back` → cards,
  // with `stem`/`choices` → questions.
  if (Array.isArray(data)) {
    const first = data[0];
    if (first && typeof first === "object") {
      if ("front" in first || "back" in first) {
        const r = CardsArraySchema.safeParse(data);
        return r.success
          ? { ok: true, kind: "cards" }
          : { ok: false, kind: "cards", error: r.error.message };
      }
      if ("stem" in first || "choices" in first) {
        const r = QuestionsArraySchema.safeParse(data);
        return r.success
          ? { ok: true, kind: "questions" }
          : { ok: false, kind: "questions", error: r.error.message };
      }
    }
    // Empty or ambiguous array — try both.
    const c = CardsArraySchema.safeParse(data);
    if (c.success) return { ok: true, kind: "cards" };
    const q = QuestionsArraySchema.safeParse(data);
    if (q.success) return { ok: true, kind: "questions" };
    return {
      ok: false,
      kind: "array",
      error: `cards: ${c.error.message}\nquestions: ${q.error.message}`,
    };
  }
  const lesson = LessonSchema.safeParse(data);
  if (lesson.success) return { ok: true, kind: "lesson" };
  return { ok: false, kind: "lesson", error: lesson.error.message };
}

function runValidate(filePath: string): number {
  const abs = path.resolve(filePath);
  if (!fs.existsSync(abs)) {
    printErr(`--validate: file not found: ${abs}`);
    return 1;
  }
  let data: unknown;
  try {
    data = JSON.parse(fs.readFileSync(abs, "utf8"));
  } catch (e) {
    printErr(`--validate: JSON parse failed: ${(e as Error).message}`);
    return 1;
  }
  const schemaResult = tryValidate(data);
  if (!schemaResult.ok) {
    printErr(`Zod validation failed (${schemaResult.kind}):`);
    printErr(schemaResult.error ?? "unknown error");
    return 1;
  }
  const allow = loadAllowlist();
  const citeCheck = checkCitations(data, allow);
  if (citeCheck.count > 0) {
    printErr(
      `Citation allowlist mismatches: ${citeCheck.count}`,
    );
    for (const m of citeCheck.mismatches) {
      printErr(`  - ${m.source} :: ${m.ref}`);
    }
    return 1;
  }
  print(`OK: ${schemaResult.kind} (${path.basename(abs)}) — citations clean.`);
  return 0;
}

function runDryRun(subId: string, outlinePath: string): number {
  const abs = path.resolve(outlinePath);
  if (!fs.existsSync(abs)) {
    printErr(`--dry-run: outline not found: ${abs}`);
    return 1;
  }
  const md = fs.readFileSync(abs, "utf8");
  const subs = parseOutline(md);
  const sub = subs.find((s) => s.id === subId);
  if (!sub) {
    printErr(
      `--dry-run: subtopic "${subId}" not found in ${abs}. Available: ${subs.map((s) => s.id).join(", ") || "(none)"}`,
    );
    return 1;
  }
  const input = { id: sub.id, title: sub.title, outlineText: sub.outlineText };

  print("=== lesson prompt ===");
  print(renderLessonPrompt(input));
  print("\nExpected JSON shape:");
  print(LESSON_JSON_SHAPE.replace(/\s+/g, " ").trim());

  print("\n=== cards prompt ===");
  print(renderCardsPrompt(input));
  print("\nExpected JSON shape:");
  print(CARDS_JSON_SHAPE.replace(/\s+/g, " ").trim());

  print("\n=== questions prompt ===");
  print(renderQuestionsPrompt(input));
  print("\nExpected JSON shape:");
  print(QUESTIONS_JSON_SHAPE.replace(/\s+/g, " ").trim());
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
    printErr((e as Error).message);
    printErr(USAGE);
    return 2;
  }
  const v = parsed.values as {
    subtopic?: string;
    outline?: string;
    "dry-run"?: boolean;
    validate?: string;
    force?: boolean;
    "spend-ceiling"?: string;
    help?: boolean;
  };

  if (v.help) {
    print(USAGE);
    return 2;
  }

  if (v.validate) {
    return runValidate(v.validate);
  }

  if (v["dry-run"]) {
    if (!v.subtopic) {
      printErr("--dry-run requires --subtopic <id>.");
      printErr(USAGE);
      return 2;
    }
    return runDryRun(v.subtopic, v.outline ?? "scripts/nasaa-outline.md");
  }

  // Real run path. Spend ceiling is parsed for side-effect (log it) so the
  // env-var path is exercised even though we don't call the API here.
  const ceilingRaw =
    v["spend-ceiling"] ?? process.env.SPEND_CEILING_USD ?? "200";
  const ceiling = Number(ceilingRaw);
  if (!Number.isFinite(ceiling) || ceiling <= 0) {
    printErr(`Invalid --spend-ceiling: ${ceilingRaw}`);
    return 2;
  }

  if (!v.subtopic && !v.force) {
    print(USAGE);
    return 2;
  }

  print(
    "Install `@anthropic-ai/sdk` and set `ANTHROPIC_API_KEY` before running for real. For now, only --dry-run and --validate are supported out of the box. See scripts/README.md.",
  );
  print(`(spend-ceiling acknowledged: $${ceiling})`);
  return 0;
}

const entry = new URL(import.meta.url).pathname;
const invoked = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (entry === invoked || invoked.endsWith("generate-content.ts")) {
  process.exit(main(process.argv.slice(2)));
}
