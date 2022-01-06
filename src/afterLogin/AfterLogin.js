import React from "react";
import Menu from "./Menu/index";

const AfterLogin = (props) => {
  return (
    <div>
      <Menu fnUpdateLogin={props.fnUpdateLogin} />
    </div>
  );
};

export default AfterLogin;
