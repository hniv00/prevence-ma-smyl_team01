import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

import {Menu} from '../atoms/Menu';
import {MenuButton} from '../atoms/MenuButton';


/*
When you click on a button, the menu slides into view
When you click anywhere on the menu, the menu slides out of view
*/

export class TopNav extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown}
              menuVisibility={visible}/>
      </div>
    );
  }
}
