import "./css/App.css";
import ToDoForm from "./components/ToDoForm";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import React, { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = React.useState("");

  const [todoList, setTodoList] = React.useState([]);

  function toggleTodo(id) {
    setTodoList((prevTodolist) => {
      let newTodoList = prevTodolist.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isChecked: !todo.isChecked };
        }
        return todo;
      });

      return newTodoList;
    });
  }

  function deleteTodo(id) {
    setTodoList((prevTodolist) => {
      return prevTodolist.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  function handleFormChange(e) {
    setNewTodo(e.target.value);
  }

  function addNewTodo(e) {
    e.preventDefault();

    //we check if newTodo is empty
    if (newTodo === "") {
      return;
    }
    setTodoList((prevTodolist) => [
      ...prevTodolist,
      { id: crypto.randomUUID(), isChecked: false, todoText: newTodo },
    ]);

    setNewTodo("");
  }

  return (
    <>
      <Header />
      <ToDoForm
        newTodo={newTodo}
        handleFormChange={handleFormChange}
        addNewTodo={addNewTodo}
      />
      <ToDoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
