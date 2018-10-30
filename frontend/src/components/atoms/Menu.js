import React, { Component } from "react"
import "../../App.css";
import {MenuButtonClose} from "./MenuButtonClose"
import { Button } from 'reactstrap';

export class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

  //  const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

    return (
      <div id="flyoutMenu" className={visibility}>
        <a href="#" class="menu-close-button" data-rel="menu-close-button"
            onMouseDown={this.props.handleMouseDown} className={visibility}>
				<MenuButtonClose class="menu-close-button" handleMouseDown={this.handleMouseDown}/> </a>
        <a id="cssHamburgerMenu" href="/"><p>Landing Page</p></a>
        <a id="cssHamburgerMenu" href="/vysetreni"><p>Preventivní vyšetření</p></a>
        <a id="cssHamburgerMenu" href="/feed"><p>#PrevenceMaSmysl</p></a>
        <a id="cssHamburgerMenu" href="/pribehy"><p>Příběhy</p></a>
        <a id="cssHamburgerMenu" href="/akce"><p>Akce</p></a>
        <a id="cssHamburgerMenu" href="/kontakty"><p>Kontakt</p></a>
        <a id="cssHamburgerMenu" href="/admin-login"><p>Admin modul</p></a>
      </div>
    );
  }
}
