import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import { Heading } from '../atoms/Heading';
import { NewExamButton } from '../atoms/NewExamButton';
import { AdminNav } from '../organisms/AdminNav';
import { AdminExamsTab } from '../organisms/AdminExamsTab';

export class AdminExams extends Component {
  render() {
    return (
      <div>
        <AdminNav />
        <Container>
          <Row>
            <Col>
              <Heading className="AdminWelcH2">Správa vyšetření</Heading>
            </Col>
          </Row>
          <Row>
            <Col md="9" />
            <Col md="3">
              <a href="/admin-vysetreni">
                <NewExamButton />
              </a>
            </Col>
          </Row>
          <Row>
            <AdminExamsTab />
          </Row>
        </Container>
      </div>
    );
  }
}
