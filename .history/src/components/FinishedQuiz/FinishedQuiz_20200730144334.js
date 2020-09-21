import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  });
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
      <p>правильно 4 из {props.quiz.lenght}</p>
      <div>
        <button>повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
