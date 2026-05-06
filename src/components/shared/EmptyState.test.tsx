import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders the title and optional message and CTA", () => {
    render(
      <EmptyState
        title="No cards due"
        message="Come back later."
        cta={<button type="button">Start new cards</button>}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "No cards due" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Come back later.")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Start new cards" }),
    ).toBeInTheDocument();
  });

  it("omits message and CTA when not provided", () => {
    render(<EmptyState title="All caught up" />);
    expect(
      screen.getByRole("heading", { name: "All caught up" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
