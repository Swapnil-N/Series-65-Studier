import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { getSettings } from "./lib/db";
import { applyAppearanceSettings } from "./routes/Settings";

// Restore the persisted appearance preferences (falls back to defaults on a
// fresh install). The inline script in index.html already applied a
// localStorage shadow of these classes pre-mount to prevent FOUC; this Dexie
// read reconciles the canonical state once IndexedDB is available.
void getSettings().then((s) => {
  applyAppearanceSettings(s);
  try {
    window.localStorage.setItem(
      "s65-appearance",
      JSON.stringify({
        darkMode: s.darkMode,
        highContrast: s.highContrast,
        fontScale: s.fontScale,
      }),
    );
  } catch {
    // localStorage disabled/full — worst case is FOUC on next launch.
  }
});

// Best-effort request for persistent storage. iOS Safari ignores it today but
// Chrome/Firefox/desktop Safari will honour it, protecting user state from the
// ~7-day eviction window the plan calls out. Plan: "first launch".
if (typeof navigator !== "undefined" && navigator.storage?.persist) {
  void navigator.storage.persist().catch(() => {
    /* best-effort */
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
