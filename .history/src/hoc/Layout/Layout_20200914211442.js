import React, { Component } from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../components/Novigation/MenuToggle/MenuToggle.js";
import Drawer from "../../components/Novigation/Drawer/Drawer.js";
import { connect } from "react-redux";
import isAuthenticated from "../../App";

class Layout extends Component {
  state = {
    menu: false,
  };
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return;
  {
    isAuthenticated: !!state.auth.token;
  }
}

export default connect(mapStateToProps)(Layout);
