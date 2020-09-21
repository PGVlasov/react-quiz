import React, { Component } from "react";
import classes from "./QuizList.module.css";

export default class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3];
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}
