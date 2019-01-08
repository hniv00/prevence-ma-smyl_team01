import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import { Heading } from '../atoms/Heading';
import { NewEventButton } from '../atoms/NewEventButton';
import { AdminNav } from '../organisms/AdminNav';
import { AdminEventTab } from '../organisms/AdminEventTab';

export class AdminEventPage extends Component {
  render() {
    return (
      <div>
        <AdminNav />
        <Container>
          <Row>
            <Col>
              <Heading className="AdminWelcH2">Správa akcí</Heading>
            </Col>
          </Row>
          <Row>
            <Col md="9" />
            <Col md="3">
              <a href="/admin-akce">
                <NewEventButton />
              </a>
            </Col>
          </Row>
          <Row>
            <AdminEventTab />
          </Row>
        </Container>
      </div>
    );
  }
}
