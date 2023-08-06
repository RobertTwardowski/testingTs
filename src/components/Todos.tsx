import React from "react";

import TodoItem from './TodoItem'
import Todo from "../models/todo";


const Todos: React.FC <{items: Todo[]}> = (props) => {
  return (
    <div>
      <ul>{props.items.map(item =><TodoItem key={item.id} text={item.text}></TodoItem>)}</ul>
    </div>
  );
};

export default Todos;
