import React, { useEffect, useState } from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import NavigationBar from "./NavigationBar";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          const message = `Error occured: ${response.status}`;
          throw new Error(message);
        }
        const data = await response.json();
        const todosMain = data.records.map((todo) => {
          const newTodo = {
            title: todo.fields.title,
            id: todo.id,
          };
          return newTodo;
        });
        setTodoList(todosMain);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  const postTodoList = async ({ title }) => {
    const airtableData = {
      fields: {
        title: title,
      },
    };
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(airtableData),
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error has occured: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      const newTodo = {
        title: data.fields.title,
        id: data.id,
      };
      return newTodo;
    } catch (error) {
      console.log(error.message);
    }
  };
  const addTodo = async (newTodo) => {
    const newPost = await postTodoList(newTodo);
    setTodoList((prevTodoList) => [...prevTodoList, newPost]);
  };
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />} />
        <Route
          path="/todoList"
          element={
            <div>
              <NavigationBar />
              <h1>Flamingo React Class Lists</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        />

        <Route
          path="/new"
          element={
            <div>
              <NavigationBar />
              <h1>Add New Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <p>
              <NavigationBar />
            </p>
          }
        />
        <Route
          path="/contact"
          target="_blank"
          element={
            <p>
              <NavigationBar />
              <a
                href="https://www.linkedin.com/abebe-tesso"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
