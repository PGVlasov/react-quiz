import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const inputType = props.type || "text";
  const cla = [classes.Input];
  return (
    <div>
      <label htmlFor=""></label>
      <input type={inputType} className={classes.input}></input>
    </div>
  );
};

export default Input;
