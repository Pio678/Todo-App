import editIcon from "../assets/icons/edit2.png";
import deleteIcon from "../assets/icons/delete.png";

function ToDo() {
  return (
    <div className="todo-container">
      <div className="todo-left">
        <input className="todo-checkbox" type="checkbox" />
        <h2 className="todo-text">finish page</h2>
      </div>
      <div className="todo-right">
        <img className="todo-icon" src={editIcon} />
        <img className="todo-icon" src={deleteIcon} />
      </div>
    </div>
  );
}

export default ToDo;
