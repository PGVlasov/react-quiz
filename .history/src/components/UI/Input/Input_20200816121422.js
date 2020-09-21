import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" className={classes.input}></input>
    </div>
  );
};

export default Input;
