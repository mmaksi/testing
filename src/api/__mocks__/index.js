// create mocked modules in the __mocks__ folder of the module that you want to mock
/**
 * Since this file will replace the original one when running tests,
 * it must expose the same functions (getTasks, createTask, and updateTask):
 */

//  to have a mock function with specified implementation
export const createTask = jest.fn((taskName) =>
  Promise.resolve({
    id: 1,
    label: taskName,
    completed: false,
  })
);

//  to have a mock function with specified implementation
export const updateTask = jest.fn((task) => Promise.resolve(task));

//  to have a mock function with specified implementation
export const getTasks = jest.fn(() =>
  Promise.resolve([
    { id: 1, label: "Do this", completed: false },
    { id: 2, label: "Do that", completed: true },
  ])
);
