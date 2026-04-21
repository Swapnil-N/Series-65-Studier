import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Settings, { applyAppearanceSettings } from "./Settings";
import { db, getSettings } from "../lib/db";

beforeEach(async () => {
  await db.delete();
  await db.open();
  // Reset <html> before each test so class toggles don't leak.
  document.documentElement.classList.remove("dark", "high-contrast");
  document.documentElement.style.removeProperty("--font-scale");
});

afterEach(async () => {
  await db.close();
});

describe("Settings", () => {
  it("persists dark-mode selection and applies .dark class on <html>", async () => {
    await act(async () => {
      render(<Settings />);
    });
    await waitFor(() =>
      expect(screen.getByTestId("appearance-section")).toBeInTheDocument(),
    );

    fireEvent.click(screen.getByTestId("darkmode-dark"));

    await waitFor(async () => {
      const s = await getSettings();
      expect(s.darkMode).toBe("dark");
    });
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("font-scale slider updates --font-scale CSS variable and persists", async () => {
    await act(async () => {
      render(<Settings />);
    });
    const slider = await screen.findByTestId<HTMLInputElement>(
      "font-scale-slider",
    );

    fireEvent.change(slider, { target: { value: "1.25" } });

    await waitFor(async () => {
      const s = await getSettings();
      expect(s.fontScale).toBeCloseTo(1.25, 2);
    });
    expect(document.documentElement.style.getPropertyValue("--font-scale")).toBe(
      "1.25",
    );
  });

  it("export state triggers a download and updates lastExportAt", async () => {
    // jsdom doesn't implement URL.createObjectURL / revokeObjectURL — install
    // stubs first, then spy on the stubs.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const urlAny = URL as any;
    if (typeof urlAny.createObjectURL !== "function") {
      urlAny.createObjectURL = () => "blob:fake";
    }
    if (typeof urlAny.revokeObjectURL !== "function") {
      urlAny.revokeObjectURL = () => undefined;
    }
    const createSpy = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:fake");
    const revokeSpy = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => undefined);

    await act(async () => {
      render(<Settings />);
    });
    const btn = await screen.findByTestId("export-state-button");

    await act(async () => {
      fireEvent.click(btn);
    });

    await waitFor(() => expect(createSpy).toHaveBeenCalled());
    await waitFor(async () => {
      const s = await getSettings();
      expect(s.lastExportAt).toBeGreaterThan(0);
    });

    createSpy.mockRestore();
    revokeSpy.mockRestore();
  });

  it("detects a stale edit whose itemId is not in shipped content", async () => {
    await db.edits.put({
      itemId: "ghost-id-0000",
      type: "card",
      patch: { front: "dangling edit" },
      updatedAt: Date.now(),
    });
    // Plus a valid edit on the sample lesson so we know the filter only picks
    // the stale one.
    await db.edits.put({
      itemId: "1.1",
      type: "lesson",
      patch: { bodyMd: "override" },
      updatedAt: Date.now(),
    });

    await act(async () => {
      render(<Settings />);
    });

    // Exactly one stale row renders.
    const row = await screen.findByTestId("stale-edit-ghost-id-0000");
    expect(row).toBeInTheDocument();
    expect(screen.queryByTestId("stale-edit-1.1")).toBeNull();

    // Remove it.
    fireEvent.click(screen.getByTestId("stale-edit-remove-ghost-id-0000"));

    await waitFor(async () => {
      expect(await db.edits.get("ghost-id-0000")).toBeUndefined();
    });
  });

  it("export → import round-trips table contents", async () => {
    // Seed a distinctive row in bookmarks; export; clear; import; assert it
    // came back.
    await db.bookmarks.put({
      itemId: "round-trip",
      type: "card",
      createdAt: 1234,
    });

    // Dump all tables (mirrors Settings.dumpAll).
    const all: Record<string, unknown[]> = {};
    for (const name of [
      "cardState",
      "attempts",
      "missedQueue",
      "bookmarks",
      "notes",
      "edits",
      "dailyActivity",
      "mockSessions",
      "settings",
    ] as const) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      all[name] = await (db as unknown as Record<string, any>)[name].toArray();
    }
    const exported = { version: 1 as const, exportedAt: Date.now(), tables: all };
    const before = await db.bookmarks.toArray();

    // Clear all user tables.
    await db.bookmarks.clear();
    expect(await db.bookmarks.count()).toBe(0);

    // Import by reusing the same table names (mirrors restoreAll).
    for (const name of Object.keys(all)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const t = (db as unknown as Record<string, any>)[name];
      await t.clear();
      const rows = (exported.tables as Record<string, unknown[]>)[name];
      if (rows.length > 0) await t.bulkPut(rows);
    }

    const after = await db.bookmarks.toArray();
    expect(after).toEqual(before);
    expect(after.find((b) => b.itemId === "round-trip")).toBeDefined();
  });
});

describe("applyAppearanceSettings", () => {
  it("toggles .dark / .high-contrast classes and sets --font-scale", () => {
    applyAppearanceSettings({
      darkMode: "dark",
      highContrast: true,
      fontScale: 1.15,
      newCardsPerDay: 30,
      targetRetention: 0.9,
      cramMode: false,
      dailyGoalCards: 20,
      dailyGoalQuestions: 10,
      lastExportAt: 0,
    });
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.classList.contains("high-contrast")).toBe(
      true,
    );
    expect(document.documentElement.style.getPropertyValue("--font-scale")).toBe(
      "1.15",
    );

    applyAppearanceSettings({
      darkMode: "light",
      highContrast: false,
      fontScale: 1,
      newCardsPerDay: 30,
      targetRetention: 0.9,
      cramMode: false,
      dailyGoalCards: 20,
      dailyGoalQuestions: 10,
      lastExportAt: 0,
    });
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(document.documentElement.classList.contains("high-contrast")).toBe(
      false,
    );
  });
});
