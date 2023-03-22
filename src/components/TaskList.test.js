import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import TaskList from "./TaskList";

describe("<TaskList />", () => {
  it("must render tasks", () => {
    const tasks = [
      { label: "Do this", completed: false },
      { label: "Do that", completed: true },
    ];
    render(<TaskList tasks={tasks} />);
    // Searches the entire document for a node that has the specified text content and returns the first matching node.
    const renderedTasks = tasks.map((task) => screen.getByText(task.label));
    expect(renderedTasks.length).toBe(2);
  });

  it("must fire onToggle callback", () => {
    const tasks = [
      { label: "Do this", completed: false },
      { label: "Do that", completed: true },
    ];

    const mockOnToggle = jest.fn();

    render(<TaskList tasks={tasks} onToggleTask={mockOnToggle} />);

    const renderedTasks = tasks.map((task) => screen.getByText(task.label));
    fireEvent.click(renderedTasks[1]);
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });
});
