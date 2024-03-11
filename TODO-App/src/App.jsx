import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [{
    name: 'Buy Milk',
    dueDate: '4/11/2023',
  },
  {
    name: 'Go To College',
    dueDate: '5/11/2023',
  },
  {
    name: 'Have Breakfast',
    dueDate: '6/11/2023',
  }
];

  return <center className="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>

}
export default App
