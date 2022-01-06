import "./Register.css";
import React from "react";

function template() {
  const { isUserExist } = this.state;
  return (
    <div className="container-fluid">
      <h3 className="text-center mt-3 mb-4">Register</h3>
      <div className="row mb-3">
        <div className="col-5 text-end">
          <b>uid:</b>
        </div>
        <div className="col-3 ">
          <input
            onChange={this.fnChangeUid.bind(this)}
            ref="uidRef"
            className="form-control"
          />
        </div>
        <div className="col-4">
          {isUserExist != "" &&
            (isUserExist == "t" ? (
              <b className="text-danger">User Already Existed</b>
            ) : (
              <b className="text-success">User Available</b>
            ))}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-5 text-end ">
          <b>password:</b>
        </div>
        <div className="col-3">
          <input ref="pwdRef" type="password" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-5 text-end ">
          <b>Phone:</b>
        </div>
        <div className="col-3">
          <input ref="phoneRef" type="number" className="form-control" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-5 text-end ">
          <b>E-mail:</b>
        </div>
        <div className="col-3">
          <input ref="emailRef" type="email" className="form-control" />
        </div>
      </div>

      <div className="row mb-3 ">
        <div className="offset-5 col-7">
          <input
            onClick={this.fnRegister.bind(this)}
            className="btn btn-primary"
            type="button"
            value="Register"
          />
          <b className="ms-3">
            To Login
            <a onClick={this.fnSignIn.bind(this)} href="">
              Click Here
            </a>
          </b>
        </div>
      </div>
    </div>
  );
}

export default template;
