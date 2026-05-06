import { useEffect, useMemo, useState } from "react";
import LessonReader from "../components/LessonReader";
import { EmptyState, ReviewedBadge } from "../components/shared";
import { loadContent } from "../lib/content";
import type { Lesson, TopicId } from "../types/content";

// NASAA topic labels come straight from the plan's topic-weighting table.
// We render them in outline order (1..4) and key navigation by the numeric id.
interface TopicMeta {
  id: TopicId;
  title: string;
}

const TOPICS: TopicMeta[] = [
  { id: "1", title: "Economic Factors & Business Information" },
  { id: "2", title: "Investment Vehicle Characteristics" },
  { id: "3", title: "Client Investment Recommendations & Strategies" },
  { id: "4", title: "Laws, Regulations, Guidelines & Ethics" },
];

type View =
  | { kind: "topics" }
  | { kind: "subtopics"; topicId: TopicId }
  | { kind: "lesson"; topicId: TopicId; subtopicId: string };

export default function Learn() {
  const [lessons, setLessons] = useState<Lesson[] | null>(null);
  const [view, setView] = useState<View>({ kind: "topics" });
  // Bumping this forces `loadContent()` to re-run so "Mark as reviewed" edits
  // applied inside LessonReader are re-read through db.edits on the very next
  // render. Without this, the user would still see `reviewed=false` until a
  // full page reload.
  const [reloadTick, setReloadTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    void loadContent().then((c) => {
      if (!cancelled) setLessons(c.lessons);
    });
    return () => {
      cancelled = true;
    };
  }, [reloadTick]);

  if (view.kind === "topics") {
    return (
      <div className="flex flex-col gap-4 p-4">
        <header>
          <h1 className="text-xl font-semibold">Learn</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Pick a topic to browse its subtopics.
          </p>
        </header>
        <ul className="flex flex-col gap-2" aria-label="Topics">
          {TOPICS.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => setView({ kind: "subtopics", topicId: t.id })}
                className="flex min-h-[44px] w-full items-center justify-between gap-3 rounded-md border border-neutral-300 bg-white px-4 py-3 text-left text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text dark:hover:bg-neutral-800"
              >
                <span>
                  <span className="mr-2 text-neutral-500 dark:text-neutral-400">
                    {t.id}.
                  </span>
                  {t.title}
                </span>
                <span aria-hidden className="text-neutral-400">
                  &rsaquo;
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (view.kind === "subtopics") {
    return (
      <SubtopicList
        topicId={view.topicId}
        lessons={lessons}
        onBack={() => setView({ kind: "topics" })}
        onPick={(subtopicId) =>
          setView({ kind: "lesson", topicId: view.topicId, subtopicId })
        }
      />
    );
  }

  // Lesson view
  return (
    <LessonView
      topicId={view.topicId}
      subtopicId={view.subtopicId}
      lessons={lessons}
      onBack={() =>
        setView({ kind: "subtopics", topicId: view.topicId })
      }
      onReviewed={() => setReloadTick((n) => n + 1)}
    />
  );
}

function topicLabel(topicId: TopicId): string {
  return TOPICS.find((t) => t.id === topicId)?.title ?? `Topic ${topicId}`;
}

interface SubtopicListProps {
  topicId: TopicId;
  lessons: Lesson[] | null;
  onBack: () => void;
  onPick: (subtopicId: string) => void;
}

function SubtopicList({ topicId, lessons, onBack, onPick }: SubtopicListProps) {
  const rows = useMemo(() => {
    if (!lessons) return null;
    // Subtopic ids look like "1.1", "2.3", etc. Filter by the leading topic id
    // via a `${topicId}.` prefix so we never match "10.x" against "1".
    const prefix = `${topicId}.`;
    return lessons
      .filter((l) => l.subtopicId.startsWith(prefix))
      .sort((a, b) => a.subtopicId.localeCompare(b.subtopicId));
  }, [lessons, topicId]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <header className="flex flex-col gap-2">
        <BackButton label="All topics" onClick={onBack} />
        <h1 className="text-xl font-semibold">
          {topicId}. {topicLabel(topicId)}
        </h1>
      </header>

      {rows === null ? (
        <div className="p-4 text-sm text-neutral-500" role="status">
          Loading subtopics…
        </div>
      ) : rows.length === 0 ? (
        <EmptyState
          title="No subtopics yet."
          message="Content for this topic hasn't been generated."
        />
      ) : (
        <ul className="flex flex-col gap-2" aria-label="Subtopics">
          {rows.map((l) => (
            <li key={l.subtopicId}>
              <button
                type="button"
                onClick={() => onPick(l.subtopicId)}
                className="flex min-h-[44px] w-full items-center justify-between gap-3 rounded-md border border-neutral-300 bg-white px-4 py-3 text-left text-sm text-neutral-900 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text dark:hover:bg-neutral-800"
              >
                <span className="flex flex-col">
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {l.subtopicId}
                  </span>
                  <span className="font-medium">{l.title}</span>
                </span>
                <ReviewedBadge reviewed={l.reviewed} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface LessonViewProps {
  topicId: TopicId;
  subtopicId: string;
  lessons: Lesson[] | null;
  onBack: () => void;
  onReviewed: () => void;
}

function LessonView({
  topicId,
  subtopicId,
  lessons,
  onBack,
  onReviewed,
}: LessonViewProps) {
  const lesson = useMemo(
    () => lessons?.find((l) => l.subtopicId === subtopicId) ?? null,
    [lessons, subtopicId],
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="px-4 pt-4">
        <BackButton
          label={`${topicId}. ${topicLabel(topicId)}`}
          onClick={onBack}
        />
      </div>
      {lessons === null ? (
        <div className="p-4 text-sm text-neutral-500" role="status">
          Loading lesson…
        </div>
      ) : lesson ? (
        <LessonReader lesson={lesson} onReviewed={onReviewed} />
      ) : (
        <EmptyState
          title="Lesson not found."
          message={`No lesson for subtopic ${subtopicId}.`}
        />
      )}
    </div>
  );
}

function BackButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-[44px] items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400"
    >
      <span aria-hidden>&lsaquo;</span>
      <span>{label}</span>
    </button>
  );
}
