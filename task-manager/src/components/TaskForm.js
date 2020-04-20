import React from "react";

const TaskForm = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add task..."
        required
      />
    </form>
  );
};

export default TaskForm;
