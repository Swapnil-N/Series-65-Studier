import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { TopicPicker } from "./TopicPicker";

describe("TopicPicker", () => {
  it("renders All + 4 topics by default as a radiogroup", () => {
    render(<TopicPicker value="all" onChange={() => {}} />);
    const group = screen.getByRole("radiogroup", { name: /filter by topic/i });
    expect(group).toBeInTheDocument();
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(5);
    expect(screen.getByRole("radio", { name: "All" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it("hides 'All' chip when showAll is false", () => {
    render(<TopicPicker value="1" onChange={() => {}} showAll={false} />);
    expect(screen.queryByRole("radio", { name: "All" })).not.toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(4);
  });

  it("fires onChange with the topic id when a chip is clicked", () => {
    const onChange = vi.fn();
    render(<TopicPicker value="all" onChange={onChange} />);
    fireEvent.click(screen.getByRole("radio", { name: /2\. Vehicles/ }));
    expect(onChange).toHaveBeenCalledWith("2");
  });

  it("marks the selected chip aria-checked=true", () => {
    render(<TopicPicker value="3" onChange={() => {}} />);
    expect(
      screen.getByRole("radio", { name: /3\. Strategies/ }),
    ).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("radio", { name: "All" })).toHaveAttribute(
      "aria-checked",
      "false",
    );
  });
});
