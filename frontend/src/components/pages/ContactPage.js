import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax } from 'react-parallax';

import { TopNav } from '../molecules/TopNav';
import { Footer } from '../organisms/Footer';
import { ContactForm } from '../organisms/ContactForm';
import { Contact } from '../molecules/Contact';
import logo from '../../img/logo_prevence.png';
import image from '../../img/pozadi_nadpis.png';
import '../../parallax.css';

export class ContactPage extends Component {
  render() {
    return (
      <div>
        <Parallax
          strength={150}
          bgImage={image}
          bgWidth={'auto'}
          bgHeigth={'auto'}
        >
          <header style={{ margin: '2%' }}>
            <Row>
              <Col xs="0" sm="0" md="2">
                <a href="/">
                  <img src={logo} className="logoPic" alt="My logo" />
                </a>
              </Col>
              <Col xs="12" sm="12" md="8">
                <h1 className="pageHeader">KONTAKTUJTE NÁS</h1>
                <h4 style={{ color: 'black' }}>
                  Máte dotaz, se kterým si nevíte rady? Něco vás trápí? Chcete
                  nás podpořit, nebo se stát našimi partnery? Napište nám!
                </h4>
              </Col>
              <Col xs="0" sm="0" md="2">
                <TopNav />
              </Col>
            </Row>
          </header>
        </Parallax>

        <Parallax>
          <div className="parallax-content" id="contactForm">
            <Row>
              <Col sm="6">
                <Contact />
              </Col>
              <Col sm="6">
                <ContactForm />
              </Col>
            </Row>
          </div>
        </Parallax>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
