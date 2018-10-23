import React, { Component } from "react"
import "../../App.css";

export class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown}
           className={visibility}>
        <h2><a href="#">Landing Page</a></h2>
        <h2><a href="#">Preventivní vyšetření</a></h2>
        <h2><a href="#">#PrevenceMaSmysl</a></h2>
        <h2><a href="#">Příběhy</a></h2>
        <h2><a href="#">Akce</a></h2>
        <h2><a href="#">Kontakt</a></h2>
      </div>
    );
  }
}
