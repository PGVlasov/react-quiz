import React from "react";
import classes from "./BeckDrop.module.css";

const BeckDrop = (props) => (
  <div className={classes.BeckDrop} onClick={props.onClick} />
);

export default BeckDrop;
