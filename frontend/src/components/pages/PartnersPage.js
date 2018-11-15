import React, {Component} from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import {Parallax} from 'react-parallax';

import {TopNav} from '../molecules/TopNav';
import {Footer} from '../organisms/Footer';
import {Partners} from "../organisms/Partners"
import {PartnerCard} from "../molecules/PartnerCard"
import logo from '../../img/logo_prevence.png';
import '../../parallax.css';
import image from '../../img/pozadi_nadpis.png';


export class PartnersPage extends Component {
  render() {
    return (
      <div>

      <Parallax strength={150} bgImage={image} bgWidth={'auto'}>
        <header style={{margin: '2%'}}>
          <Row>
            <Col xs="0" sm="0" md="2">
              <img src={logo} class="logoPic" alt="My logo" />
            </Col>
            <Col xs="12" sm="12" md="8">
              <h1 className="pageHeader">PARTNERSKÉ PROJEKTY</h1>
              <h4 style={{color: 'black'}}>Společně věříme, že prevence má smysl.</h4>
            </Col>
            <Col xs="0" sm="0" md="2">
              <TopNav/>
            </Col>
          </Row>
          </header>
      </Parallax>

      <Parallax>
        <div className='parallax-content' id="stories">
          <Partners/>
        </div>
      </Parallax>

      <div class="footer">
            <Footer></Footer>
      </div>

    </div>
  );
  }
}
