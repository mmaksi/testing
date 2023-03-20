import React, { useState } from "react";

const TaskInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        placeholder={"Enter new task"}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default TaskInput;
