import editIcon from "../assets/icons/edit2.png";
import deleteIcon from "../assets/icons/delete.png";

function ToDo(props) {
  return (
    <div className="todo-container">
      <div className="todo-left">
        <input
          className="todo-checkbox"
          type="checkbox"
          onChange={props.toggleTodo}
          checked={props.isCompleted}
        />
        <h2 className={props.isCompleted ? "todo-text-completed" : "todo-text"}>
          {props.todoText}
        </h2>
      </div>
      <div className="todo-right">
        <img
          className="todo-icon"
          onClick={props.startTodoEditMode}
          src={editIcon}
        />
        <img
          className="todo-icon"
          onClick={props.deleteTodo}
          src={deleteIcon}
        />
      </div>
    </div>
  );
}

export default ToDo;
