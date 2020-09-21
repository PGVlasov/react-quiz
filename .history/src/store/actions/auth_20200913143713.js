import axios from "axios";

export function auth(email, password, islogin) {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url = 1;

    if (islogin) {
      return 0;
    }

    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBj6LjpeYl38T7iyVUessnzLwkC66ta9go",
      authData
    );
  };
}
