import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_STARS,
  FETCH_QUIZES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  quizes: [],
  loading: false,
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZES_STARS:
      return {};
    case FETCH_QUIZES_SUCCESS:
      return {};
    case FETCH_QUIZES_ERROR:
      return {};
    default:
      return state;
  }
}
