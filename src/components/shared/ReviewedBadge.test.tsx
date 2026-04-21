import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReviewedBadge } from "./ReviewedBadge";

describe("ReviewedBadge", () => {
  it("renders nothing when reviewed=true", () => {
    const { container } = render(<ReviewedBadge reviewed={true} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the Unreviewed pill when reviewed=false", () => {
    render(<ReviewedBadge reviewed={false} />);
    expect(screen.getByText("Unreviewed")).toBeInTheDocument();
  });
});
