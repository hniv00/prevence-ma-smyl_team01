import React, { Component } from "react";
import '../../App.css';

export class MenuButtonClose extends Component {
  render() {
    return (
      <div>
        <div class="buttonContainerClose" onClick={this.myFunction}
             onMouseDown={this.props.handleMouseDown}>
             <i class="material-icons">close</i>
        </div>
      </div>
    );
  }
}
