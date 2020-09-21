import axios from "../../axios/axios-quiz";
import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_STARS,
  FETCH_QUIZES_SUCCESS,
} from "./actionTypes";

export function fetchQuizes() {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());
    try {
      const response = await axios.get("/quizes.json");

      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест № ${index + 1}`,
        });
        dispatch(fetchQuizesSuccess(quizes));
      });
    } catch (e) {
      dispatch(fetchQuizesErros(e));
    }
  };
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_STARS,
  };
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes,
  };
}

export function fetchQuizesErros(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e,
  };
}
