import React, { Component } from "react";
import { connect } from "react-redux";
import logout from "../../store/actions/auth";

class Logout extends Component {
  render() {
    return <div></div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
