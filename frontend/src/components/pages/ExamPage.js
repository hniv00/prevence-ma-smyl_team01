import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax } from 'react-parallax';

import { TopNav } from '../molecules/TopNav';
import { Filter } from '../organisms/Filter';
import { ExaminationList } from '../organisms/ExaminationList';
import { Footer } from '../organisms/Footer';

import logo from '../../img/logo_prevence.png';
import '../../parallax.css';
import image from '../../img/POZADI_PSD.png';

export class ExamPage extends Component {
  render() {
    return (
      <div>
        <Parallax strength={150} bgImage={image} bgWidth={'auto'}>
          <header style={{ margin: '2%' }}>
            <Row>
              <Col xs="0" sm="0" md="2">
                <a href="/">
                  <img src={logo} className="logoPic" alt="My logo" />
                </a>
              </Col>
              <Col xs="12" sm="12" md="8">
                <h1 className="pageHeader">PREVENTIVNÍ VYŠETŘENÍ</h1>
                <h4 style={{ color: 'black' }}>
                  Stačí pár kliknutí a hned víš, na jakou preventivní prohlídku
                  nezapomenout. Neměj strach jít k lékaři. Jde o Tvoje zdraví a
                  věz, že <span className="decor">prevence má smysl</span>!
                  Jednoduše zvol, jestli jsi muž nebo žena, zadej svůj věk,
                  případně další parametry a nech si vyfiltrovat doporučená
                  preventivní vyšetření. Na kolik si ceníš své zdraví? Aspoň na
                  pár kliků určitě.
                </h4>
              </Col>
              <Col xs="0" sm="0" md="2">
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
          <div id="examinationList">
            <ExaminationList />
          </div>
        </Parallax>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
