import React from "react";

function ToDoForm(props) {
  return (
    <form className="todo-form-container">
      <input
        className="todo-input"
        type="text"
        name="new_task"
        placeholder="new task"
        onChange={props.handleFormChange}
        value={props.newTodo}
      />
      <button
        className="add-todo-button"
        type="submit"
        onClick={props.addNewTodo}
      >
        add
      </button>
    </form>
  );
}

export default ToDoForm;
