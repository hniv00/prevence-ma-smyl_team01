import React, { Component } from "react";
import {Button} from 'reactstrap';

export class MenuButton extends Component {
  render() {
    return (
      <Button
              onMouseDown={this.props.handleMouseDown}>Menu</Button>
    );
  }
}
