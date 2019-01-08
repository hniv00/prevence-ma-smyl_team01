import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import programko from '../../img/programko.jpg';

export class WhoWeAre extends Component {
  render() {
    return (
      <div id="cssWhoWeAre">
        <div className="parallax-content">
          <Row>
            <Col xs="12" sm="7">
              <h4>Jak projekt vznikl</h4>
              <p id="cssContent" style={{ marginTop: '30px' }}>
                Celý projekt vznikl v rámci studijního kurzu na Vysoké škole
                ekonomické v Praze. Původním a hlavním obsahem kurzu bylo
                naprogramovat složitější webovou aplikaci, která má ovšem reálný
                význam a bude dále využitelná. Téma projektu o zdravotní
                prevenci náš tým studentů zaujalo natolik, že jsme mu věnovali
                obrovské množství svého volného času a vedle samotného
                programování jsme se začali zajímat i o problematiku prevence
                jako takovou, o související projekty, o to, jaké jsou možnosti
                informování se o preventivních prohlídkách v Česku a o samotné
                informovanosti občanů. Došli jsme k závěru, že zjistit, na jaké
                všechny vyšetření má člověk nárok není zase tak jednoduché, jak
                by se mohlo zdát. Tak proč to lidem neulehčit! Nakonec jsme se
                rozhodli, že projekt ani po absolvování kurzu nenecháme ležet
                ladem a pokusíme se jej dostat mezi lidi. Díky možnosti
                spolupráce s odborníky z praxe, jakými jsou především lékaři,
                ale i výživoví poradci nebo lidé z oblasti marketingu, jsme k
                tomu měli skvělou příležitost a využili jsme ji naplno.
              </p>
            </Col>
            <Col xs="12" sm="5">
              <img
                src={programko}
                className="imgRound"
                alt="Programování aplikace"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
