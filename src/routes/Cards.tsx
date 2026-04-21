import { useEffect, useMemo, useState } from "react";
import { FlashcardSession } from "../components/FlashcardSession";
import { EmptyState, TopicPicker, type TopicPickerValue } from "../components/shared";
import { loadContent } from "../lib/content";
import type { Card } from "../types/content";

export default function Cards() {
  const [allCards, setAllCards] = useState<Card[] | null>(null);
  const [topic, setTopic] = useState<TopicPickerValue>("all");

  useEffect(() => {
    let cancelled = false;
    void loadContent().then((c) => {
      if (!cancelled) setAllCards(c.cards);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!allCards) return null;
    if (topic === "all") return allCards;
    // Filter by subtopicId prefix — e.g. topic "1" matches "1.1", "1.2", …
    const prefix = `${topic}.`;
    return allCards.filter((c) => c.subtopicId.startsWith(prefix));
  }, [allCards, topic]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Flashcards</h1>
        <TopicPicker value={topic} onChange={setTopic} />
      </header>

      {filtered === null ? (
        <div className="p-4 text-sm text-neutral-500" role="status">
          Loading cards…
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          title="No cards in this topic."
          message="Pick a different topic or generate content for this one."
        />
      ) : (
        <FlashcardSession cards={filtered} />
      )}
    </div>
  );
}
