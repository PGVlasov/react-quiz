import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return <button onClick={props.omClick}>{props.children}</button>;
};

export default Button;
