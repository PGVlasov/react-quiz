import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Quiz from "./containers/Quiz/Quiz.js";
import Auth from "./containers/Auth/Auth.js";
import QuizCreator from "./containers/QuizCreator/QuizCreator.js";
import QuizList from "./containers/QuizList/QuizList.js";
import { connect } from "react-redux";


class App extends Component() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
      </Switch>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.ayth.token,
  };
}

export default connect(mapStateToProps)(App);
