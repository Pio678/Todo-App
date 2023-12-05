import "./css/App.css";
import ToDoForm from "./components/ToDoForm";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import React, { useEffect, useState } from "react";

function App() {
  const [newTodo, setNewTodo] = React.useState("");

  const [todoList, setTodoList] = React.useState(() => {
    const localValue = localStorage.getItem("todoList");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function toggleTodo(id) {
    setTodoList((prevTodolist) => {
      let newTodoList = prevTodolist.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
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

  //function turns edit mode on and off
  function toggleTodoEditMode(id) {
    setTodoList((prevTodolist) => {
      return prevTodolist.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      });
    });
  }

  function handleTodoEdit(e, id) {
    console.log(e.target.value);

    setTodoList((prevTodolist) =>
      prevTodolist.map((todo) => {
        return todo.id === id ? { ...todo, todoText: e.target.value } : todo;
      })
    );
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
      {
        id: crypto.randomUUID(),
        isCompleted: false,
        isEditing: false,
        todoText: newTodo,
      },
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
        handleFormChange={handleFormChange}
        deleteTodo={deleteTodo}
        toggleTodoEditMode={toggleTodoEditMode}
        handleTodoEdit={handleTodoEdit}
      />
    </>
  );
}

export default App;
