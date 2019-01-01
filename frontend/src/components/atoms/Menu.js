import React, { Component } from "react"
import "../../App.css";
import {MenuButtonClose} from "./MenuButtonClose"
import { Button } from 'reactstrap';

const data = [
  { href: '/vysetreni', title: 'Preventivní vyšetření'},
  { href: '/pribehy', title: '#PrevenceMaSmysl'},
  { href: '/akce', title: 'Akce'},
  { href: '/partneri', title: 'Partnerské projekty'},
  { href: '/kontakty', title: 'Kontakt'},
  { href: '/projekt', title: 'O projektu'},
  { href: '/blog', title: 'Blog'},
  { href: '/admin-login', title: 'Admin modul'}
]

export class Menu extends Component {
  render() {
    const { handleMouseDown } = this.props
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

  //  const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

    return (
      <div id="flyoutMenu" className={visibility}>
        <a href="#" className="menu-close-button" data-rel="menu-close-button"
            onMouseDown={handleMouseDown} className={visibility}>
				<MenuButtonClose className="menu-close-button" handleMouseDown={this.handleMouseDown}/> </a>
        {data.map ( item => (
          <a key={item.href} id="cssHamburgerMenu" href={item.href}><p>{item.title}</p></a>
        ))}
      </div>
    );
  }
}
