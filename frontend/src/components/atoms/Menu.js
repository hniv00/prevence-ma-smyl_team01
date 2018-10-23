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
        <a href="/"><h2>Landing Page</h2></a>
        <a href="/vysetreni"><h2>Preventivní vyšetření</h2></a>
        <a href="/feed"><h2>#PrevenceMaSmysl</h2></a>
        <a href="/pribehy"><h2>Příběhy</h2></a>
        <a href="/akce"><h2>Akce</h2></a>
        <a href="/kontakty"><h2>Kontakt</h2></a>
      </div>
    );
  }
}
