import React,{useContext} from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from './store/todo-context'
import Todo from "../models/todo";

const Todos: React.FC = () => {

 const todosCtx =  useContext(TodosContext)

  return (
    <div>
      <ul>
        {todosCtx.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
