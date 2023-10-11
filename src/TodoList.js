import React from 'react'
import TodoListItem from './TodoListItem';

const todoList = [
  {title: "Code The Dream",
  id: 1,
  lesson: 1.1,
},
  {title: "Flamingo React Class",
  id: 2,
  lesson: 1.1,
},
  {title: "Complete The Assignment",
  id: 3,
  lesson: 1.1,
},
];

function TodoList() {
  return (
    <> 
    <ul>
        {todoList.map(function(todo){
          return (
         <TodoListItem
          key={todo.id}
          todo={todo}/> 
          )
        })}
      </ul>
    </>
  )
}
export default TodoList
