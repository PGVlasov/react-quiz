import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((question, index) => {
          const cls = [
              "fa": 
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.$nbsp;
              {question}
              <i className={cls.join(" ")} />
            </li>
          );
        }) }
      </ul>
      <p>правильно 4 из 10</p>
      <div>
        <button>повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
