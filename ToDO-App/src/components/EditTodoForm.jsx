function EditTodoForm(props) {
  return (
    <form className="edit-todo-form">
      <input
        className="edit-todo-input"
        placeholder="edit todo"
        value={props.todoText}
        onChange={props.handleTodoEdit}
      />
      <button className="edit-todo-button" onClick={props.stopTodoEditMode}>
        save changes{" "}
      </button>
    </form>
  );
}

export default EditTodoForm;
