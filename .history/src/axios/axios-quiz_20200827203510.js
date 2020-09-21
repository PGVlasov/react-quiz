import axios from "axios";

export default axios.create({
  baseURL: "https://react-quiz-db4eb.firebaseio.com",
});
