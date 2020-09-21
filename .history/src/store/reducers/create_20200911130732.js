import { CREATE_QUIZ_QUESTION } from "../actions/actionTypes";

const initialState = {
  state: [],
};

export default function createReducer(state = initialState, action) {
  switch (action.type) {
      case: CREATE_QUIZ_QUESTION:
      return {
          ...state
      }
    default:
      return state;
  }
}
