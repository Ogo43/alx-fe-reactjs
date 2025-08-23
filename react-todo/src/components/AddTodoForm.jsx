import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    onAdd(v);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add a new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
