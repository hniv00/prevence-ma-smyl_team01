import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax } from 'react-parallax';

import { TopNav } from '../molecules/TopNav';
import { Footer } from '../organisms/Footer';
import { About } from '../organisms/About';
import { WhoWeAre } from '../organisms/WhoWeAre';
import { JoinUs } from '../organisms/JoinUs';

import logo from '../../img/logo_prevence.png';
import '../../parallax.css';
import image from '../../img/prevence_tym2.jpg';

export class AboutProject extends Component {
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
                <h1
                  style={{
                    color: 'white',
                    fontSize: '68px',
                    marginBottom: '40px',
                    marginTop: '120px',
                  }}
                >
                  Jsme #PrevenceMáSmysl
                </h1>
                <h4 style={{ color: 'white', marginBottom: '120px' }}>
                  Tým lékařů, studentů, nadšenců do zdravého životního stylu i
                  obyčejných lidí, které zajímá lidské zdraví. <br />
                  Naším cílem je ukázat, že na prevenci záleží.
                </h4>
              </Col>
              <Col xs="0" sm="0" md="2">
                <TopNav />
              </Col>
            </Row>
          </header>
        </Parallax>

        <Parallax>
          <WhoWeAre />
        </Parallax>

        <Parallax>
          <About />
        </Parallax>

        <Parallax>
          <JoinUs />
        </Parallax>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
