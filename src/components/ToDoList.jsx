import React from "react";
import ToDo from "./ToDo";
import EditTodoForm from "./EditTodoForm";

function ToDoList(props) {
  const todoElements = props.todoList.map((todo) => {
    return todo.isEditing ? (
      <EditTodoForm
        key={todo.id}
        todoText={todo.todoText}
        handleTodoEdit={(e) => props.handleTodoEdit(e, todo.id)}
        stopTodoEditMode={() => props.toggleTodoEditMode(todo.id)}
      />
    ) : (
      <ToDo
        key={todo.id}
        todoText={todo.todoText}
        isCompleted={todo.isCompleted}
        toggleTodo={() => props.toggleTodo(todo.id)}
        startTodoEditMode={() => props.toggleTodoEditMode(todo.id)}
        deleteTodo={() => props.deleteTodo(todo.id)}
      />
    );
  });

  return <div className="todo-list-container">{todoElements}</div>;
}

export default ToDoList;
