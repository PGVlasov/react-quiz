import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";
import is from "is_js";

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

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }
    if (validation.minLenght) {
      isValid = value.length >= validation.minLenght && isValid;
    }

    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value);

    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
    });
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
          shouldValidate={!!control.validation}
          errorMassage={control.errorMassage}
          onChange={(event) => this.onChangeHandler(event, controlName)}
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
