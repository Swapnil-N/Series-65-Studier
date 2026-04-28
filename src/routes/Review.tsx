import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import type { Card, Lesson, Question, TopicId } from "../types/content";
import type { ContentEdit } from "../types/state";
import { db } from "../lib/db";
import { bustContentCache, loadContent } from "../lib/content";
import {
  EmptyState,
  ReviewedBadge,
  TopicPicker,
  type TopicPickerValue,
} from "../components/shared";
import { CONTENT_EDITS_CHANGED } from "../components/EditPencil";

// -----------------------------------------------------------------------------
// /review — batch review queue.
//
// Mock exam (`/mock`) draws ONLY from items where `reviewed: true`. Generated
// content ships `reviewed: false`. This route surfaces the unreviewed pool by
// topic and lets the user mark items reviewed in batches without hunting
// through `/quiz` and `/cards` one click at a time.
//
// Three lists: lessons, cards, questions. Filter by topic. Each row gets a
// preview, a "Mark reviewed" button (single-row), and a per-list "Mark all
// visible reviewed" footer button. Marking writes a `db.edits` row with
// `patch: { reviewed: true }` keyed by the item's stable id and dispatches
// CONTENT_EDITS_CHANGED so other open routes refresh.
// -----------------------------------------------------------------------------

type Kind = "lesson" | "card" | "question";

interface RowBase {
  id: string;
  kind: Kind;
  topicId: TopicId;
  preview: string;
  jumpTo: string;
}

function topicOf(subtopicId: string): TopicId {
  const head = subtopicId.split(".")[0];
  return head === "1" || head === "2" || head === "3" || head === "4"
    ? head
    : "1";
}

function previewLesson(l: Lesson): string {
  return l.title;
}

function previewCard(c: Card): string {
  const front = c.front.length > 80 ? c.front.slice(0, 77) + "…" : c.front;
  return front;
}

function previewQuestion(q: Question): string {
  const stem = q.stem.length > 100 ? q.stem.slice(0, 97) + "…" : q.stem;
  return stem;
}

const TOPIC_LABEL: Record<TopicId, string> = {
  "1": "Topic 1 — Economic Factors",
  "2": "Topic 2 — Investment Vehicles",
  "3": "Topic 3 — Recommendations",
  "4": "Topic 4 — Laws & Ethics",
};

export default function Review() {
  const [lessons, setLessons] = useState<RowBase[] | null>(null);
  const [cards, setCards] = useState<RowBase[] | null>(null);
  const [questions, setQuestions] = useState<RowBase[] | null>(null);
  const [topic, setTopic] = useState<TopicPickerValue>("all");
  const [busy, setBusy] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Async-state-after-unmount guard — same pattern as Saved/Settings.
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const refresh = useCallback(async () => {
    const content = await loadContent();
    if (!mountedRef.current) return;
    const unreviewedLessons: RowBase[] = content.lessons
      .filter((l) => !l.reviewed)
      .map((l) => ({
        id: l.subtopicId,
        kind: "lesson" as const,
        topicId: topicOf(l.subtopicId),
        preview: previewLesson(l),
        jumpTo: `/learn?subtopic=${encodeURIComponent(l.subtopicId)}`,
      }));
    const unreviewedCards: RowBase[] = content.cards
      .filter((c) => !c.reviewed)
      .map((c) => ({
        id: c.id,
        kind: "card" as const,
        topicId: topicOf(c.subtopicId),
        preview: previewCard(c),
        jumpTo: "/cards",
      }));
    const unreviewedQuestions: RowBase[] = content.questions
      .filter((q) => !q.reviewed)
      .map((q) => ({
        id: q.id,
        kind: "question" as const,
        topicId: topicOf(q.subtopicId),
        preview: previewQuestion(q),
        jumpTo: "/quiz",
      }));
    setLessons(unreviewedLessons);
    setCards(unreviewedCards);
    setQuestions(unreviewedQuestions);
  }, []);

  useEffect(() => {
    void refresh();
    function onEdits() {
      void refresh();
    }
    window.addEventListener(CONTENT_EDITS_CHANGED, onEdits);
    return () => window.removeEventListener(CONTENT_EDITS_CHANGED, onEdits);
  }, [refresh]);

  const filterByTopic = useCallback(
    (rows: RowBase[] | null): RowBase[] => {
      if (!rows) return [];
      if (topic === "all") return rows;
      return rows.filter((r) => r.topicId === topic);
    },
    [topic],
  );

  const visibleLessons = useMemo(
    () => filterByTopic(lessons),
    [lessons, filterByTopic],
  );
  const visibleCards = useMemo(
    () => filterByTopic(cards),
    [cards, filterByTopic],
  );
  const visibleQuestions = useMemo(
    () => filterByTopic(questions),
    [questions, filterByTopic],
  );

  // Per-topic counts (across ALL items, not filtered) for the chip badges.
  const totals = useMemo(() => {
    const acc: Record<"all" | TopicId, number> = {
      all: 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
    };
    const all = [
      ...(lessons ?? []),
      ...(cards ?? []),
      ...(questions ?? []),
    ];
    for (const r of all) {
      acc[r.topicId] += 1;
      acc.all += 1;
    }
    return acc;
  }, [lessons, cards, questions]);

  const markReviewed = useCallback(
    async (rows: RowBase[]) => {
      if (busy || rows.length === 0) return;
      setBusy(true);
      setStatusMessage(null);
      try {
        const now = Date.now();
        const edits: ContentEdit[] = rows.map((r) => ({
          itemId: r.id,
          type: r.kind,
          patch: { reviewed: true },
          updatedAt: now,
        }));
        // Single transaction so a partial-write can't leave half the batch
        // marked. bulkPut ovewrites by primary key (`itemId`).
        await db.transaction("rw", db.edits, async () => {
          await db.edits.bulkPut(edits);
        });
        bustContentCache();
        window.dispatchEvent(new Event(CONTENT_EDITS_CHANGED));
        setStatusMessage(
          rows.length === 1
            ? "Marked 1 item reviewed."
            : `Marked ${rows.length} items reviewed.`,
        );
      } catch (e) {
        setStatusMessage(
          e instanceof Error ? `Failed: ${e.message}` : "Failed to mark.",
        );
      } finally {
        setBusy(false);
      }
    },
    [busy],
  );

  if (lessons === null || cards === null || questions === null) {
    return (
      <div className="p-4 text-sm text-neutral-500" role="status">
        Loading review queue…
      </div>
    );
  }

  const totalUnreviewed =
    lessons.length + cards.length + questions.length;

  return (
    <div className="flex flex-col gap-4 p-4" data-testid="review">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Review queue</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Mock exam draws only from reviewed content. Mark items reviewed
          here to unlock topics.
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          Per topic: 1: {totals["1"]} • 2: {totals["2"]} • 3: {totals["3"]}{" "}
          • 4: {totals["4"]} • all: {totals.all}
        </p>
      </header>

      {totalUnreviewed === 0 ? (
        <EmptyState
          title="All clear"
          message="Every shipped lesson, card, and question is marked reviewed."
        />
      ) : (
        <>
          <TopicPicker value={topic} onChange={setTopic} />

          {statusMessage ? (
            <div
              role="status"
              className="rounded-md border border-blue-300 bg-blue-50 p-2 text-sm dark:border-blue-700 dark:bg-blue-950"
            >
              {statusMessage}
            </div>
          ) : null}

          <Section
            kind="lesson"
            heading={`Lessons (${visibleLessons.length})`}
            rows={visibleLessons}
            busy={busy}
            onMarkRow={(r) => markReviewed([r])}
            onMarkAll={() => markReviewed(visibleLessons)}
          />
          <Section
            kind="card"
            heading={`Cards (${visibleCards.length})`}
            rows={visibleCards}
            busy={busy}
            onMarkRow={(r) => markReviewed([r])}
            onMarkAll={() => markReviewed(visibleCards)}
          />
          <Section
            kind="question"
            heading={`Questions (${visibleQuestions.length})`}
            rows={visibleQuestions}
            busy={busy}
            onMarkRow={(r) => markReviewed([r])}
            onMarkAll={() => markReviewed(visibleQuestions)}
          />
        </>
      )}
    </div>
  );
}

interface SectionProps {
  kind: Kind;
  heading: string;
  rows: RowBase[];
  busy: boolean;
  onMarkRow: (row: RowBase) => void;
  onMarkAll: () => void;
}

function Section({
  kind,
  heading,
  rows,
  busy,
  onMarkRow,
  onMarkAll,
}: SectionProps) {
  if (rows.length === 0) return null;
  return (
    <section
      className="rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-ink-surface"
      data-testid={`review-section-${kind}`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-base font-semibold">{heading}</h2>
        <button
          type="button"
          onClick={onMarkAll}
          disabled={busy}
          className="min-h-[36px] rounded-md border border-blue-600 bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          data-testid={`review-mark-all-${kind}`}
        >
          Mark all visible reviewed
        </button>
      </div>
      <ul className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
        {rows.map((r) => (
          <li
            key={`${r.kind}:${r.id}`}
            className="flex items-start gap-2 py-2"
            data-testid={`review-row-${r.kind}-${r.id}`}
          >
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="rounded bg-neutral-200 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {TOPIC_LABEL[r.topicId].split(" — ")[0]}
                </span>
                <ReviewedBadge reviewed={false} />
              </div>
              <p className="text-sm text-neutral-800 dark:text-neutral-200">
                {r.preview}
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-1">
              <Link
                to={r.jumpTo}
                className="min-h-[36px] rounded-md border border-neutral-300 bg-white px-2 py-1 text-center text-xs hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
              >
                Open
              </Link>
              <button
                type="button"
                onClick={() => onMarkRow(r)}
                disabled={busy}
                className="min-h-[36px] rounded-md border border-blue-600 bg-blue-600 px-2 py-1 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                data-testid={`review-mark-row-${r.kind}-${r.id}`}
              >
                Mark reviewed
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
