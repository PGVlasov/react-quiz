import axios from "../../axios/axios-quiz";
import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_STARS,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZ_SUCCESS,
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
    type: FETCH_QUIZ_SUCCESS,
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

export function quizSetState(answerState, results) {
  return {
    type: "",
    answerState,
    results,
  };
}

export function quizAnswerClick(answerId) {
  return (dispatch, getState) => {
    const state = getState().quiz;

    if (this.state.answerState) {
      const key = Object.keys(state.answerState)[0];
      if (state.answerState[key] === "success") {
        return;
      }
    }

    const question = state.quiz[this.state.activeQuestion];
    const results = state.results;

    if (question.rigthAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      dispatch(quizSetState({ [answerId]: "success", results }));

      const timaout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          //   this.setState({
          //     isFinished: true,
          //   });
        } else {
          //   this.setState({
          //     activeQuestion: this.state.activeQuestion + 1,
          //     answerState: null,
          //   });
        }

        window.clearTimeout(timaout);
      }, 1000);
    } else {
      results[question.id] = "error";
      ispatch(quizSetState({ [answerId]: "error", results }));
    
  };
}
