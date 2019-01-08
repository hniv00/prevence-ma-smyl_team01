import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import zapojse from '../../img/zapojse.jpg';

export class JoinUs extends Component {
  render() {
    return (
      <div id="joinUs">
        <div className="parallax-content">
          <Row>
            <Col xs="12" sm="7">
              <h4>Chceš se zapojit?</h4>
              <p id="cssContent" style={{ marginTop: '30px' }}>
                Zdraví nám není lhostejné a myšlenku včasné a pravidelné péče o
                vlastní tělo se snažíme sdílet s ostatními. Šířit tuto myšlenku
                můžeš i ty - a to třeba tak, že zveřejníš na Instagramu nebo na
                Twitteru příspěvek s hashtagem{' '}
                <span style={{ fontStyle: 'italic' }}>#prevenceMaSmysl</span>.
                Vybrané příspěvky navíc uveřejníme i na našem webu. <br />{' '}
                <br />
                Není ale nic lepšího než informovat své blízké, rodinu a
                kamarády, starat se o ně a podporovat je v zájmu o vlastní
                zdraví.
              </p>
            </Col>
            <Col xs="12" sm="5">
              <img
                src={zapojse}
                className="imgRound"
                alt="Lidé šířící poselství"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
