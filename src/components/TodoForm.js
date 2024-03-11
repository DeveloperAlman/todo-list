import { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        className="todo-input"
        placeholder="What's your task today?"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
}

export default TodoForm;
