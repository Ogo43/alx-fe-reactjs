import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  // Static initial todos (as required)
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Write Tests", completed: false },
  ]);

  const handleAddTodo = (text) => {
    setTodos((prev) => [...prev, { text, completed: false }]);
  };

  const handleToggleTodo = (index) => {
    setTodos((prev) =>
      prev.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AddTodoForm onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li
            key={`${todo.text}-${index}`}
            onClick={() => handleToggleTodo(index)}
            className={todo.completed ? "completed" : ""}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent toggle when clicking delete
                handleDeleteTodo(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

