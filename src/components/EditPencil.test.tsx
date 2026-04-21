import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import EditPencil from "./EditPencil";
import { db } from "../lib/db";

beforeEach(async () => {
  await db.delete();
  await db.open();
});

afterEach(async () => {
  await db.close();
});

describe("EditPencil", () => {
  it("opens a modal pre-filled with currentText and writes an edit row on Save", async () => {
    render(
      <EditPencil
        type="card"
        itemId="card-xyz"
        currentText="original front"
        field="front"
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /edit this item/i }));

    const textarea = await screen.findByTestId<HTMLTextAreaElement>(
      "edit-pencil-textarea",
    );
    expect(textarea.value).toBe("original front");

    fireEvent.change(textarea, { target: { value: "edited front" } });
    fireEvent.click(screen.getByTestId("edit-pencil-save"));

    await waitFor(async () => {
      const row = await db.edits.get("card-xyz");
      expect(row).toBeDefined();
      expect(row?.type).toBe("card");
      expect((row?.patch as { front?: string }).front).toBe("edited front");
    });

    // Modal closes after save.
    await waitFor(() =>
      expect(screen.queryByTestId("edit-pencil-modal")).toBeNull(),
    );
  });

  it("Cancel closes the modal without touching db.edits", async () => {
    render(
      <EditPencil
        type="card"
        itemId="card-cancel"
        currentText="keep me"
        field="front"
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /edit this item/i }));
    const textarea = await screen.findByTestId<HTMLTextAreaElement>(
      "edit-pencil-textarea",
    );
    fireEvent.change(textarea, { target: { value: "should not persist" } });
    fireEvent.click(screen.getByTestId("edit-pencil-cancel"));

    await waitFor(() =>
      expect(screen.queryByTestId("edit-pencil-modal")).toBeNull(),
    );
    const row = await db.edits.get("card-cancel");
    expect(row).toBeUndefined();
  });

  it("Clear override deletes the existing edit row", async () => {
    await db.edits.put({
      itemId: "card-with-edit",
      type: "card",
      patch: { front: "stored" },
      updatedAt: Date.now(),
    });

    render(
      <EditPencil
        type="card"
        itemId="card-with-edit"
        currentText="original"
        field="front"
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /edit this item/i }));

    // Clear button appears only when an existing edit row is loaded.
    const clear = await screen.findByTestId("edit-pencil-clear");
    fireEvent.click(clear);

    await waitFor(async () => {
      const row = await db.edits.get("card-with-edit");
      expect(row).toBeUndefined();
    });
    await waitFor(() =>
      expect(screen.queryByTestId("edit-pencil-modal")).toBeNull(),
    );
  });

  it("dispatches a content-edits-changed event after save", async () => {
    render(
      <EditPencil
        type="lesson"
        itemId="1.1"
        currentText="body"
        field="bodyMd"
      />,
    );

    let fired = 0;
    window.addEventListener("content-edits-changed", () => {
      fired += 1;
    });

    fireEvent.click(screen.getByRole("button", { name: /edit this item/i }));
    const textarea = await screen.findByTestId<HTMLTextAreaElement>(
      "edit-pencil-textarea",
    );
    fireEvent.change(textarea, { target: { value: "new body" } });
    fireEvent.click(screen.getByTestId("edit-pencil-save"));

    await waitFor(() => expect(fired).toBeGreaterThan(0));
  });
});
