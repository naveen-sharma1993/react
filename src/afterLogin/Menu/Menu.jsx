import "./Menu.css";
import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../Home/index";
import WriteTest from "../WriteTest/index";
import Result from "../Result/index";
import Questions from "../Questions/index";

function template() {
  const { role } = this.state;
  return (
    <div>
      <BrowserRouter>
        <ul className="menu bg-secondary">
          <li>
            <Link to="/home">Home</Link>
          </li>
          {role == "admin" ? (
            <li>
              <Link to="questions">Questions</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="write-test">Write Test</Link>
              </li>
              <li>
                <Link to="result">Result</Link>
              </li>
            </>
          )}

          <li onClick={this.fnLogout.bind(this)}>
            <Link to="">Logout</Link>
          </li>
        </ul>
        <div className="mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {role != "admin" && (
              <Route path="/write-test" element={<WriteTest />} />
            )}
            {role != "admin" && <Route path="/result" element={<Result />} />}
            {role == "admin" && (
              <Route path="/questions" element={<Questions />} />
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default template;
