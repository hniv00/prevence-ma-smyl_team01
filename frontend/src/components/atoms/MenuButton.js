import React, { Component } from "react";
import '../../App.css';

export class MenuButton extends Component {
  render() {
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}
