import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>SET MY STORAGE</button>
      </div>
    );
  }
}

export default App;
