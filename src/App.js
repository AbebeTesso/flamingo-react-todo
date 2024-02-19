import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

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

        const sortTodo = data.records.sort((objectA, objectB) => {
          if (objectA.fields.title < objectB.fields.title) {
            return -1;
          } else if (objectA.fields.title === objectB.fields.title) {
            return 0;
          } else {
            return 1;
          }
        });
        const todosMain = sortTodo.map((todo) => {
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
  const removeTodoList = async (id) => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error has occured: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const addTodo = async (newTodo) => {
    const newPost = await postTodoList(newTodo);
    setTodoList((prevTodoList) => [...prevTodoList, newPost]);
  };
  const removeTodo = (id) => {
    removeTodoList(id);
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
            <div>
              <NavigationBar />
            </div>
          }
        />
        <Route
          path="/contact"
          target="_blank"
          element={
            <div>
              <NavigationBar />
              <a
                href="https://www.linkedin.com/abebe-tesso"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
