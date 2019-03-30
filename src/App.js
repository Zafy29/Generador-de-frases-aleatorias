import React, { Component } from "react";
import "./App.css";
import Frases from "./components/Frases";

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1 className="title">
            Generador de frases aleatorias <i className="far fa-comment-dots" />
          </h1>
          <Frases />
          <div className="footer">
          <p>
            by <a href="https://github.com/Belquira">belquira <i className="fab fa-github-alt" /></a>
          </p>
        </div>
        </div>
    );
  }
}

export default App;
