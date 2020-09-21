import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1.</strong>
          Haw are you
          <i />
        </li>
      </ul>
      <p>ghfdbkmyj 4 bp 10</p>
      <div>
        <button>повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
