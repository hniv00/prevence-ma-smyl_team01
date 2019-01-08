import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import { Heading } from '../atoms/Heading';
import { NewArticleButton } from '../atoms/NewArticleButton';
import { AdminNav } from '../organisms/AdminNav';
import { AdminArticleTab } from '../organisms/AdminArticleTab';

export class AdminBlogPage extends Component {
  render() {
    return (
      <div>
        <AdminNav />
        <Container>
          <Row>
            <Col>
              <Heading className="AdminWelcH2">Správa článků na blogu</Heading>
            </Col>
          </Row>
          <Row>
            <Col md="9" />
            <Col md="3">
              <a href="/admin-clanky">
                <NewArticleButton />
              </a>
            </Col>
          </Row>
          <Row>
            <AdminArticleTab />
          </Row>
        </Container>
      </div>
    );
  }
}
