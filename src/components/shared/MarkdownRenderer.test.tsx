import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MarkdownRenderer } from "./MarkdownRenderer";

describe("MarkdownRenderer", () => {
  it("renders headings and paragraphs", () => {
    render(
      <MarkdownRenderer>{"# Title\n\nA paragraph."}</MarkdownRenderer>,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: "Title" }),
    ).toBeInTheDocument();
    expect(screen.getByText("A paragraph.")).toBeInTheDocument();
  });

  it("renders GFM lists", () => {
    render(<MarkdownRenderer>{"- one\n- two"}</MarkdownRenderer>);
    expect(screen.getByText("one")).toBeInTheDocument();
    expect(screen.getByText("two")).toBeInTheDocument();
  });
});
