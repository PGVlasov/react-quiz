import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";

export default class Auth extends Component {
  state = {
    formControls: {
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

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMassage={control.errorMassage}
        />
      );
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHeadler} className={classes.AuthForm}>
            {this.renderInputs()}

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
