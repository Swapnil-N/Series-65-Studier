import { allContent } from "../content";
import type { Card, Lesson, Question } from "../types/content";
import { db } from "./db";
import {
  CardSchema,
  LessonSchema,
  QuestionSchema,
} from "./zodSchemas";

// Validated shipped content is computed once at module load (Zod is the only
// meaningful cost there). Merged content (shipped + db.edits overlay) is
// memoised across calls and invalidated whenever the edits table mutates via
// `bustContentCache()`.
let validatedShipped: {
  lessons: Lesson[];
  cards: Card[];
  questions: Question[];
} | null = null;
let mergedCache: Promise<{
  lessons: Lesson[];
  cards: Card[];
  questions: Question[];
}> | null = null;

/** Drop the memoised loadContent result. Call after writing to db.edits. */
export function bustContentCache(): void {
  mergedCache = null;
}

// Apply any user edits (from db.edits) on top of shipped content, keyed by
// itemId. Edits whose itemId no longer exists in the shipped corpus are
// logged (and surfaced elsewhere in Settings) but dropped from the merge.
export function loadContent(): Promise<{
  lessons: Lesson[];
  cards: Card[];
  questions: Question[];
}> {
  if (mergedCache) return mergedCache;
  mergedCache = loadContentUncached();
  return mergedCache;
}

async function loadContentUncached(): Promise<{
  lessons: Lesson[];
  cards: Card[];
  questions: Question[];
}> {
  if (!validatedShipped) {
    const { lessons: rawLessons, cards: rawCards, questions: rawQuestions } =
      allContent;
    validatedShipped = {
      lessons: filterValid<Lesson>(rawLessons, LessonSchema, "lesson"),
      cards: filterValid<Card>(rawCards, CardSchema, "card"),
      questions: filterValid<Question>(rawQuestions, QuestionSchema, "question"),
    };
  }
  const {
    lessons: validLessons,
    cards: validCards,
    questions: validQuestions,
  } = validatedShipped;

  const edits = await db.edits.toArray();
  const lessonEdits = new Map<string, Partial<Lesson>>();
  const cardEdits = new Map<string, Partial<Card>>();
  const questionEdits = new Map<string, Partial<Question>>();
  const knownIds = new Set<string>([
    ...validLessons.map((l) => l.subtopicId),
    ...validCards.map((c) => c.id),
    ...validQuestions.map((q) => q.id),
  ]);

  for (const edit of edits) {
    if (!knownIds.has(edit.itemId)) {
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.warn(
          `[content] stale edit ignored: itemId=${edit.itemId} type=${edit.type}`,
        );
      }
      continue;
    }
    if (edit.type === "lesson") {
      lessonEdits.set(edit.itemId, edit.patch as Partial<Lesson>);
    } else if (edit.type === "card") {
      cardEdits.set(edit.itemId, edit.patch as Partial<Card>);
    } else if (edit.type === "question") {
      questionEdits.set(edit.itemId, edit.patch as Partial<Question>);
    }
  }

  const lessons = validLessons.map((l) => {
    const patch = lessonEdits.get(l.subtopicId);
    return patch ? { ...l, ...patch } : l;
  });
  const cards = validCards.map((c) => {
    const patch = cardEdits.get(c.id);
    return patch ? { ...c, ...patch } : c;
  });
  const questions = validQuestions.map((q) => {
    const patch = questionEdits.get(q.id);
    return patch ? { ...q, ...patch } : q;
  });

  return { lessons, cards, questions };
}

function filterValid<T>(
  items: readonly T[],
  schema: { safeParse: (x: unknown) => { success: boolean } },
  label: string,
): T[] {
  const out: T[] = [];
  for (const item of items) {
    const res = schema.safeParse(item);
    if (res.success) {
      out.push(item);
    } else if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(`[content] dropped invalid ${label}`, item);
    }
  }
  return out;
}

export function getLesson(subtopicId: string): Lesson | undefined {
  return allContent.lessons.find((l) => l.subtopicId === subtopicId);
}

export function getCards(subtopicId: string): Card[] {
  return allContent.cards.filter((c) => c.subtopicId === subtopicId);
}

export function getQuestions(subtopicId: string): Question[] {
  return allContent.questions.filter((q) => q.subtopicId === subtopicId);
}

export function getAllSubtopics(): {
  topicId: string;
  subtopicId: string;
  title: string;
}[] {
  return allContent.lessons.map((l) => ({
    // Topic id is the leading number of the subtopicId ("1.1" -> "1").
    topicId: l.subtopicId.split(".")[0] ?? "",
    subtopicId: l.subtopicId,
    title: l.title,
  }));
}

// The plan's dual-layer durability strategy mirrors content via the SW bundle
// precache, not via a Dexie content table. We intentionally keep this as a
// no-op so callers can wire it into boot without a conditional; revisit only
// if Dexie becomes the mirror target.
export async function mirrorToDexie(): Promise<void> {
  return;
}
