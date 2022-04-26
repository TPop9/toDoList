import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function AddNewTask({ setData }) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleTextChange(event) {
    setTaskTitle(event.target.value);
  }

  function handleButtonClick() {
    const newToDo = {
      id: uuid(),
      title: taskTitle,
      status: "pending",
    };
    setData((data) => [...data, newToDo]);
    setTaskTitle("");
  }

  return (
    <div>
      <input value={taskTitle} onChange={handleTextChange} type="text" />
      <button onClick={handleButtonClick}>Add new task</button>
    </div>
  );
}

export default AddNewTask;
