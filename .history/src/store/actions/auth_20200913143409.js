import axios from "axios";

export function auth(email, password, islogin) {
  return async (dispatch) => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true,
    };
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBj6LjpeYl38T7iyVUessnzLwkC66ta9go",
        authData
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
}
