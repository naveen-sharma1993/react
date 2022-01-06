import React from "react";
import template from "./Result.jsx";
// import $ from "jquery";
import axios from "axios";
import {ctx} from '../../myContext'

class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `${this.context}result/get-result/${window.sessionStorage.name}`
      )
      .then((res) => {
        this.setState({
          result: res.data.reverse(),
        });
      })
      .catch(() => {
        this.setState({
          result: [],
        });
      });
  }
  render() {
    return template.call(this);
  }
}

Result.contextType=ctx
export default Result;
