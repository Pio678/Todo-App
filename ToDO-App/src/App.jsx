import "./css/App.css";
import ToDoForm from "./components/ToDoForm";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <>
      <Header />
      <ToDoForm />
      <ToDoList />
    </>
  );
}

export default App;
