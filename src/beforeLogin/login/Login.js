import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { ctx } from "../../myContext";

const Login = (props) => {
  const uid = React.createRef();
  const pwd = React.createRef();
  const ctxData = useContext(ctx);
  const fnLogin = () => {
    let u = uid.current.value;
    let p = pwd.current.value;
    var httpObj = new XMLHttpRequest();
    httpObj.open("get", `${ctxData}users/login/${u}?pwd=${p}`);
    httpObj.send();
    httpObj.onload = () => {
      let res = httpObj.responseText;
      res = JSON.parse(res);
      if (res.length > 0) {
        alert("sucess");
        sessionStorage.role = window.btoa(res[0].role);
        sessionStorage.name = res[0].uid;
        sessionStorage.isLogged = true;
        props.fnUpdateLogin(true);
      } else {
        sessionStorage.isLogged = false;
        alert("Please check entered uid or password");
      }
    };
    httpObj.onerror = () => {
      alert("something went wrong..");
    };
  };

  const fnSignUp = (e) => {
    e.preventDefault();
    props.fnToggleSignInSignUp(false);
  };
  return (
    <div className="container-fluid">
      <h3 className="text-center mt-3 mb-4">Login</h3>
      <div className="row mb-3">
        <div className="col-5 text-end">
          <b>uid:</b>
        </div>
        <div className="col-3 ">
          <input ref={uid} className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-5 text-end ">
          <b>password:</b>
        </div>
        <div className="col-3">
          <input ref={pwd} type="password" className="form-control" />
        </div>
      </div>

      <div className="row mb-3 ">
        <div className="offset-5 col-7">
          <input
            onClick={fnLogin}
            className="btn btn-primary"
            type="button"
            value="Login"
          />
          <b className="ms-4">
            To signUp
            <a onClick={fnSignUp} href="">
              Click Here
            </a>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Login;
