import React, {Component} from 'react'
import { Row, Col, Container, Jumbotron} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {NewExamButton} from '../atoms/NewExamButton';
import {AdminMenu} from '../molecules/AdminMenu';
import {AdminExamsTab} from '../organisms/AdminExamsTab';
//import logo from '../../img/logo_prevence.png';

export class AdminExams extends Component {
  render() {
    return (
      <div>
        <AdminMenu/>
        <Container>
          <Row>
            <Col>
              <Heading className="AdminWelcH2">Správa vyšetření</Heading>
            </Col>
          </Row>
          <Row>
            <Col md="9"></Col>
            <Col md="3">
              <a href="/admin-vysetreni"><NewExamButton/></a>
            </Col>
          </Row>
          <Row>
            <AdminExamsTab/>
          </Row>
        </Container>
      </div>
    );
  }
}
