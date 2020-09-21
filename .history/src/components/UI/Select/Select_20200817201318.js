import React from "react";
import classes from "./Select.module.css";

const Select = (props) => {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.option.map((option, index) => {
          return <option value={option.value}>{option.text}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
