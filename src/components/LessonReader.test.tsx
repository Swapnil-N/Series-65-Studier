import { describe, it, expect, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LessonReader from "./LessonReader";
import Learn from "../routes/Learn";
import { db } from "../lib/db";
import type { Lesson } from "../types/content";

const SAMPLE_LESSON: Lesson = {
  subtopicId: "1.1",
  title: "Business Cycles",
  bodyMd:
    "The **business cycle** describes expansions and contractions in real economic activity.",
  citations: [
    { source: "NASAA", ref: "Section 1.A" },
    { source: "SEC", ref: "10b-5" },
  ],
  reviewed: false,
};

async function clearDb(): Promise<void> {
  await Promise.all([
    db.edits.clear(),
    db.bookmarks.clear(),
    db.notes.clear(),
    db.dailyActivity.clear(),
  ]);
}

describe("LessonReader", () => {
  beforeEach(async () => {
    await clearDb();
  });

  it("renders title, body markdown, citations, and the Unreviewed badge", () => {
    render(<LessonReader lesson={SAMPLE_LESSON} />);
    // Title heading
    expect(
      screen.getByRole("heading", { level: 1, name: "Business Cycles" }),
    ).toBeInTheDocument();
    // Body — react-markdown renders the text inside a <p>
    expect(screen.getByText(/expansions and contractions/i)).toBeInTheDocument();
    // Unreviewed badge visible when reviewed=false
    expect(screen.getByText("Unreviewed")).toBeInTheDocument();
    // Citations section + both citations rendered
    expect(screen.getByText(/NASAA §Section 1.A/)).toBeInTheDocument();
    expect(screen.getByText(/SEC Rule 10b-5/)).toBeInTheDocument();
  });

  it("persists a reviewed=true edit to db.edits when 'Mark as reviewed' is clicked", async () => {
    let reviewedFired = 0;
    render(
      <LessonReader
        lesson={SAMPLE_LESSON}
        onReviewed={() => {
          reviewedFired += 1;
        }}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /mark as reviewed/i }));

    await waitFor(async () => {
      const edit = await db.edits.get(SAMPLE_LESSON.subtopicId);
      expect(edit).toBeDefined();
      expect(edit?.type).toBe("lesson");
      expect((edit?.patch as { reviewed?: boolean }).reviewed).toBe(true);
    });

    // The onReviewed callback is the parent's re-read hook; it's invoked
    // after the async db writes resolve, so poll until we see it.
    await waitFor(() => {
      expect(reviewedFired).toBe(1);
    });

    // dailyActivity.lessonsCompleted bumped for today
    const today = new Date();
    const key = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const act = await db.dailyActivity.get(key);
    expect(act?.lessonsCompleted).toBe(1);
  });
});

// Covered here (rather than a dedicated Learn.test.tsx) because A6's Owns set
// is limited to this single test file. Smoke-checks that mounting the Learn
// route renders the four NASAA topic names from the plan's weighting table.
describe("Learn (route)", () => {
  it("renders all four NASAA topic names on the topic list", () => {
    render(<Learn />);
    expect(
      screen.getByText("Economic Factors & Business Information"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Investment Vehicle Characteristics"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Client Investment Recommendations & Strategies"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Laws, Regulations, Guidelines & Ethics"),
    ).toBeInTheDocument();
  });
});
