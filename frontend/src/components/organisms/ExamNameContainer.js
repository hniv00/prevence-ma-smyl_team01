import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import { ExamName } from '../molecules/ExamName';
import { TooltipExamination } from '../atoms/TooltipExamination';
import { ExamDescription } from '../molecules/ExamDescription';
import { ExamDiagnosis } from '../molecules/ExamDiagnosis';

export class ExamNameContainer extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="AdminExamContainer">
          <Row style={{ textAlign: 'right' }}>
            <TooltipExamination />
          </Row>
          <Row>
            <Col xs="0" sm="12" md="8">
              <ExamName
                value={this.props.nameValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="0" sm="12" md="8">
              <ExamDescription
                value={this.props.descriptionValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col xs="0" sm="12" md="4">
              <ExamDiagnosis
                options={this.props.options}
                value={this.props.selectedDiags}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
