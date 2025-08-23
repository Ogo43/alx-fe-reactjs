import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
