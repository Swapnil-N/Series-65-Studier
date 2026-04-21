import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FlashcardSession } from "./FlashcardSession";
import { db, DEFAULT_SETTINGS } from "../lib/db";
import type { Card } from "../types/content";

const NOW = 1_700_000_000_000;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const cardA: Card = {
  id: "aaaaaaaaaaaa",
  subtopicId: "1.1",
  front: "Front of A",
  back: "Back of A",
  citation: { source: "NASAA", ref: "Section 1.A" },
  reviewed: true,
};

const cardB: Card = {
  id: "bbbbbbbbbbbb",
  subtopicId: "1.1",
  front: "Front of B",
  back: "Back of B",
  citation: { source: "NASAA", ref: "Section 1.B" },
  reviewed: false,
};

beforeEach(async () => {
  await db.delete();
  await db.open();
});

afterEach(async () => {
  await db.close();
});

describe("FlashcardSession", () => {
  it("shows 'Nothing due' when all cards are scheduled in the future", async () => {
    // Persist states whose `due` is well past NOW → no cards show up.
    await db.cardState.put({
      cardId: cardA.id,
      stability: 10,
      difficulty: 5,
      elapsedDays: 0,
      scheduledDays: 30,
      reps: 3,
      lapses: 0,
      state: 2,
      lastReview: NOW - MS_PER_DAY,
      due: NOW + 30 * MS_PER_DAY,
    });
    await db.cardState.put({
      cardId: cardB.id,
      stability: 8,
      difficulty: 5,
      elapsedDays: 0,
      scheduledDays: 20,
      reps: 2,
      lapses: 0,
      state: 2,
      lastReview: NOW - MS_PER_DAY,
      due: NOW + 20 * MS_PER_DAY,
    });

    render(
      <FlashcardSession
        cards={[cardA, cardB]}
        now={NOW}
        settings={DEFAULT_SETTINGS}
      />,
    );

    await waitFor(() =>
      expect(screen.getByText(/nothing due/i)).toBeInTheDocument(),
    );
  });

  it("shows the front of a new card and reveals the back on Space", async () => {
    render(
      <FlashcardSession
        cards={[cardA]}
        now={NOW}
        settings={DEFAULT_SETTINGS}
      />,
    );

    await waitFor(() =>
      expect(screen.getByTestId("flashcard-front")).toBeInTheDocument(),
    );
    expect(screen.getByText("Front of A")).toBeInTheDocument();
    expect(screen.queryByTestId("flashcard-back")).not.toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(document, { key: " " });
    });
    expect(await screen.findByTestId("flashcard-back")).toBeInTheDocument();
    expect(screen.getByText("Back of A")).toBeInTheDocument();
  });

  it("persists a cardState row and increments dailyActivity after a rating", async () => {
    render(
      <FlashcardSession
        cards={[cardA]}
        now={NOW}
        settings={DEFAULT_SETTINGS}
      />,
    );

    await waitFor(() =>
      expect(screen.getByTestId("flashcard-front")).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    await screen.findByTestId("flashcard-back");
    fireEvent.click(screen.getByRole("button", { name: "Good" }));

    await waitFor(async () => {
      const s = await db.cardState.get(cardA.id);
      expect(s).toBeTruthy();
      expect(s?.reps).toBeGreaterThanOrEqual(1);
    });

    // dailyActivity row created with cardsReviewed == 1
    const activity = await db.dailyActivity.toArray();
    expect(activity.length).toBe(1);
    expect(activity[0].cardsReviewed).toBe(1);
  });

  it("Undo restores the prior state and decrements dailyActivity", async () => {
    render(
      <FlashcardSession
        cards={[cardA, cardB]}
        now={NOW}
        settings={DEFAULT_SETTINGS}
      />,
    );
    await waitFor(() =>
      expect(screen.getByTestId("flashcard-front")).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByRole("button", { name: /reveal/i }));
    await screen.findByTestId("flashcard-back");
    fireEvent.click(screen.getByRole("button", { name: "Good" }));

    await waitFor(async () => {
      expect(await db.cardState.get(cardA.id)).toBeTruthy();
    });

    // Undo should now be enabled and restore the prior (non-existent) state.
    const undoBtn = screen.getByRole("button", { name: /^undo$/i });
    expect(undoBtn).not.toBeDisabled();
    await act(async () => {
      fireEvent.click(undoBtn);
    });

    await waitFor(async () => {
      expect(await db.cardState.get(cardA.id)).toBeUndefined();
    });
    // dailyActivity.cardsReviewed must have decremented back to 0.
    const all = await db.dailyActivity.toArray();
    const total = all.reduce((acc, r) => acc + r.cardsReviewed, 0);
    expect(total).toBe(0);
  });
});
