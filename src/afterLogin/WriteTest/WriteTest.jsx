import "./WriteTest.css";
import React from "react";

function template() {
  const { questions, isTestSubmited, timeLeft } = this.state;
  const ansOptArr = ["A", "B", "C", "D"];
  return (
    <div className="write-test">
      {questions.map((obj, index) => {
        return (
          <div key={index} className="mb-3 ms-3">
            <h5>
              {index + 1}.{obj.que}
            </h5>
            {obj.options.map((v, i) => {
              return (
                <p key={i}>
                  {obj.type == "S" ? (
                    <input
                      disabled={isTestSubmited}
                      value={ansOptArr[i]}
                      onChange={this.fnAnsChange}
                      name={obj._id}
                      type="radio"
                    />
                  ) : (
                    <input
                      disabled={isTestSubmited}
                      value={ansOptArr[i]}
                      onChange={this.fnAnsChange}
                      name={obj._id}
                      type="checkbox"
                    />
                  )}
                  {v}
                </p>
              );
            })}
          </div>
        );
      })}
      {!isTestSubmited && (
        <p>
          <input
            onClick={this.fnSubmit.bind(this)}
            className="btn btn-primary"
            type="submit"
            value="Submit"
          />
        </p>
      )}
      <h1 className="time-left">{timeLeft}</h1>
    </div>
  );
}

export default template;
