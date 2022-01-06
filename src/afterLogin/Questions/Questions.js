import React from "react";
import template from "./Questions.jsx";
import axios from "axios";
import { ctx } from "../../myContext";

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      options: ["", ""],
      queObj: {
        que: "",
        ans: "",
        type: "S",
      },
    };
    this.ansOptions = [
      "A",
      "B",
      "C",
      "D",
      "AB",
      "AC",
      "AD",
      "BC",
      "BD",
      "CD",
      "ABC",
      "ABD",
      "BCD",
      "ABCD",
    ];
    this.fnAddOptions = this.fnAddOptions.bind(this);
    this.fnDeleteOptions = this.fnDeleteOptions.bind(this);
    this.fnPrepareOptions = this.fnPrepareOptions.bind(this);
  }
  fnPrepareOptions(val, ind) {
    let _currOptions = this.state.options;
    _currOptions.splice(ind, 1, val);
    this.setState({
      options: _currOptions,
      queObj: {
        ...this.state.queObj,
        options: _currOptions,
      },
    });
  }
  fnAddOptions() {
    let _currOptions = this.state.options;
    if (_currOptions.length == 4) return;
    _currOptions.push("");
    this.setState({
      options: _currOptions,
    });
  }
  fnDeleteOptions(ind) {
    let _currOptions = this.state.options;
    if (_currOptions.length == 2) return;
    _currOptions.splice(ind, 1);
    this.setState({
      options: _currOptions,
    });
  }

  fnChange = (eve) => {
    let val = eve.target.value;
    let key = eve.target.id;
    this.setState({
      queObj: {
        ...this.state.queObj,
        [key]: val,
      },
    });
  };

  fnSubmit() {
    let dataObj = {
      queObj: this.state.queObj,
    };
    axios
      .post(`${this.context}que/insert-que`, dataObj)
      .then((res) => {
        console.log(res);
        const { acknowledged, insertedId } = res.data;
        if (acknowledged && insertedId) {
          alert("success");
          this.setState({
            options: ["", ""],
            queObj: {
              que: "",
              ans: "",
              type: "S",
              options: ["", ""],
            },
          });
        } else {
          alert("fail");
        }
      })
      .catch((res) => {
        alert("Something went wrong");
      });
  }

  render() {
    return template.call(this);
  }
}

Questions.contextType = ctx;
export default Questions;
