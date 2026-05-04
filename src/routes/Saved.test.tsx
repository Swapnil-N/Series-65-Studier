import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Saved from "./Saved";
import { db } from "../lib/db";
import { bustContentCache, loadContent } from "../lib/content";

beforeEach(async () => {
  await db.delete();
  await db.open();
  bustContentCache();
});

afterEach(async () => {
  await db.close();
});

describe("Saved", () => {
  it("shows an empty state on both tabs when there are no bookmarks or notes", async () => {
    render(<Saved />);

    // Bookmarks tab active by default.
    await waitFor(() =>
      expect(screen.getByText(/no bookmarks yet/i)).toBeInTheDocument(),
    );

    // Switch to notes — should also be empty.
    fireEvent.click(screen.getByRole("tab", { name: /notes/i }));
    await waitFor(() =>
      expect(screen.getByText(/no notes yet/i)).toBeInTheDocument(),
    );
  });

  it("lists bookmarks with a preview, and removing one clears the row", async () => {
    // Pin to whichever lesson is actually loaded — title differs between
    // the dev stub ("Business Cycles") and real generated content
    // ("Basic Economic Concepts"), so look up the title at test time.
    const { lessons } = await loadContent();
    const target = lessons.find((l) => l.subtopicId === "1.1") ?? lessons[0];
    if (!target) throw new Error("No lessons loaded — cannot run test");

    await db.bookmarks.put({
      itemId: target.subtopicId,
      type: "lesson",
      createdAt: Date.now(),
    });

    await act(async () => {
      render(<Saved />);
    });

    const row = await screen.findByTestId(
      `bookmark-row-${target.subtopicId}`,
    );
    expect(row).toBeInTheDocument();
    // Preview pulls the live lesson title.
    expect(row.textContent).toContain(target.title);

    fireEvent.click(
      screen.getByTestId(`bookmark-remove-${target.subtopicId}`),
    );

    await waitFor(() =>
      expect(
        screen.queryByTestId(`bookmark-row-${target.subtopicId}`),
      ).toBeNull(),
    );
    const rows = await db.bookmarks.toArray();
    expect(rows).toEqual([]);
  });

  it("lists notes and supports delete", async () => {
    await db.notes.put({
      itemId: "1.1",
      body: "Remember the four phases!",
      updatedAt: Date.now(),
    });

    await act(async () => {
      render(<Saved />);
    });

    fireEvent.click(screen.getByRole("tab", { name: /notes/i }));
    const row = await screen.findByTestId("note-row-1.1");
    expect(row.textContent).toMatch(/Remember the four phases/);

    fireEvent.click(screen.getByTestId("note-delete-1.1"));

    await waitFor(() =>
      expect(screen.queryByTestId("note-row-1.1")).toBeNull(),
    );
    expect(await db.notes.toArray()).toEqual([]);
  });
});
