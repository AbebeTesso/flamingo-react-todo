import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

function TodoListItem({ todo: { title, id }, onRemoveTodo }) {
  return (
    <li className={style.ListItem}>
      <a href={id}>
        {title}
        {/* <span> {id} </span> */}
      </a>
      <button
        className={style.btn}
        type="button"
        onClick={() => onRemoveTodo(id)}
      >
      <MdDelete />
      </button>
    </li>
  );
}
TodoListItem.propTyeps = {
  todo: PropTypes.obj,
  onRemoveTodo: PropTypes.func,
};
export default TodoListItem;
