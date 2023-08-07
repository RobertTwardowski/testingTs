import { useRef } from "react";


const NewTodo: React.FC<{onAddTodo: (text: string)=> void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value

    if(enteredText.trim().length === 0){
        return
    }

    props.onAddTodo(enteredText)
  };

  return (
    <form onClick={sumbitHandler}>
      <label htmlFor="text"> Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
