import React from "react";
import classes from "./MenuToggle.module.css";

const MenuTogle = (props) => {
  const cls = [classes.MenuTogle, "fa"];

  if (props.isOpen) {
    cls.push("fa-times");
    cls.push(classes.open);
  } else {
    cls.push("fa-bar");
  }

  return <i className={cls.join(" ")} onClick={props.onToggle} />;
};

export default MenuTogle;
