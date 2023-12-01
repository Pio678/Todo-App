function ToDoForm() {
  return (
    <form className="todo-form-container">
      <input
        className="todo-input"
        type="text"
        name="new_task"
        placeholder="new task"
      />
      <button className="add-todo-button" type="submit">
        add
      </button>
    </form>
  );
}

export default ToDoForm;
