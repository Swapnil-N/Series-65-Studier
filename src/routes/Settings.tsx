import { useCallback, useEffect, useMemo, useState } from "react";
import { db, DEFAULT_SETTINGS, getSettings, saveSettings } from "../lib/db";
import type { AppSettings, ContentEdit } from "../types/state";
import { loadContent } from "../lib/content";
import { CONTENT_EDITS_CHANGED } from "../components/EditPencil";

// -----------------------------------------------------------------------------
// Settings route (A11)
// -----------------------------------------------------------------------------
//
// Owns presentation for the app's appearance / study / data preferences.
// Settings are persisted through the A2 helpers (`getSettings`/`saveSettings`);
// we never touch `db.settings` directly. A small helper
// (`applyAppearanceSettings`) is exported so a future commit in `main.tsx` can
// wire it into app boot — see the handoff note in the plan.

/** Dexie tables whose contents we export/import as JSON. Order is intentional:
 *  `settings` last so a failing import never leaves mismatched config. */
const EXPORT_TABLES = [
  "cardState",
  "attempts",
  "missedQueue",
  "bookmarks",
  "notes",
  "edits",
  "dailyActivity",
  "mockSessions",
  "settings",
] as const;
type ExportTable = (typeof EXPORT_TABLES)[number];

export interface StateExport {
  version: 1;
  exportedAt: number;
  tables: Record<ExportTable, unknown[]>;
}

/** YYYY-MM-DD for the downloaded-file name. */
function today(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

/**
 * Mutate `<html>` to reflect the user's appearance preferences. Exposed so a
 * future `main.tsx`/`App.tsx` wiring can call it at first paint — we can't
 * touch those files from A11.
 *
 * - `darkMode: "dark"` → force `.dark` class.
 * - `darkMode: "light"` → clear `.dark` class.
 * - `darkMode: "auto"` → honour `prefers-color-scheme`.
 * - `highContrast` → adds `.high-contrast` class (caller defines the CSS hook).
 * - `fontScale` → sets `--font-scale` CSS variable.
 */
export function applyAppearanceSettings(s: AppSettings): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  let wantDark = false;
  if (s.darkMode === "dark") wantDark = true;
  else if (s.darkMode === "auto") {
    wantDark =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  root.classList.toggle("dark", wantDark);
  root.classList.toggle("high-contrast", s.highContrast);
  root.style.setProperty("--font-scale", String(s.fontScale));
}

/** Trigger a download of the given Blob. Browser-only. */
function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Revoke on the next tick so Safari has a chance to read the object-url
  // before it's released.
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

async function dumpAll(): Promise<StateExport> {
  const tables = {} as Record<ExportTable, unknown[]>;
  for (const name of EXPORT_TABLES) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const table = (db as unknown as Record<string, any>)[name];
    tables[name] = await table.toArray();
  }
  return { version: 1, exportedAt: Date.now(), tables };
}

async function restoreAll(exported: StateExport): Promise<void> {
  for (const name of EXPORT_TABLES) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const table = (db as unknown as Record<string, any>)[name];
    await table.clear();
    const rows = exported.tables[name] ?? [];
    if (rows.length > 0) await table.bulkPut(rows);
  }
}

function isStateExport(x: unknown): x is StateExport {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  if (o.version !== 1) return false;
  if (typeof o.tables !== "object" || o.tables === null) return false;
  const t = o.tables as Record<string, unknown>;
  return EXPORT_TABLES.every((name) => Array.isArray(t[name]));
}

export default function Settings() {
  const [settings, setSettings] = useState<AppSettings>(() => ({
    ...DEFAULT_SETTINGS,
  }));
  const [loaded, setLoaded] = useState(false);
  const [persisted, setPersisted] = useState<boolean | null>(null);
  const [staleEdits, setStaleEdits] = useState<ContentEdit[]>([]);
  const [importConfirm, setImportConfirm] = useState<StateExport | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Boot: load settings, compute stale edits, probe storage persistence.
  const loadAll = useCallback(async () => {
    const s = await getSettings();
    setSettings(s);
    applyAppearanceSettings(s);
    const [edits, content] = await Promise.all([
      db.edits.toArray(),
      loadContent(),
    ]);
    const knownIds = new Set<string>([
      ...content.lessons.map((l) => l.subtopicId),
      ...content.cards.map((c) => c.id),
      ...content.questions.map((q) => q.id),
    ]);
    setStaleEdits(edits.filter((e) => !knownIds.has(e.itemId)));
    setLoaded(true);
  }, []);

  useEffect(() => {
    void loadAll();
  }, [loadAll]);

  useEffect(() => {
    // First-load persistence probe. iOS ignores `persist()` but we still ask.
    if (typeof navigator === "undefined" || !navigator.storage) return;
    let cancelled = false;
    (async () => {
      try {
        // Request persistence (no-op if already persisted).
        if (typeof navigator.storage.persist === "function") {
          await navigator.storage.persist();
        }
        if (typeof navigator.storage.persisted === "function") {
          const p = await navigator.storage.persisted();
          if (!cancelled) setPersisted(p);
        }
      } catch {
        // Non-fatal; UI renders "unknown" in that case.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Listen for edit changes so stale-edits count stays fresh if the user
  // edits something in another tab / route.
  useEffect(() => {
    function onEdits() {
      void loadAll();
    }
    window.addEventListener(CONTENT_EDITS_CHANGED, onEdits);
    return () => window.removeEventListener(CONTENT_EDITS_CHANGED, onEdits);
  }, [loadAll]);

  const persistAndApply = useCallback(async (next: AppSettings) => {
    setSettings(next);
    applyAppearanceSettings(next);
    await saveSettings(next);
  }, []);

  const staleSinceExportMs = Date.now() - settings.lastExportAt;
  const FIVE_DAYS = 5 * 24 * 60 * 60 * 1000;
  const showExportWarning =
    settings.lastExportAt > 0 && staleSinceExportMs > FIVE_DAYS;
  // If lastExportAt == 0 (never exported) we show a milder banner too so the
  // user knows to export eventually.
  const showNeverExportedBanner = settings.lastExportAt === 0;

  const handleExportState = useCallback(async () => {
    try {
      const dump = await dumpAll();
      const blob = new Blob([JSON.stringify(dump, null, 2)], {
        type: "application/json",
      });
      triggerDownload(blob, `study-export-${today()}.json`);
      const nowMs = Date.now();
      // Refresh the in-memory view after persisting so the banner clears.
      const next: AppSettings = { ...settings, lastExportAt: nowMs };
      await persistAndApply(next);
      setStatusMessage("Exported.");
    } catch (e) {
      setStatusMessage(
        e instanceof Error ? `Export failed: ${e.message}` : "Export failed.",
      );
    }
  }, [settings, persistAndApply]);

  const handleExportEdits = useCallback(async () => {
    try {
      const edits = await db.edits.toArray();
      const blob = new Blob([JSON.stringify({ version: 1, edits }, null, 2)], {
        type: "application/json",
      });
      triggerDownload(blob, `study-edits-${today()}.json`);
      setStatusMessage("Edits exported.");
    } catch (e) {
      setStatusMessage(
        e instanceof Error
          ? `Edits export failed: ${e.message}`
          : "Edits export failed.",
      );
    }
  }, []);

  const handleImportFile = useCallback(
    async (f: File) => {
      setImportError(null);
      try {
        const text = await f.text();
        const parsed = JSON.parse(text);
        if (!isStateExport(parsed)) {
          setImportError(
            "That file doesn't look like a study-export v1 JSON.",
          );
          return;
        }
        setImportConfirm(parsed);
      } catch (e) {
        setImportError(
          e instanceof Error
            ? `Couldn't read that file: ${e.message}`
            : "Couldn't read that file.",
        );
      }
    },
    [],
  );

  const handleConfirmImport = useCallback(async () => {
    if (!importConfirm) return;
    try {
      await restoreAll(importConfirm);
      setImportConfirm(null);
      setStatusMessage("Imported.");
      await loadAll();
    } catch (e) {
      setImportError(
        e instanceof Error ? `Import failed: ${e.message}` : "Import failed.",
      );
    }
  }, [importConfirm, loadAll]);

  const handleCancelImport = useCallback(() => {
    setImportConfirm(null);
  }, []);

  const handleRemoveStaleEdit = useCallback(
    async (itemId: string) => {
      await db.edits.delete(itemId);
      window.dispatchEvent(new Event(CONTENT_EDITS_CHANGED));
      await loadAll();
    },
    [loadAll],
  );

  const fontPreviewStyle = useMemo(
    () => ({ fontSize: `calc(1rem * ${settings.fontScale})` }),
    [settings.fontScale],
  );

  return (
    <div
      className="mx-auto flex max-w-2xl flex-col gap-4 p-4"
      data-testid="settings"
    >
      <header>
        <h1 className="text-2xl font-semibold">Settings</h1>
      </header>

      {/* Storage banner — persist status + 5-day export warning. */}
      <section
        aria-label="Storage status"
        className="rounded-xl border border-neutral-200 bg-white p-3 text-sm dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="storage-banner"
      >
        <div className="font-semibold">Storage</div>
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          Persisted:{" "}
          {persisted === null
            ? "unknown"
            : persisted
              ? "yes"
              : "no (iOS may evict after ~7 days)"}
        </div>
        {showExportWarning ? (
          <div
            className="mt-2 rounded-md border border-yellow-400 bg-yellow-50 p-2 text-xs text-yellow-900 dark:border-yellow-600 dark:bg-yellow-950 dark:text-yellow-100"
            data-testid="export-warning"
          >
            Export your state to protect against iOS storage eviction.
          </div>
        ) : null}
        {showNeverExportedBanner ? (
          <div
            className="mt-2 rounded-md border border-blue-300 bg-blue-50 p-2 text-xs text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100"
            data-testid="never-exported-banner"
          >
            You haven't exported your state yet — consider doing so from the
            Data section below.
          </div>
        ) : null}
      </section>

      {/* Appearance ------------------------------------------------------ */}
      <fieldset
        className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="appearance-section"
      >
        <legend className="px-1 text-sm font-semibold uppercase tracking-wide">
          Appearance
        </legend>

        <div>
          <div
            role="radiogroup"
            aria-label="Dark mode"
            className="flex flex-wrap gap-2"
          >
            {(["auto", "light", "dark"] as const).map((v) => {
              const selected = settings.darkMode === v;
              return (
                <button
                  key={v}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() =>
                    persistAndApply({ ...settings, darkMode: v })
                  }
                  className={
                    "min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium capitalize transition " +
                    (selected
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text dark:hover:bg-neutral-800")
                  }
                  data-testid={`darkmode-${v}`}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) =>
              persistAndApply({
                ...settings,
                highContrast: e.target.checked,
              })
            }
            data-testid="high-contrast-toggle"
          />
          High contrast
        </label>

        <div>
          <label
            htmlFor="font-scale"
            className="flex items-center justify-between text-sm"
          >
            <span>Font scale</span>
            <span className="tabular-nums text-neutral-500">
              {settings.fontScale.toFixed(2)}×
            </span>
          </label>
          <input
            id="font-scale"
            type="range"
            min={0.85}
            max={1.3}
            step={0.05}
            value={settings.fontScale}
            onChange={(e) =>
              persistAndApply({
                ...settings,
                fontScale: Number(e.target.value),
              })
            }
            className="w-full"
            data-testid="font-scale-slider"
          />
          <p
            className="mt-1 text-neutral-700 dark:text-neutral-300"
            style={fontPreviewStyle}
            data-testid="font-scale-preview"
          >
            The quick brown fox preview.
          </p>
        </div>
      </fieldset>

      {/* Study ----------------------------------------------------------- */}
      <fieldset
        className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="study-section"
      >
        <legend className="px-1 text-sm font-semibold uppercase tracking-wide">
          Study
        </legend>

        <label className="flex items-center justify-between gap-2 text-sm">
          <span>New cards per day</span>
          <input
            type="number"
            min={1}
            max={200}
            value={settings.newCardsPerDay}
            onChange={(e) =>
              persistAndApply({
                ...settings,
                newCardsPerDay: Math.max(
                  1,
                  Math.min(200, Number(e.target.value) || 1),
                ),
              })
            }
            className="w-24 rounded-md border border-neutral-300 bg-white px-2 py-1 text-right dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text"
            data-testid="new-cards-input"
          />
        </label>

        <div>
          <label
            htmlFor="target-retention"
            className="flex items-center justify-between text-sm"
          >
            <span>Target retention</span>
            <span className="tabular-nums text-neutral-500">
              {(settings.targetRetention * 100).toFixed(0)}%
            </span>
          </label>
          <input
            id="target-retention"
            type="range"
            min={0.7}
            max={0.97}
            step={0.01}
            value={settings.targetRetention}
            onChange={(e) =>
              persistAndApply({
                ...settings,
                targetRetention: Number(e.target.value),
              })
            }
            className="w-full"
            data-testid="target-retention-slider"
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={settings.cramMode}
            onChange={(e) =>
              persistAndApply({
                ...settings,
                cramMode: e.target.checked,
              })
            }
            data-testid="cram-mode-toggle"
          />
          Cram mode (caps intervals at 7 days)
        </label>

        <label className="flex items-center justify-between gap-2 text-sm">
          <span>Daily goal: cards</span>
          <input
            type="number"
            min={0}
            value={settings.dailyGoalCards}
            onChange={(e) =>
              persistAndApply({
                ...settings,
                dailyGoalCards: Math.max(0, Number(e.target.value) || 0),
              })
            }
            className="w-24 rounded-md border border-neutral-300 bg-white px-2 py-1 text-right dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text"
            data-testid="goal-cards-input"
          />
        </label>

        <label className="flex items-center justify-between gap-2 text-sm">
          <span>Daily goal: questions</span>
          <input
            type="number"
            min={0}
            value={settings.dailyGoalQuestions}
            onChange={(e) =>
              persistAndApply({
                ...settings,
                dailyGoalQuestions: Math.max(0, Number(e.target.value) || 0),
              })
            }
            className="w-24 rounded-md border border-neutral-300 bg-white px-2 py-1 text-right dark:border-neutral-700 dark:bg-ink-surface dark:text-ink-text"
            data-testid="goal-questions-input"
          />
        </label>
      </fieldset>

      {/* Data ------------------------------------------------------------ */}
      <fieldset
        className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="data-section"
      >
        <legend className="px-1 text-sm font-semibold uppercase tracking-wide">
          Data
        </legend>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleExportState}
            className="min-h-[44px] rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            data-testid="export-state-button"
          >
            Export state
          </button>
          <label className="inline-flex min-h-[44px] cursor-pointer items-center rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800">
            Import state
            <input
              type="file"
              accept="application/json"
              className="hidden"
              data-testid="import-state-input"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void handleImportFile(f);
                // Let the user pick the same file twice.
                e.target.value = "";
              }}
            />
          </label>
          <button
            type="button"
            onClick={handleExportEdits}
            className="min-h-[44px] rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
            data-testid="export-edits-button"
          >
            Export edits only
          </button>
        </div>
        {importError ? (
          <p role="alert" className="text-sm text-red-600 dark:text-red-400">
            {importError}
          </p>
        ) : null}
        {statusMessage ? (
          <p
            role="status"
            className="text-xs text-neutral-500 dark:text-neutral-400"
            data-testid="settings-status"
          >
            {statusMessage}
          </p>
        ) : null}

        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Last export:{" "}
          {settings.lastExportAt > 0
            ? new Date(settings.lastExportAt).toLocaleString()
            : "never"}
        </p>
      </fieldset>

      {/* Stale edits ----------------------------------------------------- */}
      <fieldset
        className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-ink-surface"
        data-testid="stale-edits-section"
      >
        <legend className="px-1 text-sm font-semibold uppercase tracking-wide">
          Stale edits
        </legend>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Edits whose content item is no longer in the shipped corpus.
        </p>
        {loaded ? (
          staleEdits.length === 0 ? (
            <p className="text-sm" data-testid="stale-edits-empty">
              No stale edits — you're all clean.
            </p>
          ) : (
            <ul className="flex flex-col gap-2" data-testid="stale-edits-list">
              {staleEdits.map((e) => (
                <li
                  key={e.itemId}
                  className="flex items-center justify-between rounded-md border border-neutral-200 p-2 text-sm dark:border-neutral-800"
                  data-testid={`stale-edit-${e.itemId}`}
                >
                  <span>
                    <span className="mr-2 inline-block rounded-full border border-neutral-300 px-2 py-0.5 text-xs uppercase tracking-wide dark:border-neutral-700">
                      {e.type}
                    </span>
                    <span className="font-mono text-xs">{e.itemId}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveStaleEdit(e.itemId)}
                    className="min-h-[44px] rounded-md border border-red-300 bg-white px-2 py-1 text-xs text-red-700 hover:bg-red-50 dark:border-red-800 dark:bg-ink-surface dark:text-red-300 dark:hover:bg-red-950"
                    data-testid={`stale-edit-remove-${e.itemId}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )
        ) : (
          <p className="text-xs text-neutral-500" role="status">
            Loading…
          </p>
        )}
      </fieldset>

      {importConfirm ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Confirm import"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          data-testid="import-confirm"
        >
          <div className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-4 shadow-xl dark:border-neutral-800 dark:bg-ink-surface">
            <h2 className="mb-2 text-lg font-semibold">Replace local data?</h2>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              Importing replaces every table with the contents of the file.
              This cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleCancelImport}
                className="min-h-[44px] rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:bg-ink-surface dark:hover:bg-neutral-800"
                data-testid="import-confirm-cancel"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmImport}
                className="min-h-[44px] rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                data-testid="import-confirm-ok"
              >
                Replace
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
