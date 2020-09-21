import axios from "axios";

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

    const expirationData = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expirationData", expirationData);

    dispatch(authSuccess(data.idToken));
  };
}

export function authSuccess(token) {}
