import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error"
              ? "fa-times " + classes.error
              : "fa-check " + classes.success,
            classes[props.results[quizItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
        {/* <li>
          <strong>1.</strong>
          Haw are you
          <i className={"fa fa-times " + classes.error} />
        </li>
        <li>
          <strong>1.</strong>
          Haw are you
          <i className={"fa fa-check " + classes.success} />
        </li> */}
      </ul>
      <p>правильно 4 из 10</p>
      <div>
        <button>повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
