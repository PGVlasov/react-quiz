import { CREATE_QUIZ_QUESTION } from "./actionTypes";

export function createQuizQuestion(item) {
  return {
    item,
    type: CREATE_QUIZ_QUESTION,
  };
}

export function finishCreateQuiz() {}
