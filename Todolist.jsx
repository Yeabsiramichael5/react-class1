import React from 'react';
import TodoItem from './Todoitem';

const TodoList = ({ todos, removeTodo, toggleCompleted }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;