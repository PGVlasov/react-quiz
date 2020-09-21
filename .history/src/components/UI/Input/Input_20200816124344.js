import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;
  return (
    <div>
      <label htmlFor={htmlFor}></label>
      <input type={inputType} className={cls.join(" ") id = {htmlFor}}></input>
    </div>
  );
};

export default Input;
