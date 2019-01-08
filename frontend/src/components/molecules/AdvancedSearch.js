import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { LifestyleSelection } from '../molecules/LifestyleSelection';
import { BMISelection } from '../molecules/BMISelection';

export class AdvancedSearch extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="0" sm="12" md="3">
            <LifestyleSelection />
          </Col>
          <Col xs="0" sm="12" md="9">
            <BMISelection />
          </Col>
        </Row>
      </div>
    );
  }
}
