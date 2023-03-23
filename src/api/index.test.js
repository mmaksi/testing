import { createTask, getTasks, updateTask } from "./index";
import fetchMock from "fetch-mock";
fetchMock.config.overwriteRoutes = true;

describe("#getTasks", () => {
  it("must get tasks", async () => {
    const mockResponse = [
      {
        id: 1,
        label: "Do this",
        completed: false,
      },
    ];

    fetchMock.get(/tasks/, mockResponse);

    const tasks = await getTasks();
    expect(tasks).toEqual(mockResponse);
    expect(fetchMock.called(/tasks/)).toBe(true);
  });
});

describe("#updateTask", () => {
  const mockResponse = {
    id: 1,
    label: "Do this",
    completed: true,
  };

  it("must update tasks", async () => {
    fetchMock.put(/tasks\/1/, mockResponse);

    const result = await updateTask({
      id: 1,
      label: "Do this",
      completed: true,
    });
    expect(result).toEqual({ id: 1, label: "Do this", completed: true });
  });
});

describe("#createTask", () => {
  it("must create a new task", async () => {
    const allTasks = await getTasks();
    const lastTask = allTasks[allTasks.length - 1];
    const newTaskId = lastTask.id + 1;

    const mockResponse = {
      id: newTaskId,
      label: "Do this",
      completed: false,
    };

    fetchMock.post(/tasks/, {
      body: mockResponse,
    });

    const result = await createTask("Do this");

    expect(result).toEqual(mockResponse);
  });
});
