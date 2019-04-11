import React, { Component } from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import TrafficLight from "./component/trafficLight";

import "./styles.css";
const initialState = { active:-1 };

function reducer( state=initialState, action){
  switch (action.type) {
    case "ACTIVATE":
      return { active: action.active};
    default:
      return state;
  }
}
const store = createStore(reducer);
class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <TrafficLight />
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
