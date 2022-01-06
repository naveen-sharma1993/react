import "./Result.css";
import React from "react";

function template() {
  return (
    <div className="result">
      <h1 className="text-center mb-5">Your Test Results</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th> Date</th>
              <th>Marks(%)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((obj, index) => {
              return (
                <tr key={index}>
                  <td>{obj.date}</td>
                  <td>{obj.marks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default template;
