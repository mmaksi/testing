import React from "react";

import TaskInput from "./TaskInput";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("<TaskInput />", () => {
  it("renders an input", () => {
    // Render a component
    render(<TaskInput />);
    /**
     * screen is an object that represents a browser screen.
     * Whatever you render with render is made available from screen.
     * screen function used to access rendered components
     */
    expect(screen.queryByPlaceholderText("Enter new task")).toBeInTheDocument();
  });

  it("fires onSubmit callback", async () => {
    // Create a mock function.
    const mockOnSubmit = jest.fn();
    render(<TaskInput onSubmit={mockOnSubmit} />);
    const inputNode = screen.getByPlaceholderText("Enter new task");
    // Fire user events
    fireEvent.change(inputNode, { target: { value: "new task!" } });
    fireEvent.submit(inputNode);
    waitFor(() => expect(mockOnSubmit).toHaveBeenCalledWith("new task!"));
  });
});
