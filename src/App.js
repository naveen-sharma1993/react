import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import BeforeLogin from "./beforeLogin/BeforeLogin";
import AfterLogin from "./afterLogin/AfterLogin";
import { ctx } from "./myContext";

const baseUrl = "http://localhost:2020/";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    let _isLoggedIn = sessionStorage.isLogged;
    setIsLoggedIn(_isLoggedIn == "true" ? true : false);
  }, []);

  const fnUpdateLogin = (bool) => {
    setIsLoggedIn(bool);
  };
  return (
    <div className="App">
      <ctx.Provider value={baseUrl}>
        <Header />
        {isLoggedIn ? (
          <AfterLogin fnUpdateLogin={fnUpdateLogin} />
        ) : (
          <BeforeLogin fnUpdateLogin={fnUpdateLogin} />
        )}

        <Footer />
      </ctx.Provider>
    </div>
  );
}

export default App;
