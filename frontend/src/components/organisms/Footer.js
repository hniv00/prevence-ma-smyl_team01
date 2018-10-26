import React, {Component} from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

import {FontIcon} from "../atoms/FontIcon";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
            <a href="/" className="footerMenu">Landing Page</a>
            <a href="/vysetreni" className="footerMenu">Preventivní vyšetření</a>
            <a href="/feed" className="footerMenu">#PrevenceMaSmysl</a>
            <a href="/pribehy" className="footerMenu">Příběhy</a>
            <a href="/akce" className="footerMenu">Akce</a>
            <a href="/kontakty" className="footerMenu">Kontakt</a>
            <a href="/admin" className="footerMenu">Admin modul</a>
            </Col>
            <Col>
              <a href="#" target="_blank" ><FontIcon variant={"b"} icon={'facebook'}/><i/></a>
              <a href="#" target="_blank" ><FontIcon variant={"b"} icon={'twitter'}/><i/></a>
              <a href="#" target="_blank" ><FontIcon variant={"b"} icon={'instagram'}/><i/></a>
              <a href="#" target="_blank" ><FontIcon variant={"b"} icon={'google'}/><i/></a>
            </Col>
            <Col>
              <a href="#" ><FontIcon icon={'angle-up'}/><i/></a>
            </Col>
          </Row>
          <Row>
            <Col>
              -
            </Col>
          </Row>
          <Row>
            <Col>
              © Tým 1 - Prevence má smysl {new Date().getFullYear()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
