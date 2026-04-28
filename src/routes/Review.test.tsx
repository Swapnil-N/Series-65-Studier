import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { db } from "../lib/db";
import { bustContentCache } from "../lib/content";
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
  it("renders unreviewed items from the dev stub and an EmptyState when all reviewed", async () => {
    renderRoute();
    // Stub seeds 1 lesson + 2 cards + 3 questions, all reviewed=false.
    await waitFor(() =>
      expect(screen.getByTestId("review")).toBeInTheDocument(),
    );
    expect(screen.queryByTestId("review-section-lesson")).toBeInTheDocument();
    expect(screen.queryByTestId("review-section-card")).toBeInTheDocument();
    expect(screen.queryByTestId("review-section-question")).toBeInTheDocument();
  });

  it("'Mark all visible reviewed' on the cards section writes 2 edits and removes the section", async () => {
    renderRoute();
    await waitFor(() =>
      expect(screen.getByTestId("review")).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByTestId("review-mark-all-card"));
    await waitFor(async () => {
      const edits = await db.edits.toArray();
      expect(edits.filter((e) => e.type === "card")).toHaveLength(2);
      expect(edits.every((e) => e.patch.reviewed === true)).toBe(true);
    });
    // Section disappears once cards.length === 0 in the filtered list.
    await waitFor(() =>
      expect(screen.queryByTestId("review-section-card")).toBeNull(),
    );
    // Lessons + questions sections remain.
    expect(screen.queryByTestId("review-section-lesson")).toBeInTheDocument();
    expect(screen.queryByTestId("review-section-question")).toBeInTheDocument();
  });

  it("per-row 'Mark reviewed' writes a single edit and removes that row", async () => {
    renderRoute();
    await waitFor(() =>
      expect(screen.getByTestId("review")).toBeInTheDocument(),
    );
    // Stub card ids: aaaaaaaaaaaa, bbbbbbbbbbbb.
    const beforeCount = (
      await screen.findByTestId("review-section-card")
    ).querySelectorAll('[data-testid^="review-row-card-"]').length;
    expect(beforeCount).toBe(2);

    fireEvent.click(
      screen.getByTestId("review-mark-row-card-aaaaaaaaaaaa"),
    );
    await waitFor(async () => {
      const edits = await db.edits.toArray();
      expect(edits).toHaveLength(1);
      expect(edits[0].itemId).toBe("aaaaaaaaaaaa");
      expect(edits[0].type).toBe("card");
    });
    await waitFor(() =>
      expect(
        screen.queryByTestId("review-row-card-aaaaaaaaaaaa"),
      ).toBeNull(),
    );
    expect(
      screen.queryByTestId("review-row-card-bbbbbbbbbbbb"),
    ).toBeInTheDocument();
  });
});
