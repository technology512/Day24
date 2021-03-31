import React, { Component } from "react";

export class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  getMyStorage = () => {
    const myCookieData = document.cookie;
    const myLocalStorageDate = localStorage.getItem("Paragon");
    const mySessionStorageData = sessionStorage.getItem("frontend");
    console.log(myCookieData, myLocalStorageDate, mySessionStorageData);
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>SET MY STORAGE</button>
        <button onClick={this.getMyStorage}>GET MY STORAGE</button>
      </div>
    );
  }
}

export default App;
