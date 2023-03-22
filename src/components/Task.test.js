import React from "react";

import Task from "./Task";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<Task />", () => {
  const completedTask = {
    label: "Do this",
    completed: true,
  };
  const uncompletedTask = {
    label: "Do that",
    completed: false,
  };

  it("renders the task", () => {
    render(<Task task={completedTask} />);
    expect(screen.getByText(completedTask.label)).toBeInTheDocument();
  });

  it("fires onToggle callback", () => {
    const mockOnToggle = jest.fn();

    render(<Task onToggle={mockOnToggle} task={completedTask} />);
    const task = screen.getByText(completedTask.label);
    expect(task).toHaveClass("completed");
    fireEvent.click(task);
    expect(mockOnToggle).toHaveBeenCalled();
  });

  it("assigns completed class", () => {
    render(<Task task={completedTask} />);
    expect(screen.getByText(completedTask.label)).toHaveClass("completed");

    render(<Task task={uncompletedTask} />);
    expect(screen.getByText(uncompletedTask.label)).not.toHaveClass(
      "completed"
    );
  });
});
