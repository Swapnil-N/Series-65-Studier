import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { db } from "../lib/db";
import { bustContentCache, loadContent } from "../lib/content";
import Review from "./Review";

beforeEach(async () => {
  await db.delete();
  await db.open();
  bustContentCache();
});

afterEach(async () => {
  await db.close();
});

function renderRoute() {
  return render(
    <MemoryRouter>
      <Review />
    </MemoryRouter>,
  );
}

describe("Review queue", () => {
  it("renders unreviewed items from whatever content is loaded", async () => {
    const { lessons, cards, questions } = await loadContent();
    const expectLesson = lessons.some((l) => !l.reviewed);
    const expectCard = cards.some((c) => !c.reviewed);
    const expectQuestion = questions.some((q) => !q.reviewed);

    renderRoute();
    await waitFor(() =>
      expect(screen.getByTestId("review")).toBeInTheDocument(),
    );
    if (expectLesson) {
      expect(screen.queryByTestId("review-section-lesson")).toBeInTheDocument();
    }
    if (expectCard) {
      expect(screen.queryByTestId("review-section-card")).toBeInTheDocument();
    }
    if (expectQuestion) {
      expect(
        screen.queryByTestId("review-section-question"),
      ).toBeInTheDocument();
    }
    if (!expectLesson && !expectCard && !expectQuestion) {
      // All reviewed — empty state should render.
      expect(screen.getByText(/all clear/i)).toBeInTheDocument();
    }
  });

  it("'Mark all visible reviewed' on the cards section writes one edit per card", async () => {
    const { cards } = await loadContent();
    const unreviewedCardCount = cards.filter((c) => !c.reviewed).length;
    if (unreviewedCardCount === 0) return; // nothing to test against

    renderRoute();
    await waitFor(() =>
      expect(screen.getByTestId("review")).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByTestId("review-mark-all-card"));
    await waitFor(async () => {
      const edits = await db.edits.toArray();
      expect(edits.filter((e) => e.type === "card")).toHaveLength(
        unreviewedCardCount,
      );
      expect(edits.every((e) => e.patch.reviewed === true)).toBe(true);
    });
    await waitFor(() =>
      expect(screen.queryByTestId("review-section-card")).toBeNull(),
    );
  });

  it("per-row 'Mark reviewed' writes a single edit and removes that row", async () => {
    const { cards } = await loadContent();
    const firstUnreviewed = cards.find((c) => !c.reviewed);
    if (!firstUnreviewed) return; // skip if everything's already reviewed

    renderRoute();
    await waitFor(() =>
      expect(screen.getByTestId("review")).toBeInTheDocument(),
    );
    const rowTestId = `review-mark-row-card-${firstUnreviewed.id}`;
    fireEvent.click(screen.getByTestId(rowTestId));
    await waitFor(async () => {
      const edits = await db.edits.toArray();
      expect(edits).toHaveLength(1);
      expect(edits[0].itemId).toBe(firstUnreviewed.id);
      expect(edits[0].type).toBe("card");
    });
    await waitFor(() =>
      expect(
        screen.queryByTestId(`review-row-card-${firstUnreviewed.id}`),
      ).toBeNull(),
    );
  });
});
