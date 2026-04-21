import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { QuestionCard } from "./QuestionCard";
import type { Question } from "../../types/content";

const q: Question = {
  id: "abc123",
  subtopicId: "1.1",
  stem: "What is 2 + 2?",
  choices: ["3", "4", "5", "6"],
  answerIndex: 1,
  rationale: "Two plus two is four.",
  citation: { source: "NASAA", ref: "1.A" },
  difficulty: "easy",
  reviewed: true,
};

describe("QuestionCard", () => {
  it("renders four choice buttons", () => {
    render(
      <QuestionCard
        question={q}
        selectedIndex={null}
        revealed={false}
        onSelect={() => {}}
      />,
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
  });

  it("fires onSelect when a choice is clicked", () => {
    const onSelect = vi.fn();
    render(
      <QuestionCard
        question={q}
        selectedIndex={null}
        revealed={false}
        onSelect={onSelect}
      />,
    );
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[2]);
    expect(onSelect).toHaveBeenCalledWith(2);
  });

  it("disables buttons and shows rationale + citation when revealed", () => {
    render(
      <QuestionCard
        question={q}
        selectedIndex={0}
        revealed={true}
        onSelect={() => {}}
      />,
    );
    const buttons = screen.getAllByRole("button");
    for (const b of buttons) {
      expect(b).toBeDisabled();
    }
    expect(screen.getByText("Rationale")).toBeInTheDocument();
    expect(screen.getByText(/NASAA §1\.A/)).toBeInTheDocument();
  });

  it("selects via number keys 1-4", () => {
    const onSelect = vi.fn();
    render(
      <QuestionCard
        question={q}
        selectedIndex={null}
        revealed={false}
        onSelect={onSelect}
      />,
    );
    fireEvent.keyDown(document, { key: "3" });
    expect(onSelect).toHaveBeenCalledWith(2);
  });
});
