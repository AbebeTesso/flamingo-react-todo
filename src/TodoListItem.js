import React from 'react'

function TodoListItem(props) {
  return (
        <li>
            <a href={props.todo.id}> {props.todo.title}
            <span> {props.todo.id} </span>
            <span> {props.todo.lesson} </span>
            </a>
        </li>
    )
}
export default TodoListItem
       
