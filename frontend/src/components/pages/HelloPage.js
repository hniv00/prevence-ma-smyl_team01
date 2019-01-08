import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Row, Col } from 'reactstrap';

import { TopNav } from '../molecules/TopNav';
import { Filter } from '../organisms/Filter';
import { About } from '../organisms/About';
import { StoriesCarousel } from '../organisms/StoriesCarousel';
import { EventsCarousel } from '../organisms/EventsCarousel';
import { Motivation } from '../organisms/Motivation';
import { PartnersCarousel } from '../organisms/PartnersCarousel';
import { Footer } from '../organisms/Footer';

import logo from '../../img/logo_prevence.png';
import '../../parallax.css';

import image from '../../img/POZADI_PSD.png';
import motivation from '../../img/lp_motivation.jpg';

export class HelloPage extends Component {
  render() {
    return (
      <div>
        <Parallax strength={150} bgImage={image} bgWidth={'auto'}>
          <header style={{ margin: '2%' }}>
            <Row>
              <Col xs="0" sm="0" md="3">
                <a href="/">
                  <img src={logo} className="logoPic" alt="My logo" />
                </a>
              </Col>
              <Col xs="12" sm="12" md="6">
                <h2 className="mainHeader">
                  Nebolí a nic to nestojí. Může ti zachránit život.{' '}
                  <span className="decor">Prevence má smysl.</span>
                </h2>
                <h3 style={{ color: 'black' }}>
                  Stačí pár kliknutí a hned víš, na jakou preventivní prohlídku
                  nezapomenout.
                </h3>
              </Col>
              <Col xs="0" sm="0" md="3">
                <TopNav />
              </Col>
            </Row>
            <Row>
              <Col xs="0" sm="2" />
              <Col xs="12" sm="8">
                <Filter />
              </Col>
              <Col xs="0" sm="2" />
            </Row>
          </header>
        </Parallax>

        <Parallax>
          <section>
            <StoriesCarousel />
          </section>
        </Parallax>

        <Parallax
          strength={400}
          bgImage={motivation}
          bgHeight={'1080px'}
          bgWidth={'1920px'}
        >
          <section>
            <div className="parallax-content" id="justCare">
              <Motivation />
            </div>
          </section>
        </Parallax>

        <Parallax>
          <section>
            <EventsCarousel />
          </section>
        </Parallax>

        <Parallax>
          <About />
        </Parallax>

        <Parallax>
          <div className="parallax-content">
            <PartnersCarousel />
          </div>
        </Parallax>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
