// Stable content IDs. Identical normalized text on the same subtopic must
// produce identical IDs so in-app edits survive content regeneration.

export function normalizeText(s: string): string {
  // 1. NFC: combine "é" (U+0065 + U+0301) ⇆ "é" (U+00E9) so a Mac vs
  //    Windows clipboard produce the same hash. (Review S4.)
  // 2. Lowercase.
  // 3. Strip punctuation/symbols ENTIRELY (not replace-with-space) so
  //    "It's" and "Its" produce the same ID. (Review S3.)
  // 4. Collapse whitespace.
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\p{P}\p{S}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function sha1Hex12(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-1", bytes);
  const arr = new Uint8Array(digest);
  let hex = "";
  for (let i = 0; i < arr.length; i++) {
    hex += arr[i].toString(16).padStart(2, "0");
  }
  return hex.slice(0, 12);
}

export async function cardId(
  subtopicId: string,
  front: string,
): Promise<string> {
  return sha1Hex12(`c|${subtopicId}|${normalizeText(front)}`);
}

export async function questionId(
  subtopicId: string,
  stem: string,
): Promise<string> {
  return sha1Hex12(`q|${subtopicId}|${normalizeText(stem)}`);
}
