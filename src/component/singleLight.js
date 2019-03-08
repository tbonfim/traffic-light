import React from "react";

export default class SingleLight extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.color +
          " " +
          (this.props.active ? " active " : "") +
          " light"
        }
        onClick={this.props.onClick}
        data-color={this.props.color}
      />
    );
  }
}
