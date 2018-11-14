import React, {Component, Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';

import {FontIcon} from "../atoms/FontIcon";

const data = [
  { href: '/', title: 'Landing Page'},
  { href: '/vysetreni', title: 'Preventivní vyšetření'},
  { href: '/feed', title: '#PrevenceMaSmysl'},
  { href: '/pribehy', title: 'Příběhy'},
  { href: '/akce', title: 'Akce'},
  { href: '/partneri', title: 'Partnerské projekty'},
  { href: '/kontakty', title: 'Kontakt'}
]

const socialPages = [
  { href: 'http://www.facebook.com/', icon: 'facebook'},
  { href: 'http://www.twitter.com/', icon: 'twitter'},
  { href: 'http://www.instagram.com/', icon: 'instagram'},
  { href: 'http://www.google.com/', icon: 'google'}
]

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col style={{'text-align': 'left'}}>
              {data.map ( item => (
                <Fragment key={item}><a id="cssFooterMenu" href={item.href} className="footerMenu">{item.title}</a><br/></Fragment>
              ))}
            </Col>
            <Col style={{'text-decoration': 'none'}}>
              {socialPages.map ( item => (
                <a key={item} href={item.href} target="_blank" style={{'text-decoration': 'none'}}><FontIcon variant={"b"} icon={item.icon}/><i/></a>
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
