// Series 65 Studier — content generation CLI.
//
// Runs under `npx tsx`. Three modes:
//   - --dry-run: render prompts, no network.
//   - --validate <file>: Zod + citation-allowlist check on a JSON file.
//   - (default) real run: generate content for one or all subtopics.
//
// **Default real-run path uses the Claude Code CLI** (`claude -p`), which
// authenticates against the user's local Claude Code session (Max plan).
// This keeps the run on the subscription bucket, not a separate API account.
//
// Use `--api` to fall back to the @anthropic-ai/sdk path, which requires
// ANTHROPIC_API_KEY and bills against your API account separately.

import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";
import { parseArgs } from "node:util";
import { spawn } from "node:child_process";
import { webcrypto } from "node:crypto";

// Polyfill Web Crypto on globalThis so ../src/lib/ids.ts (which uses
// crypto.subtle.digest via the web standard) works in Node.
if (!(globalThis as { crypto?: Crypto }).crypto) {
  (globalThis as { crypto?: Crypto }).crypto = webcrypto as unknown as Crypto;
}

import Anthropic from "@anthropic-ai/sdk";
import { config as dotenvConfig } from "dotenv";

import {
  CardsArraySchema,
  LessonSchema,
  QuestionsArraySchema,
} from "../src/lib/zodSchemas.ts";
import { cardId, normalizeText, questionId } from "../src/lib/ids.ts";
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
  --dry-run               Render prompts for --subtopic without calling any backend.
  --validate <path>       Zod + citation-allowlist check a JSON file.
  --force                 Regenerate even if an output already exists.
  --api                   Use @anthropic-ai/sdk + ANTHROPIC_API_KEY (separate
                          billing). Default is Claude Code CLI (Max-billed).
  --max-subtopics <n>     Stop after generating N subtopics this run (CLI mode
                          safety guard against the Max plan weekly cap).
                          Default 0 = unlimited.
  --spend-ceiling <usd>   API mode only: dollar ceiling (default env
                          SPEND_CEILING_USD or 200).
  --model <id>            Override model. Default: claude-opus-4-7.
  --help                  Show this message.

Examples:
  tsx scripts/generate-content.ts --dry-run --subtopic 1.1
  tsx scripts/generate-content.ts --validate path/to/cards.json
  tsx scripts/generate-content.ts --subtopic 1.1                 # Max-billed
  tsx scripts/generate-content.ts --api --subtopic 1.1           # API-billed
  tsx scripts/generate-content.ts --max-subtopics 5              # cap weekly
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

// -----------------------------------------------------------------------------
// Real run path — calls the Anthropic API.
// -----------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are an expert NASAA Series 65 exam-prep author. \
Produce factually accurate study material grounded in the supplied outline \
and primary sources. Cite specific sections, rules, and acts (NASAA outline, \
SEC, Investment Advisers Act of 1940, NASAA Model Rules). Return ONLY a \
single JSON value matching the requested shape — no surrounding prose, no \
code fences. Use plain ASCII apostrophes and quotes.`;

const PRICE_INPUT_PER_M = 15; // USD/M tokens (Opus 4.7 cached input is much cheaper but we estimate worst-case)
const PRICE_OUTPUT_PER_M = 75;

interface SubtopicEntry {
  subtopicId: string;
  title: string;
  outlineText: string;
  topicNum: number; // 1..4
}

interface ManifestEntry { id: string; normalized: string; }
interface SubtopicManifest {
  subtopicId: string;
  items: {
    lessons: ManifestEntry[];
    cards: ManifestEntry[];
    questions: ManifestEntry[];
  };
}

interface SpendTracker { inputTokens: number; outputTokens: number; usd: number; ceiling: number; }

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function topicSlug(topicNum: number): string {
  return ["", "topic-1-econ", "topic-2-vehicles", "topic-3-recommendations", "topic-4-laws"][topicNum] ?? `topic-${topicNum}`;
}

function priceFor(input: number, output: number): number {
  return (input / 1_000_000) * PRICE_INPUT_PER_M + (output / 1_000_000) * PRICE_OUTPUT_PER_M;
}

function parseAllSubtopics(outlinePath: string): SubtopicEntry[] {
  const text = fs.readFileSync(outlinePath, "utf8");
  const lines = text.split(/\r?\n/);
  const out: SubtopicEntry[] = [];
  let topicNum = 0;
  let curId: string | null = null;
  let curTitle = "";
  let curBuf: string[] = [];
  const flush = () => {
    if (curId) {
      out.push({
        subtopicId: curId,
        title: curTitle,
        outlineText: curBuf.join("\n").trim(),
        topicNum,
      });
    }
    curId = null;
    curTitle = "";
    curBuf = [];
  };
  for (const raw of lines) {
    const t = raw.replace(/\s+$/, "");
    let m = /^##\s+(\d+)\.\s+(.+)$/.exec(t);
    if (m) { flush(); topicNum = Number(m[1]); continue; }
    m = /^###\s+(\d+\.\d+)\s+(.+)$/.exec(t);
    if (m) { flush(); curId = m[1]; curTitle = m[2].trim(); continue; }
    if (curId) curBuf.push(raw);
  }
  flush();
  return out;
}

interface CallResult { data: unknown; inputTokens: number; outputTokens: number; }

/**
 * Backend abstraction: call(prompt) → JSON-parsed response. Two implementations:
 *   - ClaudeCodeCLIBackend: spawns `claude -p` with stdin-piped prompt.
 *     Bills against the user's local Claude Code session (Max subscription).
 *     Reports inputTokens/outputTokens=0 since the CLI's billing is unit-based,
 *     not token-priced from the consumer's view.
 *   - ApiBackend: @anthropic-ai/sdk against ANTHROPIC_API_KEY. Reports real
 *     token counts so the spend ceiling can gate the run.
 */
interface Backend {
  call(prompt: string, retryHints: string[]): Promise<CallResult>;
}

class ApiBackend implements Backend {
  constructor(private readonly client: Anthropic, private readonly model: string) {}
  async call(prompt: string, retryHints: string[]): Promise<CallResult> {
    const userParts: Array<{ type: "text"; text: string }> = [{ type: "text", text: prompt }];
    for (const hint of retryHints) userParts.push({ type: "text", text: hint });
    const resp = await this.client.messages.create({
      model: this.model,
      max_tokens: 16000,
      system: [
        { type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
      ],
      messages: [{ role: "user", content: userParts }],
    });
    const textBlock = resp.content.find((b) => b.type === "text");
    const raw = textBlock && "text" in textBlock ? (textBlock.text as string) : "";
    return parseJsonOrThrow(raw, {
      inputTokens: resp.usage?.input_tokens ?? 0,
      outputTokens: resp.usage?.output_tokens ?? 0,
    });
  }
}

class ClaudeCodeCLIBackend implements Backend {
  constructor(private readonly model: string) {}
  async call(prompt: string, retryHints: string[]): Promise<CallResult> {
    const fullPrompt = [SYSTEM_PROMPT, "", prompt, ...retryHints].join("\n\n");
    const stdout = await spawnClaudeCli(["-p", "--output-format", "json", "--model", this.model], fullPrompt);
    let envelope: { result?: string };
    try { envelope = JSON.parse(stdout); }
    catch (e) {
      throw new Error(`Claude Code CLI returned non-JSON: ${(e as Error).message}\nstdout: ${stdout.slice(0, 200)}`);
    }
    const raw = envelope.result ?? "";
    return parseJsonOrThrow(raw, { inputTokens: 0, outputTokens: 0 });
  }
}

function parseJsonOrThrow(raw: string, usage: { inputTokens: number; outputTokens: number }): CallResult {
  // Strip code fences if the model defied instructions.
  const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
  // Some models prepend prose; grab the first balanced JSON object/array.
  const firstBrace = cleaned.search(/[{\[]/);
  const sliced = firstBrace > 0 ? cleaned.slice(firstBrace) : cleaned;
  try {
    return { data: JSON.parse(sliced), inputTokens: usage.inputTokens, outputTokens: usage.outputTokens };
  } catch (e) {
    throw new Error(`JSON parse: ${(e as Error).message}\nRaw: ${raw.slice(0, 200)}`);
  }
}

function spawnClaudeCli(args: string[], stdinText: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = spawn("claude", args, { stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (b: Buffer) => { stdout += b.toString("utf8"); });
    child.stderr.on("data", (b: Buffer) => { stderr += b.toString("utf8"); });
    child.on("error", (e) => reject(new Error(`Failed to spawn 'claude' CLI: ${e.message}. Is Claude Code installed and on PATH?`)));
    child.on("close", (code) => {
      if (code !== 0) {
        const lower = stderr.toLowerCase();
        const isRateLimit = lower.includes("rate") && lower.includes("limit");
        const tag = isRateLimit ? "[RATE LIMIT]" : `[exit ${code}]`;
        reject(new Error(`${tag} claude CLI failed: ${stderr.trim() || "(no stderr)"}`));
        return;
      }
      resolve(stdout);
    });
    child.stdin.end(stdinText);
  });
}

async function callWithRetries<T>(
  backend: Backend,
  prompt: string,
  validate: (data: unknown) => { ok: true; value: T } | { ok: false; reason: string },
  spend: SpendTracker,
): Promise<{ value: T; inputTokens: number; outputTokens: number }> {
  const hints: string[] = [];
  let lastErr = "";
  for (let attempt = 0; attempt < 3; attempt++) {
    if (spend.ceiling > 0 && spend.usd >= spend.ceiling) {
      throw new Error(`Spend ceiling reached ($${spend.usd.toFixed(2)} / $${spend.ceiling}) — aborting before next call.`);
    }
    let result: CallResult;
    try { result = await backend.call(prompt, hints); }
    catch (e) {
      const msg = (e as Error).message;
      // Rate-limit errors are unrecoverable in this loop — bubble up so the
      // caller can checkpoint and exit cleanly.
      if (msg.startsWith("[RATE LIMIT]")) throw e;
      lastErr = msg;
      hints.push(`Previous response failed JSON parse: ${lastErr}. Return ONLY valid JSON matching the requested shape.`);
      continue;
    }
    spend.inputTokens += result.inputTokens;
    spend.outputTokens += result.outputTokens;
    if (spend.ceiling > 0) spend.usd += priceFor(result.inputTokens, result.outputTokens);
    const v = validate(result.data);
    if (v.ok) return { value: v.value, inputTokens: result.inputTokens, outputTokens: result.outputTokens };
    lastErr = v.reason;
    hints.push(`Previous response failed schema validation: ${v.reason}. Return ONLY valid JSON matching the requested shape.`);
  }
  throw new Error(`Failed after 3 attempts: ${lastErr}`);
}

function loadManifest(p: string): SubtopicManifest | null {
  try {
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, "utf8")) as SubtopicManifest;
  } catch { return null; }
}

function dedupeBy<T>(items: T[], keyOf: (x: T) => string): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const it of items) {
    const k = keyOf(it);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(it);
  }
  return out;
}

interface AllowlistShape { [src: string]: string[]; }

function citationOk(c: { source?: string; ref?: string }, allow: AllowlistShape): boolean {
  if (!c.source || !c.ref) return false;
  return Boolean(allow[c.source]?.includes(c.ref));
}

function tsModule(name: string, value: unknown, importLine: string): string {
  return `${importLine}\n\nexport const ${name} = ${JSON.stringify(value, null, 2)} as const;\n`;
}

function tsModuleTyped(varName: string, typeName: string, value: unknown, importLine: string): string {
  return `${importLine}\n\nexport const ${varName}: ${typeName} = ${JSON.stringify(value, null, 2)};\n`;
}

async function generateOne(
  backend: Backend,
  entry: SubtopicEntry,
  outRoot: string,
  allow: AllowlistShape,
  spend: SpendTracker,
  force: boolean,
): Promise<{ skipped: boolean; mismatchRate: number }> {
  const slug = slugify(entry.title);
  const dir = path.join(outRoot, topicSlug(entry.topicNum), `${entry.subtopicId}-${slug}`);
  const manifestPath = path.join(dir, "manifest.json");
  if (!force && fs.existsSync(dir) && fs.existsSync(manifestPath)) {
    out(`[${entry.subtopicId}] ${entry.title} — already generated (use --force to regenerate)`);
    return { skipped: true, mismatchRate: 0 };
  }
  const priorManifest = loadManifest(manifestPath);
  const priorIds = (kind: "lessons" | "cards" | "questions") => {
    const arr = priorManifest?.items[kind] ?? [];
    const m = new Map<string, string>();
    for (const e of arr) m.set(e.normalized, e.id);
    return m;
  };

  const promptInput = { id: entry.subtopicId, title: entry.title, outlineText: entry.outlineText };

  // Lesson
  const lessonRes = await callWithRetries(backend, renderLessonPrompt(promptInput),
    (d) => {
      const r = LessonSchema.safeParse(d);
      return r.success ? { ok: true as const, value: r.data } : { ok: false as const, reason: r.error.message };
    }, spend);
  // Cards
  const cardsRes = await callWithRetries(backend, renderCardsPrompt(promptInput),
    (d) => {
      const r = CardsArraySchema.safeParse(d);
      return r.success ? { ok: true as const, value: r.data } : { ok: false as const, reason: r.error.message };
    }, spend);
  // Questions
  const questionsRes = await callWithRetries(backend, renderQuestionsPrompt(promptInput),
    (d) => {
      const r = QuestionsArraySchema.safeParse(d);
      return r.success ? { ok: true as const, value: r.data } : { ok: false as const, reason: r.error.message };
    }, spend);

  // Stable IDs: rehydrate from prior manifest if normalized text matches.
  const priorCardIds = priorIds("cards");
  const priorQuestionIds = priorIds("questions");
  const cardsWithIds = await Promise.all(
    cardsRes.value.map(async (c) => {
      const norm = normalizeText(c.front);
      const id = priorCardIds.get(norm) ?? (await cardId(entry.subtopicId, c.front));
      return { ...c, id, subtopicId: entry.subtopicId, reviewed: false };
    }),
  );
  const questionsWithIds = await Promise.all(
    questionsRes.value.map(async (q) => {
      const norm = normalizeText(q.stem);
      const id = priorQuestionIds.get(norm) ?? (await questionId(entry.subtopicId, q.stem));
      return { ...q, id, subtopicId: entry.subtopicId, reviewed: false };
    }),
  );
  const lesson = { ...lessonRes.value, subtopicId: entry.subtopicId, reviewed: false };

  // Dedupe + citation-allowlist filter.
  const cardsDeduped = dedupeBy(cardsWithIds, (c) => c.id);
  const questionsDeduped = dedupeBy(questionsWithIds, (q) => q.id);
  let mismatches = 0;
  let total = 0;
  const filterByCitation = <T extends { citation: { source?: string; ref?: string } }>(arr: T[]): T[] => {
    const kept: T[] = [];
    for (const it of arr) {
      total += 1;
      if (citationOk(it.citation, allow)) kept.push(it);
      else mismatches += 1;
    }
    return kept;
  };
  const cardsFinal = filterByCitation(cardsDeduped);
  const questionsFinal = filterByCitation(questionsDeduped);
  const lessonCitations = lesson.citations ?? [];
  for (const c of lessonCitations) { total += 1; if (!citationOk(c, allow)) mismatches += 1; }
  const mismatchRate = total === 0 ? 0 : mismatches / total;
  if (mismatchRate > 0.1) {
    throw new Error(`[${entry.subtopicId}] citation mismatch rate ${(mismatchRate * 100).toFixed(1)}% > 10% — expand scripts/citation-allowlist.json or refine the prompt. ${mismatches}/${total} mismatches.`);
  }

  // Write outputs.
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, "lesson.ts"),
    tsModuleTyped("lesson", "Lesson", lesson, `import type { Lesson } from "../../../src/types/content";`),
    "utf8",
  );
  fs.writeFileSync(
    path.join(dir, "cards.ts"),
    tsModuleTyped("cards", "Card[]", cardsFinal, `import type { Card } from "../../../src/types/content";`),
    "utf8",
  );
  fs.writeFileSync(
    path.join(dir, "questions.ts"),
    tsModuleTyped("questions", "Question[]", questionsFinal, `import type { Question } from "../../../src/types/content";`),
    "utf8",
  );
  const manifest: SubtopicManifest = {
    subtopicId: entry.subtopicId,
    items: {
      lessons: [{ id: entry.subtopicId, normalized: normalizeText(lesson.title) }],
      cards: cardsFinal.map((c) => ({ id: c.id, normalized: normalizeText(c.front) })),
      questions: questionsFinal.map((q) => ({ id: q.id, normalized: normalizeText(q.stem) })),
    },
  };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

  const callSpend = priceFor(
    lessonRes.inputTokens + cardsRes.inputTokens + questionsRes.inputTokens,
    lessonRes.outputTokens + cardsRes.outputTokens + questionsRes.outputTokens,
  );
  out(`[${entry.subtopicId}] ${entry.title} ✓ (${cardsFinal.length} cards · ${questionsFinal.length} questions · $${callSpend.toFixed(2)} · running $${spend.usd.toFixed(2)} / $${spend.ceiling})`);
  if (mismatches > 0) out(`  ⚠ dropped ${mismatches} item(s) with disallowed citations`);
  return { skipped: false, mismatchRate };
}

function writeAggregator(outRoot: string): void {
  // Scan outRoot for every <topicSlug>/<subtopicDir>/{lesson,cards,questions}.ts triple.
  const lines: string[] = [];
  const lessonImports: string[] = [];
  const cardImports: string[] = [];
  const questionImports: string[] = [];
  if (!fs.existsSync(outRoot)) return;
  const topicDirs = fs.readdirSync(outRoot).filter((d) => fs.statSync(path.join(outRoot, d)).isDirectory()).sort();
  for (const td of topicDirs) {
    const sps = fs.readdirSync(path.join(outRoot, td)).filter((d) => /^\d+\.\d+-/.test(d)).sort();
    for (const sp of sps) {
      const id = sp.match(/^(\d+\.\d+)/)?.[1];
      if (!id) continue;
      const v = id.replace(".", "_");
      lessonImports.push(`import { lesson as lesson_${v} } from "./${td}/${sp}/lesson";`);
      cardImports.push(`import { cards as cards_${v} } from "./${td}/${sp}/cards";`);
      questionImports.push(`import { questions as questions_${v} } from "./${td}/${sp}/questions";`);
    }
  }
  lines.push(`// Auto-generated by scripts/generate-content.ts on ${new Date().toISOString()}. Do not hand-edit.`);
  lines.push(...lessonImports, ...cardImports, ...questionImports, "");
  const lessonRefs = lessonImports.map((s) => s.match(/lesson_(\d+_\d+)/)?.[1] ? `lesson_${s.match(/lesson_(\d+_\d+)/)![1]}` : "").filter(Boolean);
  const cardRefs = cardImports.map((s) => s.match(/cards_(\d+_\d+)/)?.[1] ? `...cards_${s.match(/cards_(\d+_\d+)/)![1]}` : "").filter(Boolean);
  const questionRefs = questionImports.map((s) => s.match(/questions_(\d+_\d+)/)?.[1] ? `...questions_${s.match(/questions_(\d+_\d+)/)![1]}` : "").filter(Boolean);
  lines.push(`export const allContent = {`);
  lines.push(`  lessons: [${lessonRefs.join(", ")}],`);
  lines.push(`  cards: [${cardRefs.join(", ")}],`);
  lines.push(`  questions: [${questionRefs.join(", ")}],`);
  lines.push(`};`);
  fs.writeFileSync(path.join(outRoot, "index.generated.ts"), lines.join("\n") + "\n", "utf8");
}

async function runReal(opts: {
  subtopic: string | null;
  outline: string;
  ceiling: number;
  force: boolean;
  useApi: boolean;
  maxSubtopics: number;
  model: string;
}): Promise<number> {
  dotenvConfig();
  const allow = loadAllowlist() as AllowlistShape;
  const all = parseAllSubtopics(opts.outline);
  if (all.length === 0) { err(`No subtopics parsed from ${opts.outline}.`); return 1; }
  const target = opts.subtopic ? all.filter((e) => e.subtopicId === opts.subtopic) : all;
  if (target.length === 0) { err(`Subtopic ${opts.subtopic} not found in outline.`); return 1; }

  // Pick backend.
  let backend: Backend;
  if (opts.useApi) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      err("--api requires ANTHROPIC_API_KEY (env or .env). Drop --api to use the Claude Code CLI (Max-billed) instead.");
      return 1;
    }
    backend = new ApiBackend(new Anthropic({ apiKey }), opts.model);
    out(`Backend: API (@anthropic-ai/sdk) — billed per-token against your API account.`);
  } else {
    if (process.env.ANTHROPIC_API_KEY) {
      err("⚠ ANTHROPIC_API_KEY is set in the environment. The Claude Code CLI may pick this up and bill against your API account instead of your Max plan.");
      err("  To force Max billing: `unset ANTHROPIC_API_KEY` before re-running, or pass --api to use it explicitly.");
      err("  Aborting to avoid surprise charges.");
      return 1;
    }
    backend = new ClaudeCodeCLIBackend(opts.model);
    out(`Backend: Claude Code CLI (Max-billed). Auth comes from your local 'claude' login.`);
  }

  const outRoot = path.resolve("scripts/out");
  fs.mkdirSync(outRoot, { recursive: true });
  // For CLI mode, ceiling = 0 means "no dollar gate, use --max-subtopics".
  const spend: SpendTracker = {
    inputTokens: 0,
    outputTokens: 0,
    usd: 0,
    ceiling: opts.useApi ? opts.ceiling : 0,
  };
  let generated = 0;
  let skipped = 0;
  for (const entry of target) {
    if (opts.maxSubtopics > 0 && generated >= opts.maxSubtopics) {
      out(`Reached --max-subtopics ${opts.maxSubtopics}; stopping. Re-run later to continue (existing subtopics skipped automatically).`);
      break;
    }
    try {
      const result = await generateOne(backend, entry, outRoot, allow, spend, opts.force);
      if (result.skipped) skipped += 1; else generated += 1;
    } catch (e) {
      const msg = (e as Error).message;
      err(`[${entry.subtopicId}] ${msg}`);
      if (msg.startsWith("[RATE LIMIT]")) {
        err("Rate limit hit. Saved progress so far. Re-run later to continue (existing subtopics auto-skipped).");
      } else {
        err("Aborting run. Fix the issue, then re-run; existing subtopics auto-skip.");
      }
      writeAggregator(outRoot); // best-effort partial aggregator
      return 1;
    }
  }
  writeAggregator(outRoot);
  out("");
  if (opts.useApi) {
    out(`Done. ${generated} generated, ${skipped} skipped (existing). Tokens: ${spend.inputTokens} in / ${spend.outputTokens} out. Spend: $${spend.usd.toFixed(2)} of $${opts.ceiling}.`);
  } else {
    out(`Done. ${generated} generated, ${skipped} skipped (existing). Billed against your Claude Code Max plan — check usage at claude.com/settings/billing.`);
  }
  out(`Output: ${outRoot}`);
  out(`Next: \`npx tsx scripts/promote-content.ts\` to install into src/content/.`);
  return 0;
}

async function main(argv: string[]): Promise<number> {
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
        api: { type: "boolean", default: false },
        "max-subtopics": { type: "string" },
        "spend-ceiling": { type: "string" },
        model: { type: "string", default: "claude-opus-4-7" },
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

  // Real run path.
  const ceilingRaw = (v["spend-ceiling"] as string) ?? process.env.SPEND_CEILING_USD ?? "200";
  const ceiling = Number(ceilingRaw);
  if (!Number.isFinite(ceiling) || ceiling <= 0) {
    err(`Invalid --spend-ceiling: ${ceilingRaw}`);
    return 2;
  }
  let maxSubtopics = 0;
  if (typeof v["max-subtopics"] === "string") {
    maxSubtopics = Number(v["max-subtopics"]);
    if (!Number.isInteger(maxSubtopics) || maxSubtopics < 0) {
      err(`Invalid --max-subtopics: ${v["max-subtopics"]} (expect non-negative integer)`);
      return 2;
    }
  }
  // Subtopic is optional — omitted means "generate every subtopic".
  return runReal({
    subtopic: typeof v.subtopic === "string" ? v.subtopic : null,
    outline: (v.outline as string) ?? "scripts/nasaa-outline.md",
    ceiling,
    force: Boolean(v.force),
    useApi: Boolean(v.api),
    maxSubtopics,
    model: (v.model as string) ?? "claude-opus-4-7",
  });
}

const invoked = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invoked.endsWith("generate-content.ts")) {
  void main(process.argv.slice(2)).then((code) => process.exit(code));
}
