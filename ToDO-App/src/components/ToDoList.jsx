import React from "react";
import ToDo from "./ToDo";

function ToDoList(props) {
  const todoElements = props.todoList.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        todoText={todo.todoText}
        isChecked={todo.isChecked}
        toggleTodo={() => props.toggleTodo(todo.id)}
        deleteTodo={() => props.deleteTodo(todo.id)}
      />
    );
  });

  return <div className="todo-list-container">{todoElements}</div>;
}

export default ToDoList;
