import React from "react";
import classes from "./MenuToggle.module.css";

const MenuTogle = (props) => {
  const cls = [classes.MenuTogle, "fa"];
  return <i className={cls.join(" ")} onClick={props.onToggle} />;
};

export default MenuTogle;
