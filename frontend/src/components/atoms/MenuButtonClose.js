import React, { Component } from "react";
import '../../App.css';

export class MenuButtonClose extends Component {
  render() {
    const { handleMouseDown } = this.props
    return (
      <div>
        <div class="buttonContainerClose" onClick={this.myFunction}
             onMouseDown={handleMouseDown}>
             <i class="material-icons">close</i>
        </div>
      </div>
    );
  }
}
