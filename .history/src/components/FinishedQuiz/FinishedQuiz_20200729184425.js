import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quozItem, index) => {
          const cls = ["fa", props.results];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.$nbsp;
              {quozItem.question}
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
