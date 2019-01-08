import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import { DiagName } from '../molecules/DiagName';
import { DiagDescription } from '../molecules/DiagDescription';
import { DiagRelatedExams } from '../molecules/DiagRelatedExams';

export class DiagNameContainer extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="AdminExamContainer">
          <Row>
            <Col>
              <DiagName
                value={this.props.nameValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <DiagDescription
                value={this.props.descriptionValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col md="6">
              <DiagRelatedExams
                options={this.props.options}
                value={this.props.selectedExams}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
