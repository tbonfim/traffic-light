import React, { Component } from "react";
import ReactDOM from "react-dom";

import TrafficLight from "./component/trafficLight";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrafficLight />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
