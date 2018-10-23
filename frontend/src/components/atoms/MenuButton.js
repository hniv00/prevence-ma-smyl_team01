import React, { Component } from "react";
import {Button} from 'reactstrap';

export class MenuButton extends Component {
  render() {
    return (
      <nav id="menuToggle" onMouseDown={this.props.handleMouseDown}>
          <input type="checkbox" />
          <span ></span>
          <span ></span>
          <span ></span>
      </nav>
    );
  }
}
