import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Citation } from "./Citation";

describe("Citation", () => {
  it("renders a NASAA reference with section symbol", () => {
    render(<Citation citation={{ source: "NASAA", ref: "1.A" }} />);
    expect(screen.getByText("NASAA §1.A")).toBeInTheDocument();
  });

  it("renders a SEC rule without section symbol", () => {
    render(<Citation citation={{ source: "SEC", ref: "10b-5" }} />);
    expect(screen.getByText("SEC Rule 10b-5")).toBeInTheDocument();
  });

  it("renders NASAA Model Rule using MR label", () => {
    render(<Citation citation={{ source: "NASAA_MODEL_RULE", ref: "102(a)" }} />);
    expect(screen.getByText("NASAA MR §102(a)")).toBeInTheDocument();
  });

  it("exposes the full source name via the accessible name", () => {
    render(<Citation citation={{ source: "IA_ACT", ref: "203" }} />);
    const el = screen.getByLabelText(/Investment Advisers Act/);
    expect(el).toBeInTheDocument();
  });
});
