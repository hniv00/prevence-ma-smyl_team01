import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax } from 'react-parallax';

import { TopNav } from '../molecules/TopNav';
import { Footer } from '../organisms/Footer';
import { Events } from '../organisms/Events';
import logo from '../../img/logo_prevence.png';
import image from '../../img/pozadi_nadpis.png';

export class EventsPage extends Component {
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
                <h1 className="pageHeader">AKCE</h1>
                <h4 style={{ color: 'black' }}>
                  Akce, které se v budoucnu budou konat
                </h4>
              </Col>
              <Col xs="0" sm="0" md="2">
                <TopNav />
              </Col>
              <br style={{ marginBottom: '200px' }} />
            </Row>
          </header>
        </Parallax>

        <Parallax>
          <div className="parallax-content" id="events">
            <Events />
          </div>
        </Parallax>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
