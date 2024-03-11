import { useState } from "react";

function EditTodoForm({ editTodo, task }) {
  const [inputValue, setInputValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(inputValue, task.id);
    setInputValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        className="todo-input"
        placeholder="Update Task"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
}

export default EditTodoForm;
