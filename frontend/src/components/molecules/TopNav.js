import React, { Component } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import {Menu} from '../atoms/Menu';

import logo from '../../img/logo.jpg';

export class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"><img src={"logo"}/>logo TBD</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Menu></Menu>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
