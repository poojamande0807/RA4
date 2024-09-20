import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}

      <button onClick={() => toggleTodo(index)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
