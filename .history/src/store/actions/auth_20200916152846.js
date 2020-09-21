import axios from "axios";
import { AUTH_LOGAUT, AUTH_SUCCESS } from "./actionTypes";

export function auth(email, password, islogin) {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBj6LjpeYl38T7iyVUessnzLwkC66ta9go";

    if (islogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBj6LjpeYl38T7iyVUessnzLwkC66ta9go";
    }

    const response = await axios.post(url, authData);
    const data = response.data;

    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expirationDate", expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
}

export function autoLogout(time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGAUT,
  };
}

export function autoLogin() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = localStorage.getItem("expirationDate");
    }
  };
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token,
  };
}
