import { describe, expect, it, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MissedReview } from "./MissedReview";
import { db } from "../lib/db";
import type { Question } from "../types/content";

function makeQ(id: string, answerIndex: 0 | 1 | 2 | 3 = 0): Question {
  return {
    id,
    subtopicId: "1.1",
    stem: `Stem ${id}?`,
    choices: ["A", "B", "C", "D"],
    answerIndex,
    rationale: `Rationale ${id}`,
    citation: { source: "NASAA", ref: "§1.A" },
    difficulty: "easy",
    reviewed: true,
  };
}

describe("MissedReview", () => {
  beforeEach(async () => {
    await db.missedQueue.clear();
  });

  it("renders the empty state when the missed queue is clear", async () => {
    const map = new Map<string, Question>();
    render(<MissedReview questionsById={map} />);

    await waitFor(() =>
      expect(screen.getByText(/all clear/i)).toBeInTheDocument(),
    );
    expect(screen.getByText(/no missed questions/i)).toBeInTheDocument();
  });

  it("removes an item from the queue after two consecutive correct answers", async () => {
    // Seed one missed question and a second so the in-memory queue has room
    // to cycle ("Next"-like behaviour inside the component moves the head to
    // the back after each answer).
    await db.missedQueue.put({
      questionId: "q1",
      topicId: "1",
      addedAt: 1,
    });
    await db.missedQueue.put({
      questionId: "q2",
      topicId: "1",
      addedAt: 2,
    });

    const map = new Map<string, Question>();
    map.set("q1", makeQ("q1", 0)); // correct = "A"
    map.set("q2", makeQ("q2", 1)); // correct = "B"

    render(<MissedReview questionsById={map} />);

    // Wait for the review UI to appear.
    await waitFor(() =>
      expect(screen.getByTestId("missed-review")).toBeInTheDocument(),
    );

    // q1 is currentItem. Answer correctly (click "A").
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    // Advance to the next card.
    fireEvent.click(screen.getByTestId("missed-next"));

    // q2 is now current; answer it wrong to simulate interleaved cycling.
    // Correct for q2 is "B" (index 1). Choose "A" to get wrong.
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    fireEvent.click(screen.getByTestId("missed-next"));

    // q1 resurfaces — answer correctly again. This is the 2nd consecutive
    // correct on q1 → should trigger removal from db.missedQueue.
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));

    await waitFor(async () => {
      const remaining = await db.missedQueue.toArray();
      expect(remaining.find((m) => m.questionId === "q1")).toBeUndefined();
    });

    // q2 remains.
    const remaining = await db.missedQueue.toArray();
    expect(remaining.some((m) => m.questionId === "q2")).toBe(true);
  });

  it("wrong answer resets the correct-streak counter", async () => {
    await db.missedQueue.put({
      questionId: "q1",
      topicId: "1",
      addedAt: 1,
    });
    await db.missedQueue.put({
      questionId: "q2",
      topicId: "1",
      addedAt: 2,
    });

    const map = new Map<string, Question>();
    map.set("q1", makeQ("q1", 0));
    map.set("q2", makeQ("q2", 0));

    render(<MissedReview questionsById={map} />);

    await waitFor(() =>
      expect(screen.getByTestId("missed-review")).toBeInTheDocument(),
    );

    // q1: correct → streak = 1.
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    fireEvent.click(screen.getByTestId("missed-next"));

    // q2: answer anything (just cycles).
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    fireEvent.click(screen.getByTestId("missed-next"));

    // q1 again: wrong → streak resets to 0.
    fireEvent.click(screen.getByRole("button", { name: /^2\. B$/ }));
    fireEvent.click(screen.getByTestId("missed-next"));

    // q2 again.
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    fireEvent.click(screen.getByTestId("missed-next"));

    // q1 again: correct (streak = 1 again, not 2) → NOT removed.
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));

    // Brief wait — the component only calls db.delete when it hits 2.
    await waitFor(() =>
      expect(screen.getByTestId("missed-review")).toBeInTheDocument(),
    );
    const remaining = await db.missedQueue.toArray();
    expect(remaining.some((m) => m.questionId === "q1")).toBe(true);
  });
});
