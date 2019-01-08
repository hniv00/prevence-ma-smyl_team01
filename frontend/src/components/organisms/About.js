import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import tym from '../../img/tym.jpg';

export class About extends Component {
  render() {
    return (
      <div id="cssAboutProject">
        <div className="parallax-content">
          <Row>
            <Col xs="12" sm="5">
              <img src={tym} className="imgRound" alt="Náš tým" />
            </Col>
            <Col xs="12" sm="7">
              <h4>Čemu se věnujeme</h4>
              <p id="cssAboutText" style={{ marginTop: '30px' }}>
                V rámci projektu PREVENCE MÁ SMYSL šíříme, že prevence je
                důležitá. Naše aplikace slouží komukoliv zejména k tomu, aby si
                mohl přesně namíru vyhledat preventivní vyšetření, která jsou
                pro něj vhodná a jež by neměl zanedbávat. Vedle toho pořádáme
                spolu s našimi partnery různé vzdělávací a informační workshopy
                a přednášky. Píšeme články o zajímavostech ze světa zdraví a
                péče o sebe. Nesnažíme se nikoho vystrašit, ale naopak povzbudit
                a inspirovat, k čemuž nám slouží i příběhy lidí, kteří si prošli
                svým vlastním těžkým zdravotním obdobím.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
