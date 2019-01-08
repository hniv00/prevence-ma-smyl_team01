import React, { Component } from 'react';

import { Menu } from '../atoms/Menu';
import { MenuButton } from '../atoms/MenuButton';

export class TopNav extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown} menuVisibility={visible} />
      </div>
    );
  }
}
