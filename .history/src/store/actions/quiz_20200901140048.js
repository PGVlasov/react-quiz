import axios from "../../axios/axios-quiz";

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

export function fetchQuizesStart() {}
export function fetchQuizesSuccess(quizes) {}

export function fetchQuizesErros(e) {}
