import React from "react";
import template from "./WriteTest.jsx";
import axios from "axios";
import {ctx} from '../../myContext'
class WriteTest extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      isTestSubmited: false,
      timeLeft: 10,
    };
    this.stdAns = {};

    this.keyAns = {};

    this.fnAnsChange = this.fnAnsChange.bind(this);
    this.fnRunTimer = this.fnRunTimer.bind(this);
  }

  fnRunTimer() {
    this.timerId = window.setInterval(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1,
      });
      if (this.state.timeLeft == 0) {
        this.fnSubmit();
      }
    }, 1000);
  }

  componentDidMount() {
    axios
      .get(`${this.context}que/get-que`)
      .then((res) => {
        let result = res.data;
        result.forEach((obj) => {
          this.keyAns[obj._id] = obj.ans;
        });
        console.log(this.keyAns);
        this.setState({
          questions: result,
        });
        this.fnRunTimer();
      })
      .catch(() => {
        this.setState({
          questions: [],
        });
      });
  }

  fnAnsChange(e) {
    const { name, value, type, checked } = e.target;
    if (type == "checkbox") {
      let chkOptions = this.stdAns[name] ? this.stdAns[name].split("") : [];
      if (checked) {
        chkOptions.push(value);
      } else {
        let _index = chkOptions.indexOf(value);
        chkOptions.splice(_index, 1);
      }

      let val = chkOptions.sort().join("");
      this.stdAns[name] = val;
    } else {
      this.stdAns[name] = value;
    }
  }

  fnSubmit() {
    clearInterval(this.timerId);
    this.setState({
      isTestSubmited: true,
    });

    let marks = 0;
    Object.keys(this.stdAns).forEach((key) => {
      if (this.stdAns[key] == this.keyAns[key]) {
        marks++;
      }
    });
    let marksPercent = (marks / this.state.questions.length) * 100;
    let dateObj = new Date();
    let dataObj = {
      name: window.sessionStorage.name,
      marks: marksPercent,
      date:
        dateObj.getDate() +
        "-" +
        (dateObj.getMonth() + 1) +
        "-" +
        dateObj.getFullYear(),
    };
    axios
      .post(`${this.context}result/save-result`, { resultObj: dataObj })
      .then(() => {})
      .catch(() => {});
  }

  render() {
    return template.call(this);
  }
}

WriteTest.contextType=ctx
export default WriteTest;
