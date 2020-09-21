import { CREATE_QUIZ_QUESTION } from "./actionTypes";
import axios from "../../axios/axios-quiz";

export function createQuizQuestion(item) {
  return {
    item,
    type: CREATE_QUIZ_QUESTION,
  };
}

export function finishCreateQuiz() {
  return async (dispatch) => {
    await axios.post("/quizes.json", this.state.quiz);
  };
}
