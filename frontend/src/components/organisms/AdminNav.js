import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';

const data = [
  { href: '/admin-seznam-vysetreni/', title: 'Vyšetření' },
  { href: '/admin-seznam-diagnoz/', title: 'Diagnózy' },
  { href: '/admin-seznam-indikaci/', title: 'Indikace' },
  { href: '/admin-seznam-pribehu/', title: 'Příběhy' },
  { href: '/admin-seznam-akci/', title: 'Akce' },
  { href: '/admin-seznam-clanku/', title: 'Články' },
  { href: '/admin-login/', title: 'Odhlásit' },
];

export class AdminNav extends Component {
  render() {
    return (
      <Navbar className="AdminNavBar" color="light" light expand="md">
        <Nav className="ml-auto" navbar>
          {data.map(item => (
            <NavItem>
              <NavLink
                key={item.href}
                className="AdminNavItem"
                href={item.href}
              >
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    );
  }
}
