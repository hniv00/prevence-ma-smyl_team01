import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import { Heading } from '../atoms/Heading';
import { NewIndicationButton } from '../atoms/NewIndicationButton';
import { AdminNav } from '../organisms/AdminNav';
import { AdminIndiTab } from '../organisms/AdminIndiTab';

export class AdminIndicationPage extends Component {
  render() {
    return (
      <div>
        <AdminNav />
        <Container>
          <Row>
            <Col>
              <Heading className="AdminWelcH2">Správa indikací</Heading>
            </Col>
          </Row>
          <Row>
            <Col md="9" />
            <Col md="3">
              <a href="/admin-indikace">
                <NewIndicationButton />
              </a>
            </Col>
          </Row>
          <Row>
            <AdminIndiTab />
          </Row>
        </Container>
      </div>
    );
  }
}
