import React, { Component } from "react";
import classes from "./QuizList.module.css";

export default class QuizList extends Component {
  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>
        </div>
      </div>
    );
  }
}
