import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
