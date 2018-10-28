import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Filter} from '../organisms/Filter';
import {ExaminationList} from '../organisms/ExaminationList';
import {Footer} from '../organisms/Footer';

export class ExamPage extends Component {
  render() {
    return (
      <div>

      <header>
        <Row>
          <Col>
            <TopNav/>
          </Col>
        </Row>
      </header>

      <Container>
          <section>
            <Row>
              <Col xs="0" sm="2"></Col>
              <Col xs="12" sm="8">
                <p>Stačí pár kliknutí a hned budete vědět, na jakou preventivní prohlídku nezapomenout.
                   Nemějte strach jít k lékaři. Jde o Vaše zdraví. Prevence má smysl!</p>
              </Col>
              <Col xs="0" sm="2"></Col>
            </Row>
            <Row>
              <Col xs="0" sm="2"></Col>
              <Col xs="12" sm="8">
                <Filter/>
              </Col>
              <Col xs="0" sm="2"></Col>
            </Row>
          </section>

        <section>
          <div style={{ height: '50px' }} />
            <ExaminationList></ExaminationList>
          <div style={{ height: '50px' }} />
        </section>

      </Container>

      <div class="footer">
            <Footer></Footer>
      </div>

    </div>
  );
  }
}
