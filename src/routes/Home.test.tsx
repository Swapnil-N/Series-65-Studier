import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import { db } from "../lib/db";

describe("Home", () => {
  beforeEach(async () => {
    // Clear everything so the smoke test exercises the empty-db path.
    await db.attempts.clear();
    await db.dailyActivity.clear();
    await db.cardState.clear();
    await db.missedQueue.clear();
    await db.settings.clear();
  });

  it("renders without crashing on an empty database", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // Greeting always renders (one of morning/afternoon/evening).
    expect(
      screen.getByText(/^Good (morning|afternoon|evening)$/),
    ).toBeInTheDocument();

    // Streak chip renders at 0 days on an empty database.
    await waitFor(() =>
      expect(screen.getByTestId("streak-chip")).toHaveTextContent(/0-day streak/),
    );

    // Readiness block is present with the overall placeholder.
    expect(screen.getByTestId("readiness-block")).toBeInTheDocument();
    expect(screen.getByTestId("overall-score")).toHaveTextContent("—");

    // Study-next card always renders (defaults to topic 1 on empty data).
    expect(screen.getByTestId("study-next")).toBeInTheDocument();

    // Due cards card renders with 0 due.
    expect(screen.getByTestId("due-cards-card")).toHaveTextContent("0");

    // Missed-card is hidden when the queue is empty.
    expect(screen.queryByTestId("missed-card")).toBeNull();

    // Daily goal section is present.
    expect(screen.getByTestId("daily-goals")).toBeInTheDocument();
  });

  it("shows the missed card only when items are in the queue", async () => {
    await db.missedQueue.put({
      questionId: "q1",
      topicId: "1",
      addedAt: Date.now(),
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    await waitFor(() =>
      expect(screen.getByTestId("missed-card")).toBeInTheDocument(),
    );
    expect(screen.getByTestId("missed-card")).toHaveTextContent(/1 missed/);
  });
});
