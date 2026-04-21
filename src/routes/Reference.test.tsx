import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Reference from "./Reference";
import { formulas } from "../content/reference/formulas";
import { glossary } from "../content/reference/glossary";

// Required formulas per the IMPLEMENTATION_PLAN A8 seed list.
const REQUIRED_FORMULA_IDS = [
  "present-value",
  "future-value",
  "sharpe-ratio",
  "treynor-ratio",
  "jensens-alpha",
  "capm",
  "standard-deviation",
  "beta",
  "macaulay-duration",
  "modified-duration",
  "after-tax-yield",
  "taxable-equivalent-yield",
  "current-yield",
  "ytm-approximation",
  "expected-return-weighted",
  "geometric-mean-return",
];

describe("Reference route", () => {
  it("ships all 16 required seed formulas", () => {
    expect(formulas.length).toBeGreaterThanOrEqual(16);
    const ids = new Set(formulas.map((f) => f.id));
    for (const required of REQUIRED_FORMULA_IDS) {
      expect(ids.has(required)).toBe(true);
    }
  });

  it("ships at least 30 glossary entries", () => {
    expect(glossary.length).toBeGreaterThanOrEqual(30);
  });

  it("renders all formulas by default on the Formulas tab", () => {
    render(<Reference />);
    // Each formula name becomes a heading; presence of the first one plus a
    // distinguishable later one is enough to confirm the list mounted.
    expect(
      screen.getByRole("heading", { name: /Present Value/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Sharpe Ratio/i, level: 2 }),
    ).toBeInTheDocument();
  });

  it("exposes a search input with the expected aria-label", () => {
    render(<Reference />);
    expect(
      screen.getByRole("searchbox", { name: /search reference/i }),
    ).toBeInTheDocument();
  });

  it("narrows the formula list when a search query is typed", () => {
    render(<Reference />);
    const panel = screen.getByRole("tabpanel", { name: /formulas/i });
    // Baseline: all 16+ formulas are in the list.
    const headingsBefore = within(panel).getAllByRole("heading", { level: 2 });
    expect(headingsBefore.length).toBe(formulas.length);

    // Search for "Sharpe" — should narrow the list.
    const input = screen.getByRole("searchbox", {
      name: /search reference/i,
    });
    fireEvent.change(input, { target: { value: "Sharpe" } });

    const narrowedPanel = screen.getByRole("tabpanel", { name: /formulas/i });
    const headingsAfter = within(narrowedPanel).getAllByRole("heading", {
      level: 2,
    });
    expect(headingsAfter.length).toBeLessThan(headingsBefore.length);
    expect(
      within(narrowedPanel).getByRole("heading", {
        name: /Sharpe Ratio/i,
        level: 2,
      }),
    ).toBeInTheDocument();
  });

  it("switches to the Glossary tab and searches glossary terms", () => {
    render(<Reference />);
    const glossaryTab = screen.getByRole("tab", { name: /glossary/i });
    fireEvent.click(glossaryTab);

    const panel = screen.getByRole("tabpanel", { name: /glossary/i });
    const headingsBefore = within(panel).getAllByRole("heading", { level: 2 });
    expect(headingsBefore.length).toBe(glossary.length);

    const input = screen.getByRole("searchbox", {
      name: /search reference/i,
    });
    fireEvent.change(input, { target: { value: "fiduciary" } });

    const narrowedPanel = screen.getByRole("tabpanel", { name: /glossary/i });
    const headingsAfter = within(narrowedPanel).getAllByRole("heading", {
      level: 2,
    });
    expect(headingsAfter.length).toBeLessThan(headingsBefore.length);
    expect(
      within(narrowedPanel).getByRole("heading", {
        name: /Fiduciary Duty/i,
        level: 2,
      }),
    ).toBeInTheDocument();
  });

  it("shows an empty state when no formulas match", () => {
    render(<Reference />);
    const input = screen.getByRole("searchbox", {
      name: /search reference/i,
    });
    fireEvent.change(input, {
      target: { value: "xyznotarealquerystring123" },
    });
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText(/no formulas found/i)).toBeInTheDocument();
  });
});
