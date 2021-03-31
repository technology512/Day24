import React, { Component } from "react";

export class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };

  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem("Arena");
    console.log(myLocalStorageData);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>SET LOCAL STORAGE</button>
        <button onClick={this.getLocalStorage}>GET LOCAL STORAGE</button>
      </div>
    );
  }
}

export default App;
