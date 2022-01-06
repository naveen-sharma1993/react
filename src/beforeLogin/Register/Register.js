import React from "react";
import template from "./Register.jsx";
import { ctx } from "../../myContext";

class Register extends React.Component {
  constructor() {
    super();
    this.timeoutId = null;
    this.state = {
      isUserExist: "",
    };
  }
  fnChangeUid(eve) {
    let uid = eve.target.value;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      let httpObj = new XMLHttpRequest();
      httpObj.open("get", `${this.context}users/check-uid/${uid}`);
      httpObj.send();
      httpObj.onload = () => {
        let res = httpObj.responseText;
        this.setState({
          isUserExist: res == 1 ? "t" : "f",
        });
      };
      httpObj.onerror = () => {};
    }, 500);
  }

  fnRegister() {
    if (this.state.isUserExist == "t") {
      alert("user already existed");
      return;
    }

    const { uidRef, pwdRef, phoneRef, emailRef } = this.refs;

    let uid = uidRef.value;
    let pwd = pwdRef.value;
    let phone = phoneRef.value;
    let email = emailRef.value;

    let data = { uid, pwd, phone, email };

    fetch(`${this.context}users/reg`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.acknowledged && response.insertedId) {
          alert("inserted");
        } else {
          alert("not inserted");
        }
      })
      .catch((response) => {
        alert("something went wrong");
      });
  }
  fnSignIn(e) {
    e.preventDefault();
    this.props.fnToggleSignInSignUp(true);
  }

  render() {
    return template.call(this);
  }
}

Register.contextType = ctx;
export default Register;
