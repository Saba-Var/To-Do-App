import Button from "../UI/Button";
import styles from "./Form.module.css";
import { Context } from "../store/context";
import { useContext } from "react";

const Form = () => {
  const data = useContext(Context);
  const inputHandler = (e) => {
    data.changeInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (data.input.trim().length === 0) return;
    data.setTodo((prevTodo) => [...prevTodo, data.input]);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    data.changeInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["form__container"]}>
        <label>What do you want to do?</label>
        <input onChange={inputHandler} />
        <Button text={"Add To DO"} />
      </div>
    </form>
  );
};
export default Form;
