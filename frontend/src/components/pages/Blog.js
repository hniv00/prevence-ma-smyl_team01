import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Parallax } from 'react-parallax';

import { TopNav } from '../molecules/TopNav';
import { Footer } from '../organisms/Footer';
import { Article } from '../organisms/Article';

import logo from '../../img/logo_prevence.png';
import '../../parallax.css';
import image from '../../img/pozadi_nadpis.png';

export class Blog extends Component {
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
                <h1 className="pageHeader">BLOG</h1>
                <h4 style={{ color: 'black' }}>
                  Co by ti nemělo uniknout ze světa prevence a zdraví!
                </h4>
              </Col>
              <Col xs="0" sm="0" md="2">
                <TopNav />
              </Col>
            </Row>
          </header>
        </Parallax>

        <Container>
          <Article />
        </Container>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
