import React from "react";

const Task = ({ task, onToggle }) => (
  <li onClick={onToggle} className={task.completed ? "completed" : null}>{task.label}</li>
);

export default Task;
