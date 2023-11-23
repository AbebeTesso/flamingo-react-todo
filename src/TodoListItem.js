import React from "react";

function TodoListItem({ todo }) {
  return (
    <li>
      <a href={todo.id}>
        {" "}
        {todo.title}
        <span> {todo.id} </span>
        <span> {todo.lesson} </span>
      </a>
    </li>
  );
}
export default TodoListItem;
