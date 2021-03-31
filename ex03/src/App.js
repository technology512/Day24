import React, { Component } from "react";

export class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>SET LOCAL STORAGE</button>
      </div>
    );
  }
}

export default App;
