import axios from "../../axios/axios-quiz";
import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_STARS,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZ_ERROR,
} from "./actionTypes";

export default function fetchQuizes() {
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

export function fetchQuizByTd(quizId) {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());
    try {
      const response = await axios.get(`/quizes/${quizId}.json`);
      const quiz = response.data;

      dispatch(fetchQuizSuccess(quiz));
    } catch (e) {
      dispatch(fetchQuizesErros(e));
    }
  };
}

export function fetchQuizSuccess(quiz) {
  return {
    type: FETCH_QUIZ_ERROR,
    quiz,
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
