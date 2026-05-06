import { describe, expect, it } from "vitest";
import { cardId, normalizeText, questionId } from "./ids";

describe("normalizeText", () => {
  it("lowercases and trims", () => {
    expect(normalizeText("  Hello World  ")).toBe("hello world");
  });

  it("collapses whitespace runs", () => {
    expect(normalizeText("a   b\t\nc")).toBe("a b c");
  });

  it("strips punctuation and symbols", () => {
    expect(normalizeText("Hello, world!! (really?)")).toBe(
      "hello world really",
    );
  });

  it("collapses internal apostrophes — 'It's' equals 'Its'", () => {
    // Apostrophe-stripping is empty (not space) so word-internal punctuation
    // doesn't split a word into two tokens. (Review S3.)
    expect(normalizeText("It's")).toBe(normalizeText("Its"));
    expect(normalizeText("What's GDP?")).toBe(normalizeText("whats gdp"));
  });

  it("NFC-normalises decomposed Unicode so 'é' (precomposed) equals 'é' (e + combining acute)", () => {
    // Mac vs Windows clipboard can produce visually-identical but
    // byte-different strings. Normalize before hashing. (Review S4.)
    const composed = "café";
    const decomposed = "café";
    expect(composed).not.toBe(decomposed); // sanity — they really differ at byte level
    expect(normalizeText(composed)).toBe(normalizeText(decomposed));
  });
});

describe("cardId / questionId", () => {
  it("produces a 12-char hex string", async () => {
    const id = await cardId("1.1", "Define GDP");
    expect(id).toMatch(/^[0-9a-f]{12}$/);
  });

  it("is deterministic for identical inputs", async () => {
    const a = await cardId("1.1", "Define GDP");
    const b = await cardId("1.1", "Define GDP");
    expect(a).toBe(b);
  });

  it("is insensitive to capitalization / extra spaces / punctuation", async () => {
    const a = await cardId("1.1", "Define GDP");
    const b = await cardId("1.1", "  define, gdp!! ");
    expect(a).toBe(b);
  });

  it("differs for different subtopicIds", async () => {
    const a = await cardId("1.1", "Define GDP");
    const b = await cardId("1.2", "Define GDP");
    expect(a).not.toBe(b);
  });

  it("differs for different text", async () => {
    const a = await cardId("1.1", "Define GDP");
    const b = await cardId("1.1", "Define CPI");
    expect(a).not.toBe(b);
  });

  it("questionId follows the same contract", async () => {
    const a = await questionId("2.3", "What is the Sharpe ratio?");
    const b = await questionId("2.3", "what is the sharpe ratio");
    expect(a).toBe(b);
    expect(a).toMatch(/^[0-9a-f]{12}$/);
  });

  it("cardId and questionId never collide for identical normalized inputs", async () => {
    // db.edits and db.bookmarks key by itemId without a type discriminator,
    // so card IDs and question IDs must live in disjoint hash spaces. Hash
    // inputs are prefixed with "c|" / "q|" to enforce this.
    const c = await cardId("1.1", "foo");
    const q = await questionId("1.1", "foo");
    expect(c).not.toBe(q);
  });
});
