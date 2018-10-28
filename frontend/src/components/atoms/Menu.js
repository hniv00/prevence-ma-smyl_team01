import React, { Component } from "react"
import "../../App.css";
import {MenuButton} from "./MenuButton"

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
        <a href="#" class="menu-close-button" data-rel="menu-close-button">
				<MenuButton handleMouseDown={this.handleMouseDown}/> </a>
        <a id="cssHamburgerMenu" href="/"><p>Landing Page</p></a>
        <a id="cssHamburgerMenu" href="/vysetreni"><p>Preventivní vyšetření</p></a>
        <a id="cssHamburgerMenu" href="/feed"><p>#PrevenceMaSmysl</p></a>
        <a id="cssHamburgerMenu" href="/pribehy"><p>Příběhy</p></a>
        <a id="cssHamburgerMenu" href="/akce"><p>Akce</p></a>
        <a id="cssHamburgerMenu" href="/kontakty"><p>Kontakt</p></a>
        <a id="cssHamburgerMenu" href="/admin"><p>Admin modul</p></a>
      </div>
    );
  }
}
