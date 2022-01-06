import React from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      role: window.atob(sessionStorage.role),
    };
  }

  fnLogout() {
    sessionStorage.clear();
    this.props.fnUpdateLogin(false);
  }

  render() {
    return template.call(this);
  }
}

export default Menu;
