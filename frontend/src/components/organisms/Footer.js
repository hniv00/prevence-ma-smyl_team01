import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import {FontIcon} from "../atoms/FontIcon";

const data = [
  { href: '/', title: 'Landing Page'},
  { href: '/vysetreni', title: 'Preventivní vyšetření'},
  { href: '/feed', title: '#PrevenceMaSmysl'},
  { href: '/pribehy', title: 'Příběhy'},
  { href: '/akce', title: 'Akce'},
  { href: '/kontakty', title: 'Kontakt'},
  { href: '/admin-login', title: 'Admin modul'}
]

const socialPages = [
  { href: 'http://www.facebook.com/', icon: 'facebook'},
  { href: 'http://www.twitter.com/', icon: 'twitter'},
  { href: 'http://www.instagram.com/', icon: 'instagram'},
  { href: 'http://www.google.com/', icon: 'google'},
  { href: 'http://www.yahoo.com/', icon: 'yahoo'},
  { href: 'http://www.github.com/', icon: 'github'},
  { href: 'http://www.amazon.com/', icon: 'amazon'}
]

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {data.map ( item => (
                <><a id="cssFooterMenu" href={item.href} className="footerMenu">{item.title}</a><br/></>
              ))}
            </Col>
            <Col>
              {socialPages.map ( item => (
                <a href={item.href} target="_blank"><FontIcon variant={"b"} icon={item.icon}/><i/></a>
              ))}
            </Col>
            <Col>
              <a id="cssFooterArrow" href="#" ><i class="material-icons" style={{position: 'absolute' , right: '10px'}}>expand_less</i></a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a id="cssCopyright" >© tým 1 #PrevenceMáSmysl {new Date().getFullYear()}</a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
