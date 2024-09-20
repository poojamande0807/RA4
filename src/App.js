import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todoText) => {
    setTodos([...todos, { text: todoText, completed: false }]);
  };
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
export default App;
