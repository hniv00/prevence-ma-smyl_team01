import React, { Component } from "react";
import '../../App.css';

export class MenuButton extends Component {
  render() {
    const { handleMouseDown } = this.props
    return (
      <div>
        <div class="buttonContainer" style={{display: 'inline-block'}} onClick={this.myFunction}
             onMouseDown={handleMouseDown}>
             <i class="material-icons buttonContainerItem">menu</i><span class="buttonContainerItem"></span>
        </div>
      </div>
    );
  }
}


// Hamburger button cannot be aligned in line with title Menu
/*
  <div class="buttonContainer" style={{display: 'inline-block'}} onClick={this.myFunction}
       onMouseDown={handleMouseDown}>
       <i class="material-icons buttonContainerItem">menu</i><span class="buttonContainerItem">MENU</span>
  </div>
*/
