import React, {Component} from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import {Parallax} from 'react-parallax';

import {TopNav} from '../molecules/TopNav';
import {MultiPartners} from '../atoms/MultiPartners';
import {Footer} from '../organisms/Footer';
import {Partners} from "../organisms/Partners"
import {PartnerCard} from "../molecules/PartnerCard"
import logo from '../../img/logo_version2.png';
import '../../parallax.css';
import image from '../../img/pozadi_nadpis.png';


export class PartnersPage extends Component {
  render() {
    return (
      <div>

      <Parallax strength={150} bgImage={image} bgWidth={'auto'} bgHeigth={'auto'}>
        <header style={{margin: '2%'}}>
          <Row>
            <Col xs="0" sm="0" md="2">
              <img src={logo} className="logoPic" alt="My logo" />
            </Col>
            <Col xs="12" sm="12" md="8">
              <h1 className="pageHeader">PARTNERSKÉ PROJEKTY</h1>
              <h4 style={{color: 'black'}}>Společně věříme, že prevence má smysl.</h4>
            </Col>
            <Col xs="0" sm="0" md="2">
              <TopNav/>
            </Col>
          </Row>
          <Container style={{backgroundColor: "rgba(2, 104, 119, 0.28)", borderRadius: '20px', maxWidth: '900px', paddingTop: '10px', marginTop: '20px'}}>
            <Row style={{marginTop: '50px'}}>
              <Col md="2"></Col>
              <Col xs="6" md="4">
                <p>Najdi si, který projekt tě zajímá...</p>
              </Col>
              <Col xs="6">
                <MultiPartners/>
                <br style={{'margin-bottom': '100px'}}/>
              </Col>
            </Row>
          </Container>
          </header>
      </Parallax>

      <Parallax>
        <div className='parallax-content' id="stories">
          <Partners/>
        </div>
      </Parallax>

      <div className="footer">
            <Footer></Footer>
      </div>

    </div>
  );
  }
}
