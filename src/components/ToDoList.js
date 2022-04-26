import React from "react";

function ToDoList({ data, setData }) {
  function handleToggleStatus(index) {
    const newData = [...data];
    newData[index].status =
      newData[index].status === "pending" ? "completed" : "pending";
    setData(newData);
  }

  return (
    <ul>
      {data.map((toDo, index) => {
        return (
          <li
            onClick={() => handleToggleStatus(index)}
            className={toDo.status}
            key={toDo.id}
          >
            {toDo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoList;
