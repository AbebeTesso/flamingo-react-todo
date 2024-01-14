import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

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
      <InputWithLabel
        autoFocus={true}
        name="title"
        value={todoTitle}
        id="todoTitle"
        type="text"
        placeholder="Type new title here"
        onInputChange={handleTitleChange}
      >
        <strong>Title</strong>
      </InputWithLabel>
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
