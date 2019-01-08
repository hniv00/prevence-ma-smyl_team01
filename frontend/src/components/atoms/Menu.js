import React, { Component } from 'react';
import '../../App.css';
import { MenuButtonClose } from './MenuButtonClose';

const data = [
  { href: '/vysetreni', title: 'Preventivní vyšetření' },
  { href: '/pribehy', title: '#PrevenceMaSmysl' },
  { href: '/akce', title: 'Akce' },
  { href: '/partneri', title: 'Partnerské projekty' },
  { href: '/kontakty', title: 'Kontakt' },
  { href: '/projekt', title: 'O projektu' },
  { href: '/blog', title: 'Blog' },
];

export class Menu extends Component {
  render() {
    const { handleMouseDown } = this.props;
    var visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return (
      <div id="flyoutMenu" className={visibility}>
        <a
          href="/#"
          className="menu-close-button"
          data-rel="menu-close-button"
          onMouseDown={handleMouseDown}
        >
          <MenuButtonClose
            className="menu-close-button"
            handleMouseDown={this.handleMouseDown}
          />{' '}
        </a>
        {data.map(item => (
          <a key={item.href} id="cssHamburgerMenu" href={item.href}>
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    );
  }
}
