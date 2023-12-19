import React from 'react';

const TodoItem = ({ todo, removeTodo, toggleCompleted }) => {
  const { id, text, completed } = todo;

  const handleRemoveClick = () => {
    removeTodo(id);
  };

  const handleCheckboxChange = () => {
    toggleCompleted(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <span className={completed ? 'completed' : ''}>{text}</span>
      <button onClick={handleRemoveClick}>Remove</button>
    </li>
  );
};

export default TodoItem;
