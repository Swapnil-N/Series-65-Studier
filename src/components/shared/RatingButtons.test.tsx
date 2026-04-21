import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { RatingButtons } from "./RatingButtons";

describe("RatingButtons", () => {
  it("renders the four FSRS grade buttons", () => {
    render(<RatingButtons onRate={() => {}} />);
    expect(screen.getByRole("button", { name: "Again" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Hard" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Good" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Easy" })).toBeInTheDocument();
  });

  it("fires onRate(3) when Good is clicked", () => {
    const onRate = vi.fn();
    render(<RatingButtons onRate={onRate} />);
    fireEvent.click(screen.getByRole("button", { name: "Good" }));
    expect(onRate).toHaveBeenCalledWith(3);
  });

  it("fires onRate via keyboard 1/2/3/4", () => {
    const onRate = vi.fn();
    render(<RatingButtons onRate={onRate} />);
    fireEvent.keyDown(document, { key: "1" });
    fireEvent.keyDown(document, { key: "4" });
    expect(onRate).toHaveBeenNthCalledWith(1, 1);
    expect(onRate).toHaveBeenNthCalledWith(2, 4);
  });

  it("disables buttons when disabled=true", () => {
    const onRate = vi.fn();
    render(<RatingButtons onRate={onRate} disabled />);
    const btn = screen.getByRole("button", { name: "Good" });
    expect(btn).toBeDisabled();
    fireEvent.keyDown(document, { key: "3" });
    expect(onRate).not.toHaveBeenCalled();
  });
});
