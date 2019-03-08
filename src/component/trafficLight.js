import React, { Component } from "react";

import SingleLight from "./singleLight";

export default class TrafficLight extends Component {
  constructor() {
    super();
    this.lights = ["red", "yellow", "green"];
    this.state = {
      active: -1
    };

    this.handleLightCLick = this.handleLightCLick.bind(this);
  }

  handleLightCLick(e) {
    const active = this.lights.indexOf(e.currentTarget.dataset.color);
    this.setState({
      active: active
    });
  }

  render() {
    return (
      <div className="traffic-light-wrapper">
        {this.lights.map((light, index) => {
          return (
            <SingleLight
              key={light}
              color={light}
              onClick={this.handleLightCLick}
              active={this.state.active === index}
            />
          );
        })}
      </div>
    );
  }
}
