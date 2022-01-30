import React from "react";
import { useState } from "react";
export const Context = React.createContext({
  input: "input",
  changeInput: "setInput",
  todos: "todo",
  setTodo: "setTodo",
});

export const Provider = (props) => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const data = {
    input: input,
    changeInput: setInput,
    todos: todo,
    setTodo: setTodo,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
