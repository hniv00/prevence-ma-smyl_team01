import React, {Component} from 'react'
import { Row, Col, Container, Jumbotron} from 'reactstrap';

import {Heading} from '../atoms/Heading';
import {NewDiagButton} from '../atoms/NewDiagButton';
import {AdminNav} from '../organisms/AdminNav';
import {AdminDiagTab} from '../organisms/AdminDiagTab';

export class AdminDiagnosisPage extends Component {
  render() {
    return (
      <div>
        <AdminNav/>
        <Container>
          <Row>
            <Col>
              <Heading className="AdminWelcH2">Správa diagnóz</Heading>
            </Col>
          </Row>
          <Row>
            <Col md="9"></Col>
            <Col md="3">
              <a href="/admin-diagnozy"><NewDiagButton/></a>
            </Col>
          </Row>
          <Row>
            <AdminDiagTab/>
          </Row>
        </Container>
      </div>
    );
  }
}
