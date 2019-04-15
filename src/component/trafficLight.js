import React, { Component } from "react";
import {connect} from "react-redux";
import SingleLight from "./singleLight";

class TrafficLight extends Component {
  constructor() {
    super();
    this.lights = ["red", "yellow", "green"];

    this.handleLightCLick = this.handleLightCLick.bind(this);
  }

  handleLightCLick(e) {
    const active = this.lights.indexOf(e.currentTarget.dataset.color);
    this.props.dispatch({ type: 'ACTIVATE', active: active} );
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
              active={this.props.active === index}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  active: state.active
});
export default connect(mapStateToProps)(TrafficLight);