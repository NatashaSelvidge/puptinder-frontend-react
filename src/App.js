import React, { Component } from "react";
import Dogs from "./components/Dogs"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Pup Tinder</h1>
        <Dogs />
      </div>
    );
  }
}

export default App;
