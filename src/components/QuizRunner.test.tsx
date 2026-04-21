import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { QuizRunner } from "./QuizRunner";
import type { Question } from "../types/content";
import type { Attempt } from "../types/state";

const NOW = 1_700_000_000_000;

function makeQ(
  id: string,
  subtopicId: string,
  answerIndex: 0 | 1 | 2 | 3,
): Question {
  return {
    id,
    subtopicId,
    stem: `Stem ${id}?`,
    choices: ["A", "B", "C", "D"],
    answerIndex,
    rationale: `Rationale ${id}`,
    citation: { source: "NASAA", ref: "Section X" },
    difficulty: "easy",
    reviewed: true,
  };
}

// Three questions spanning two topics; the first is correct on choice 0, the
// second is correct on choice 1, and the third on choice 2.
const Q1 = makeQ("q1", "1.1", 0);
const Q2 = makeQ("q2", "1.2", 1);
const Q3 = makeQ("q3", "2.1", 2);

describe("QuizRunner", () => {
  it("renders a zero-state when handed no questions", () => {
    render(<QuizRunner questions={[]} />);
    expect(screen.getByText(/no questions in this quiz/i)).toBeInTheDocument();
  });

  it("fires onAnswer once per question through the full flow and renders the scorecard", () => {
    const onAnswer = vi.fn();
    render(
      <QuizRunner
        questions={[Q1, Q2, Q3]}
        onAnswer={onAnswer}
        now={NOW}
      />,
    );

    // First question: correct.
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    fireEvent.click(screen.getByTestId("quiz-next"));

    // Second question: incorrect (choose A when B is right).
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    fireEvent.click(screen.getByTestId("quiz-next"));

    // Third question: correct (choose C).
    fireEvent.click(screen.getByRole("button", { name: /^3\. C$/ }));
    fireEvent.click(screen.getByTestId("quiz-next"));

    expect(onAnswer).toHaveBeenCalledTimes(3);
    const calls = onAnswer.mock.calls.map((c) => c[0] as Attempt);
    expect(calls[0]).toMatchObject({
      questionId: "q1",
      subtopicId: "1.1",
      topicId: "1",
      correct: true,
      mode: "quiz",
      timestamp: NOW,
    });
    expect(calls[1]).toMatchObject({
      questionId: "q2",
      topicId: "1",
      correct: false,
      mode: "quiz",
    });
    expect(calls[2]).toMatchObject({
      questionId: "q3",
      topicId: "2",
      correct: true,
      mode: "quiz",
    });

    // Scorecard renders at the end.
    expect(screen.getByTestId("quiz-scorecard")).toBeInTheDocument();
    // 2/3 correct → 67% overall.
    const overall = screen.getByTestId("quiz-scorecard-overall");
    expect(within(overall).getByText("67%")).toBeInTheDocument();
    // Per-topic rows present for both topics.
    expect(
      screen.getByTestId("quiz-scorecard-topic-1"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("quiz-scorecard-topic-2"),
    ).toBeInTheDocument();
  });

  it("double-clicking the same choice does not produce two Attempts", () => {
    const onAnswer = vi.fn();
    render(<QuizRunner questions={[Q1]} onAnswer={onAnswer} now={NOW} />);
    const choice = screen.getByRole("button", { name: /^1\. A$/ });
    fireEvent.click(choice);
    // The button is now `disabled` (revealed=true); a second click is a no-op.
    fireEvent.click(choice);
    fireEvent.click(choice);
    expect(onAnswer).toHaveBeenCalledTimes(1);
  });

  it("selecting a second choice after reveal is a no-op (no extra Attempts)", () => {
    const onAnswer = vi.fn();
    render(<QuizRunner questions={[Q1]} onAnswer={onAnswer} now={NOW} />);
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    // Post-reveal every choice button is disabled; clicks on siblings also
    // shouldn't produce a second Attempt.
    fireEvent.click(screen.getByRole("button", { name: /^2\. B$/ }));
    expect(onAnswer).toHaveBeenCalledTimes(1);
  });

  it("emits onProgress with the updated index/answers after an answer", () => {
    const onProgress = vi.fn();
    render(
      <QuizRunner
        questions={[Q1, Q2]}
        onProgress={onProgress}
        now={NOW}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    // Answer recorded in slot 0, still on index 0 (haven't pressed Next).
    const last = onProgress.mock.calls.at(-1)?.[0] as {
      index: number;
      answers: (number | null)[];
    };
    expect(last.index).toBe(0);
    expect(last.answers[0]).toBe(0);
    expect(last.answers[1]).toBeNull();

    fireEvent.click(screen.getByTestId("quiz-next"));
    const afterNext = onProgress.mock.calls.at(-1)?.[0] as {
      index: number;
      answers: (number | null)[];
    };
    expect(afterNext.index).toBe(1);
  });

  it("resumes from initialIndex/initialAnswers", () => {
    const onAnswer = vi.fn();
    render(
      <QuizRunner
        questions={[Q1, Q2, Q3]}
        initialIndex={2}
        initialAnswers={[0, 1, null]}
        onAnswer={onAnswer}
        now={NOW}
      />,
    );
    // We're on Q3 and the quiz is still going.
    expect(screen.getByText(/Stem q3\?/)).toBeInTheDocument();
    expect(screen.getByLabelText("quiz-position")).toHaveTextContent("3 / 3");

    // Answering Q3 correctly fires only ONE onAnswer — prior answers are not
    // replayed on mount.
    fireEvent.click(screen.getByRole("button", { name: /^3\. C$/ }));
    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer.mock.calls[0][0]).toMatchObject({
      questionId: "q3",
      correct: true,
    });
  });

  it("shows the correct scorecard when all answers are correct", () => {
    render(<QuizRunner questions={[Q1, Q2, Q3]} now={NOW} />);
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    fireEvent.click(screen.getByTestId("quiz-next"));
    fireEvent.click(screen.getByRole("button", { name: /^2\. B$/ }));
    fireEvent.click(screen.getByTestId("quiz-next"));
    fireEvent.click(screen.getByRole("button", { name: /^3\. C$/ }));
    fireEvent.click(screen.getByTestId("quiz-next"));

    const overall = screen.getByTestId("quiz-scorecard-overall");
    expect(within(overall).getByText("100%")).toBeInTheDocument();
    expect(within(overall).getByText(/3 \/ 3 correct/)).toBeInTheDocument();
  });

  it("Restart handler invokes onRestart when clicked on the scorecard", () => {
    const onRestart = vi.fn();
    render(
      <QuizRunner questions={[Q1]} now={NOW} onRestart={onRestart} />,
    );
    fireEvent.click(screen.getByRole("button", { name: /^1\. A$/ }));
    fireEvent.click(screen.getByTestId("quiz-next"));
    fireEvent.click(screen.getByTestId("quiz-restart"));
    expect(onRestart).toHaveBeenCalledTimes(1);
  });
});
