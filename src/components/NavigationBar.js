import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavigationBar() {
  return (
    <>
      <nav className={style.NavBar}>
        <Link to="/">Show NavBar</Link>
        <Link to="/new">New Todo List</Link>
        <Link to="/todoList">Todo List</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

export default NavigationBar;
