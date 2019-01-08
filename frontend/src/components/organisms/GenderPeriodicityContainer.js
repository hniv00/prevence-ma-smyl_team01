import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import { BasicPeriodicity } from '../molecules/BasicPeriodicity';
import { AdvancedPeriodicity } from '../molecules/AdvancedPeriodicity';
import { AdminGenderButton } from '../atoms/AdminGenderButton';

export class GenderPeriodicityContainer extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="AdminExamContainer">
          <Row>
            <Col xs="0" sm="12" md="4">
              <AdminGenderButton
                value={this.props.genderValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col xs="0" sm="12" md="4">
              <BasicPeriodicity
                value={this.props.perbasicValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col xs="0" sm="12" md="4">
              <AdvancedPeriodicity
                value={this.props.perextValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
