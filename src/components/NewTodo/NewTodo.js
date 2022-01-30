import { Context } from "../store/context";
import { useContext } from "react";
import "./NewTodo.css";

const NewTodo = () => {
  const data = useContext(Context);

  const removeItemHandler = (e) => {
    const targetItem = e.target.textContent;
    data.setTodo((prevData) => {
      return [...prevData.filter((mov) => mov !== targetItem)];
    });
  };
  return (
    <>
      {data.todos.length !== 0 && (
        <ul>
          {data.todos.map((mov, i) => (
            <li key={i} id={i} onClick={removeItemHandler}>
              {mov.trim()}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default NewTodo;
