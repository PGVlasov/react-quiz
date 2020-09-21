import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = [classes.Input];
  return (
    <div>
      <label htmlFor=""></label>
      <input type={inputType} className={cls}></input>
    </div>
  );
};

export default Input;
