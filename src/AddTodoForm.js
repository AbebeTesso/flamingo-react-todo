import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState();

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  };

  return (
    <form id="myForm" onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        name="title"
        value={todoTitle}
        id="todoTitle"
        onChange={handleTitleChange}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
