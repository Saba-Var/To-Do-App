import styles from "./Button.module.css";

// import { Context } from "../store/context";
// import { useContext } from "react";

const Button = (props) => {
  return <button className={styles["button-5"]}>{props.text}</button>;
};
export default Button;
