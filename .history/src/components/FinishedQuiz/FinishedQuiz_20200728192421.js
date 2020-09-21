import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1.</strong>
          Haw are you?
        </li>
      </ul>
    </div>
  );
};

export default FinishedQuiz;
