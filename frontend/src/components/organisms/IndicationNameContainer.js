import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import { IndicationName } from '../molecules/IndicationName';
import { IndicationType } from '../molecules/IndicationType';

export class IndicationNameContainer extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="AdminExamContainer">
          <Row>
            <Col md="6">
              <IndicationName
                value={this.props.nameValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col md="6">
              <IndicationType
                value={this.props.typeValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
