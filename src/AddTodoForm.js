import React from 'react'

function AddTodoForm(props) {
      const handleAddTodo = (event) =>{ 
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle + " is the result")
      }
  return (
   <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input name="title" type="text" id="todoTitle"></input>
        <button>Add</button>
   </form>
  )
}

export default AddTodoForm