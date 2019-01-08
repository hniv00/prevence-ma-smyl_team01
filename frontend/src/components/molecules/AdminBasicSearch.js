import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { BasicFilterContainer } from '../molecules/BasicFilterContainer';

export class AdminBasicSearch extends Component {
  render() {
    return (
      <Row>
        <Col>
          <BasicFilterContainer />
        </Col>
      </Row>
    );
  }
}
