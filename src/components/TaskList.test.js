import React from "react";
import { render, screen } from "@testing-library/react";

import TaskList from "./TaskList";

describe("<TaskList />", () => {
  it("must render tasks", () => {
    const tasks = ["Do this", "Do that", "Do nothing"];
    render(<TaskList tasks={tasks} />);
    // Searches the entire document for a node that has the specified text content and returns the first matching node.
    const renderedTasks = tasks.map((task) => screen.getByText(task));
    expect(renderedTasks.length).toBe(3);
  });
});
