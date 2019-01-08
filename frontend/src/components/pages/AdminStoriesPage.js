import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import { Heading } from '../atoms/Heading';
import { NewStoryButton } from '../atoms/NewStoryButton';
import { AdminNav } from '../organisms/AdminNav';
import { AdminStoryTab } from '../organisms/AdminStoryTab';

export class AdminStoriesPage extends Component {
  render() {
    return (
      <div>
        <AdminNav />
        <Container>
          <Row>
            <Col>
              <Heading className="AdminWelcH2">Správa příběhů</Heading>
            </Col>
          </Row>
          <Row>
            <Col md="9" />
            <Col md="3">
              <a href="/admin-pribehy">
                <NewStoryButton />
              </a>
            </Col>
          </Row>
          <Row>
            <AdminStoryTab />
          </Row>
        </Container>
      </div>
    );
  }
}
