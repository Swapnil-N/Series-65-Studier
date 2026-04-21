// Integration tests for the content pipeline CLI. We spawn the script with
// `npx tsx` (already in the repo's npx cache / devDeps) and assert on exit
// codes + stdout/stderr. No network is ever hit; the script is deliberately
// designed so a real run without the Anthropic SDK installed prints an
// "install SDK" message and exits 0.

import { spawnSync } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..");
const SCRIPT = path.join("scripts", "generate-content.ts");
const GOOD = path.join("scripts", "fixtures", "good-cards.json");
const BAD = path.join("scripts", "fixtures", "bad-cards.json");
const FIXTURE_OUTLINE = path.join("scripts", "fixtures", "outline.md");

function run(
  args: string[],
  env: Record<string, string> = {},
): { status: number | null; stdout: string; stderr: string } {
  const res = spawnSync("npx", ["tsx", SCRIPT, ...args], {
    cwd: REPO_ROOT,
    encoding: "utf8",
    env: { ...process.env, ...env },
    // Plenty of headroom for tsx cold-start on slower CI.
    timeout: 60_000,
  });
  return {
    status: res.status,
    stdout: res.stdout ?? "",
    stderr: res.stderr ?? "",
  };
}

describe("generate-content CLI", () => {
  it("--help exits non-zero without crashing", () => {
    const r = run(["--help"]);
    expect(r.status).toBe(2);
    expect(r.stdout + r.stderr).toMatch(/Usage:/);
  });

  it("--dry-run renders all three prompts for the fixture subtopic", () => {
    const r = run([
      "--dry-run",
      "--subtopic",
      "1.1",
      "--outline",
      FIXTURE_OUTLINE,
    ]);
    expect(r.status).toBe(0);
    expect(r.stdout).toMatch(/lesson prompt/);
    expect(r.stdout).toMatch(/cards prompt/);
    expect(r.stdout).toMatch(/questions prompt/);
    expect(r.stdout).toMatch(/Sample Subtopic/);
  });

  it("--validate passes for a schema-valid, allowlisted fixture", () => {
    const r = run(["--validate", GOOD]);
    expect(r.status).toBe(0);
    expect(r.stdout).toMatch(/OK:/);
  });

  it("--validate fails (exit 1) for an invalid fixture", () => {
    const r = run(["--validate", BAD]);
    expect(r.status).toBe(1);
    const combined = r.stdout + r.stderr;
    // Either the Zod error or the specific bad field/enum value should show up.
    expect(
      /Zod/.test(combined) ||
        /back/.test(combined) ||
        /INVALID/.test(combined) ||
        /invalid/i.test(combined),
    ).toBe(true);
  });

  it("exercises the spend-ceiling path and prints the install-SDK message", () => {
    const r = run(
      ["--subtopic", "1.1", "--spend-ceiling", "1"],
      { ANTHROPIC_API_KEY: "dummy" },
    );
    expect(r.status).toBe(0);
    expect(r.stdout).toMatch(/Install `@anthropic-ai\/sdk`/);
    expect(r.stdout).toMatch(/spend-ceiling acknowledged: \$1/);
  });
});
