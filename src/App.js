import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";


function App() {
  const [todoList, setTodoList] = useState([]); //updated to empty array
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve({data: {todoList: JSON.parse(localStorage.getItem("SavedTodoList")) ?? []}})
      }, 2000)
    })
    myPromise.then((result) =>{
        setTodoList(result.data.todoList);
        setIsLoading(false)
    })
   }, [])

  useEffect(() => {
    if(!isLoading){
        localStorage.setItem("SavedTodoList", JSON.stringify(todoList));
    }
    }, [todoList, isLoading]);
    

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
      {isLoading ?
       (<p>Loading...</p>)
      :
      (
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )
      }
    </>
  );
}

export default App;
