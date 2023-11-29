import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";


 function useSemiPersistentState() {
    const [todoList, setTodoList] = useState(
      JSON.parse(localStorage.getItem("SavedTodoList")) ?? []
    );

    useEffect(() => {
      localStorage.setItem("SavedTodoList", JSON.stringify(todoList));
    }, [todoList]);
    return [todoList, setTodoList];
  }
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

 
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
