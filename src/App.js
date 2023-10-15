import React, { useState } from 'react';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [newTodo, setNewTodo] = useState(); //use state hook
  return (
    <div> 
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
