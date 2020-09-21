import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Quiz from "./containers/Quiz/Quiz.js";
import Auth from "./containers/Auth/Auth.js";
import QuizCreator from "./containers/QuizCreator/QuizCreator.js";
import QuizList from "./containers/QuizList/QuizList.js";
import { connect } from "react-redux";
import Logout from "./components/Logout/Logout";

class App extends Component() {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={QuizList} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

export default connect(mapStateToProps)(App);
