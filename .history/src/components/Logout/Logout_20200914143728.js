import React, { Component } from "react";
import { connect } from "react-redux";

class Loguot extends Component {
  render() {
    return <div></div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Loguot);
