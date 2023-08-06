import { useRef } from "react";

const NewTodo = () => {
  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault()
  };

  return (
    <form onClick={sumbitHandler}>
      <label htmlFor="text"> Todo text</label>
      <input type="text" id="text" />
      <button >Add Todo</button>
    </form>
  );
};

export default NewTodo;
