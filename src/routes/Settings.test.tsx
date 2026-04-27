import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import SettingsDefault, {
  applyAppearanceSettings,
  dumpAll,
  restoreAll,
  validateImport,
} from "./Settings";
const Settings = Object.assign(SettingsDefault, {
  dumpAll,
  restoreAll,
  validateImport,
});
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

  it("export → import round-trips table contents (through real dumpAll/validateImport/restoreAll)", async () => {
    // Drives the ACTUAL production code path, not a local re-implementation.
    await db.bookmarks.put({
      itemId: "round-trip",
      type: "card",
      createdAt: 1234,
    });
    const exported = await Settings.dumpAll();
    const before = await db.bookmarks.toArray();

    // Corrupt the export: inject a junk row the validator must drop.
    const attempts = exported.tables.attempts;
    const corruptedAttempts = [
      ...attempts,
      { topicId: "5", correct: "not-a-bool" } as unknown,
    ];
    const corrupted = {
      ...exported,
      tables: { ...exported.tables, attempts: corruptedAttempts },
    };

    const validated = Settings.validateImport(corrupted);
    expect(validated).not.toBeNull();
    // Validator reports the corrupt row as dropped.
    expect(validated!.warnings.some((w) => w.startsWith("attempts["))).toBe(
      true,
    );
    // Valid bookmark row survived validation.
    expect(validated!.rows.bookmarks).toEqual(before);

    await db.bookmarks.clear();
    await db.attempts.clear();
    await Settings.restoreAll(validated!);

    const afterBookmarks = await db.bookmarks.toArray();
    expect(afterBookmarks.find((b) => b.itemId === "round-trip")).toBeDefined();
    // The corrupt attempt row never landed.
    const afterAttempts = await db.attempts.toArray();
    expect(
      afterAttempts.find((a) => (a as unknown as { topicId: string }).topicId === "5"),
    ).toBeUndefined();
  });

  it("validateImport rejects a top-level shape that isn't a v1 state export", () => {
    expect(Settings.validateImport(null)).toBeNull();
    expect(Settings.validateImport({ version: 99 })).toBeNull();
    expect(
      Settings.validateImport({ version: 1, tables: "not-an-object" }),
    ).toBeNull();
  });

  it("range-bounds settings rows on import — fontScale 9999 is dropped (review M4 / pass-5)", () => {
    // Without range bounds, a hostile import could land fontScale: 9999
    // and break the page on next mount.
    const baseTables = {
      cardState: [],
      attempts: [],
      missedQueue: [],
      bookmarks: [],
      notes: [],
      edits: [],
      dailyActivity: [],
      mockSessions: [],
      settings: [
        {
          key: "app",
          value: {
            darkMode: "auto",
            highContrast: false,
            fontScale: 9999, // out of range
            newCardsPerDay: 30,
            targetRetention: 0.9,
            cramMode: false,
            dailyGoalCards: 20,
            dailyGoalQuestions: 10,
            lastExportAt: 0,
          },
        },
      ],
    };
    const validated = Settings.validateImport({
      version: 1,
      exportedAt: 0,
      tables: baseTables,
    });
    expect(validated).not.toBeNull();
    expect(validated!.rows.settings).toEqual([]);
    expect(
      validated!.warnings.some((w) => w.startsWith("settings[")),
    ).toBe(true);
  });

  it("range-bounds mockSessions.pausedMs — negative is dropped", () => {
    const baseTables = {
      cardState: [],
      attempts: [],
      missedQueue: [],
      bookmarks: [],
      notes: [],
      edits: [],
      dailyActivity: [],
      mockSessions: [
        {
          id: "s1",
          startedAt: 0,
          pausedMs: -1, // out of range
          questionIds: [],
          answers: [],
          currentIndex: 0,
          status: "active",
        },
      ],
      settings: [],
    };
    const validated = Settings.validateImport({
      version: 1,
      exportedAt: 0,
      tables: baseTables,
    });
    expect(validated).not.toBeNull();
    expect(validated!.rows.mockSessions).toEqual([]);
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
