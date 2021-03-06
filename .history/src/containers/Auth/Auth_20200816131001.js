import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button.js";
import

export default class Auth extends Component {
  loginHeandler = () => {};

  registerHeandler = () => {};

  submitHeadler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <dev>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHeadler} className={classes.AuthForm}>
            <input type="text" />
            <input type="text" />
            <Button type="success" onClick={this.loginHeandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHeandler}>
              Зарегестрироваться
            </Button>
          </form>
        </dev>
      </div>
    );
  }
}
