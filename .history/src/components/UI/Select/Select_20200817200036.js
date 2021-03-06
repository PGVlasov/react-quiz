import React from "react";
import classes from "./Select.module.css";

const Select = (props) => {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor}></select>
    </div>
  );
};

export default Select;
