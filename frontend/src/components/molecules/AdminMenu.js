import React, {Component} from 'react'
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import {LogoutButton} from '../atoms/LogoutButton';
//import logo from '../../img/logo_prevence.png';

export class AdminMenu extends Component {
  render() {
    return (
      <div>
        <Navbar className="AdminNavBar" color="light" light expand="md">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="AdminNavItem" href="/admin-vysetreni/">Prevence</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="AdminNavItem" href="/admin-pribehy/">Příběhy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="AdminNavItem" href="/admin-prevencemasmysl/">#PrevenceMaSmysl</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="AdminNavLogout" href="/admin-login/">Odhlásit</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
