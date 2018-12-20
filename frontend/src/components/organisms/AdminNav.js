import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';

export class AdminNav extends Component {
  render() {
    return (
      <Navbar className="AdminNavBar" color="light" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="AdminNavItem" href="/admin-seznam-vysetreni/">Vyšetření</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="AdminNavItem" href="/admin-seznam-diagnoz/">Diagnózy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="AdminNavItem" href="/admin-seznam-indikaci/">Indikace</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="AdminNavItem" href="/admin-seznam-pribehu/">Příběhy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="AdminNavItem" href="/admin-prevencemasmysl/">#PrevenceMaSmysl</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="AdminNavItem" href="/admin-seznam-akci/">Akce</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="AdminNavItem" href="/admin-seznam-clanku/">Články</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="AdminNavLogout" href="/admin-login/">Odhlásit</NavLink>
            </NavItem>
          </Nav>
      </Navbar>);
  }
}
