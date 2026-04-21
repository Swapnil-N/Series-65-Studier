import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Saved from "./Saved";
import { db } from "../lib/db";

beforeEach(async () => {
  await db.delete();
  await db.open();
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
    // Seed a bookmark pointing at the sample lesson.
    await db.bookmarks.put({
      itemId: "1.1",
      type: "lesson",
      createdAt: Date.now(),
    });

    await act(async () => {
      render(<Saved />);
    });

    const row = await screen.findByTestId("bookmark-row-1.1");
    expect(row).toBeInTheDocument();
    // Lesson title pulled from shipped content.
    expect(row.textContent).toMatch(/Business Cycles/i);

    fireEvent.click(screen.getByTestId("bookmark-remove-1.1"));

    await waitFor(() =>
      expect(screen.queryByTestId("bookmark-row-1.1")).toBeNull(),
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
