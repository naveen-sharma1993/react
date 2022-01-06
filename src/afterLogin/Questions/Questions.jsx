import "./Questions.css";
import React from "react";
import Options from "./Options";

function template() {
  const { options } = this.state;
  const { que, ans, type } = this.state.queObj;
  return (
    <div className="questions container-fluid">
      <h3 className="text-center  mt-3 mb-4">Question</h3>
      <div className="row mb-3">
        <div className="col-5 text-end">
          <b>Question:</b>
        </div>
        <div className="col-3">
          <textarea
            value={que}
            id="que"
            onChange={this.fnChange}
            className="form-control"
          ></textarea>
        </div>
      </div>
      {options.map((v, i) => {
        return (
          <Options
            fnPrepareOptions={this.fnPrepareOptions}
            fnDeleteOptions={this.fnDeleteOptions}
            fnAddOptions={this.fnAddOptions}
            data={{ v, i }}
          />
        );
      })}
      <div className="row mb-3">
        <div className="col-5 text-end">
          <b>Answer:</b>
        </div>
        <div className="col-3">
          <select id="ans" className="form-control" onChange={this.fnChange}>
            <option>Please Select One</option>
            {this.ansOptions.map((v, i) => {
              return (
                <option selected={ans == v} value={v} key={i}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-5 text-end ">
          <b>Type:</b>
        </div>
        <div className="col-3">
          <input
            value="M"
            checked={type == "M"}
            name="type"
            id="type"
            onChange={this.fnChange}
            type="radio"
          />
          Multi
          <input
            value="S"
            checked={type == "S"}
            name="type"
            id="type"
            onChange={this.fnChange}
            type="radio"
          />
          Single
        </div>
      </div>

      <div className="row mb-3 ">
        <div className="offset-5 col-7">
          <input
            onClick={this.fnSubmit.bind(this)}
            className="btn btn-primary"
            type="button"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
}

export default template;
