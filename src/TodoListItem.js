import React from "react";

function TodoListItem({ todo: { title, id }, onRemoveTodo }) {
  return (
    <li>
      <a href={id}>
        {title}
        <span> {id} </span>
      </a>
      <button type="button" onClick={() => onRemoveTodo(id)}>
        Remove
      </button>
    </li>
  );
}
export default TodoListItem;
