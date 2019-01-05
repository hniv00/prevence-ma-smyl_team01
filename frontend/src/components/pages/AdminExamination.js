import React, {Component} from 'react'
import {Row, Col, Button, Container} from 'reactstrap';

import {AdminNav} from '../organisms/AdminNav';
import {ExamNameContainer} from '../organisms/ExamNameContainer';
import {GenderPeriodicityContainer} from '../organisms/GenderPeriodicityContainer';
import {AdminBasicFilterContainer} from '../organisms/AdminBasicFilterContainer';
import {AdminAdvancedFilterContainer} from '../organisms/AdminAdvancedFilterContainer';


//import logo from '../../img/logo_prevence.png';

export class AdminExamination extends Component {
  render() {
    return (
      <div>
        <div>
          <AdminNav/>
        </div>
        <div>
        <Container>
          <Row>
            <Col><h2 className="AdminWelcH2">Správa vyšetření</h2></Col>
          </Row>
          <ExamNameContainer />
          <GenderPeriodicityContainer />
          <Row>
            <Col xs="4">
              <AdminBasicFilterContainer />
            </Col>
            <Col xs="8">
              <AdminAdvancedFilterContainer />
            </Col>
          </Row>
          <Row>
            <Col style={{marginBottom: '30px', marginRight: '20px', textAlign: 'right'}}>
                <a href="/admin-seznam-vysetreni">
                <Button color="info" size="md" style={{margin: "10px"}}>Zrušit</Button>
                </a>{' '}
                <Button color="info" size="md" style={{margin: "10px"}}>Uložit</Button>
            </Col>
          </Row>
          </Container>
        </div>
    </div>
    );
  }
}
