import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  // initial static array as required
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false },
  ]);

  const addTodo = (text) =>
    setTodos((t) => [...t, { id: Date.now(), text, completed: false }]);

  const toggleTodo = (id) =>
    setTodos((t) =>
      t.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTodo = (id) =>
    setTodos((t) => t.filter((todo) => todo.id !== id));

  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: 8,
              }}
            >
              {todo.text}
            </span>
            <button
              aria-label={`delete-${todo.id}`}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

