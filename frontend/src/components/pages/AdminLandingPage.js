import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Jumbotron} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {Footer} from '../organisms/Footer';
import {LogoutButton} from '../atoms/LogoutButton';
import {MultiSelect} from '../atoms/MultiSelect';
import {TooltipItem} from '../atoms/TooltipItem';

//import logo from '../../img/logo_prevence.png';

export class AdminLandingPage extends Component {
  render() {
    return (
      <div>
      <div>
        <Navbar className="AdminNavBar" color="light" light expand="md">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="AdminNavItem" href="/admin-prevence/">Prevence</NavLink>
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
        <h2 className="AdminWelcH2">Vítejte v admin modulu</h2>
        <br/>
        <h3 className="AdminWelcH2">Můžete začít spravovat vyšetření nebo příběhy. Vyberte akci z menu.</h3>
        <div>
          <TooltipItem></TooltipItem>
        </div>
      </div>
    );
  }
}
