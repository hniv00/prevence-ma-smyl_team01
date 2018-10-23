import React, { Component } from "react"
import "../../App.css";

export class Menu extends Component {
  render() {
    return (
      <Nav navbar>
        <NavItem>
          <NavLink href="/">Landing Page</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/vysetreni">Preventivní vyšetření</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/feed">#PrevenceMaSmysl</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/pribehy">Příběhy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/akce">Akce</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/kontakty">Kontakt</NavLink>
        </NavItem>
      </Nav>
    );
  }
}
