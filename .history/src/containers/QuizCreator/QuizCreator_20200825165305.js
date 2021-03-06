import React, { Component } from "react";
import classes from "./QuizCreator.module.css";
import Button from "../../components/UI/Button/Button.js";
import {
  createControl,
  validate,
  validateForm,
} from "../../form/formFramework.js";
import Input from "../../components/UI/Input/Input.js";
import Auxillary from "../../hoc/Auxillary/Auxillary.js";
import Select from "../../components/UI/Select/Select.js";

function createOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "значение не может быть пустым",
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Введите влпрос",
        errorMessage: "Вопрос не может быть пустым",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    rightAnswerid: 1,
    formControls: createFormControls(),
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = (event) => {
    event.preventDefault();

    const quiz = this.state.quiz.concat;
    const index = quiz.length + 1;

    const questionItem = {
      question: this.state.formControls.question.value,
      id: index,
    };
  };

  createQuizHandler = () => {};

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxillary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </Auxillary>
      );
    });
  }

  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerid: +event.target.value,
    });
  };

  render() {
    const select = (
      <Select
        label=" Выберите правильный ответ"
        value={this.state.rightAnswerid}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            {select}
            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button
              type="success"
              onClick={this.createQuizHandler}
              disabled={this.state.quiz === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
