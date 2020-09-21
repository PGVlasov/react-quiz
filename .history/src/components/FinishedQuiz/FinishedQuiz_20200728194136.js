import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li className={"fa fa-times"}>
          <strong>1.</strong>
          Haw are you
          <i />
        </li>
      </ul>
      <p>правильно 4 из 10</p>
      <div>
        <button>повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
