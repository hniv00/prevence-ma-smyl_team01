import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { AdminAdvancedFilterContainer } from '../organisms/AdminAdvancedFilterContainer';

export class AdminAdvanced extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <AdminAdvancedFilterContainer
              onChange={this.props.changeExaminationState}
              agefromextValue={this.props.agefromext}
              ageuntilextValue={this.props.ageuntilext}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
