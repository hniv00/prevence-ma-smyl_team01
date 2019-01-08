import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { FontIcon } from '../atoms/FontIcon';

const data = [
  { href: '/vysetreni', title: 'Preventivní vyšetření' },
  { href: '/pribehy', title: '#PrevenceMaSmysl' },
  { href: '/akce', title: 'Akce' },
  { href: '/partneri', title: 'Partnerské projekty' },
  { href: '/kontakty', title: 'Kontakt' },
  { href: '/projekt', title: 'O projektu' },
  { href: '/blog', title: 'Blog' },
];

const socialPages = [
  { href: 'http://www.facebook.com/', icon: 'facebook' },
  { href: 'http://www.twitter.com/', icon: 'twitter' },
  { href: 'http://www.instagram.com/', icon: 'instagram' },
  { href: 'http://www.google.com/', icon: 'google' },
];

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col style={{ textAlign: 'left' }}>
              {data.map(item => (
                <Fragment key={item.href}>
                  <a id="cssFooterMenu" href={item.href} className="footerMenu">
                    {item.title}
                  </a>
                  <br />
                </Fragment>
              ))}
            </Col>
            <Col style={{ textDecoration: 'none' }}>
              {socialPages.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <FontIcon variant={'b'} icon={item.icon} />
                  <i />
                </a>
              ))}
            </Col>
            <Col>
              <a id="cssFooterArrow" href="/#">
                <i
                  className="material-icons"
                  style={{ position: 'absolute', right: '10px' }}
                >
                  expand_less
                </i>
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a id="cssCopyright" href="/">
                © tým 1 #PrevenceMáSmysl {new Date().getFullYear()}
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
