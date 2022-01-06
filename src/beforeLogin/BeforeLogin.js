import React, { useState } from "react";
import Login from "./login/Login";
import Register from "./Register/index";

const BeforeLogin = (props) => {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const fnToggleSignInSignUp = (bool) => {
    setIsShowLogin(bool);
  };
  return (
    <div>
      {isShowLogin ? (
        <Login
          fnUpdateLogin={props.fnUpdateLogin}
          fnToggleSignInSignUp={fnToggleSignInSignUp}
        />
      ) : (
        <Register fnToggleSignInSignUp={fnToggleSignInSignUp} />
      )}
    </div>
  );
};

export default BeforeLogin;
