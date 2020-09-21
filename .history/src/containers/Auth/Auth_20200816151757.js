import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";

export default class Auth extends Component {
  state = {
    formcontrols: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMassage: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errorMassage: "Введите корректный Пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLenght: 6,
        },
      },
    },
  };

  loginHeandler = () => {};

  registerHeandler = () => {};

  submitHeadler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHeadler} className={classes.AuthForm}>
            <Input label="Email" />
            <Input label="Пароль" errorMessage={"Test"} />
            <Button type="success" onClick={this.loginHeandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHeandler}>
              Зарегестрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
