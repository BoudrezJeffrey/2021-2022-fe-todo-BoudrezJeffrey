import React from "react";
import TodoItem from "./TodoItem";

function TodosList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

export default TodosList;
