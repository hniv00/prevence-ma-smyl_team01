import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import { PatientName } from '../molecules/PatientName';
import { StoryDescription } from '../molecules/StoryDescription';
import { StoryRelatedDiag } from '../molecules/StoryRelatedDiag';
import { PatientAgeContainer } from '../molecules/PatientAgeContainer';

export class StoryNameContainer extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="AdminExamContainer">
          <Row>
            <Col>
              <PatientName
                value={this.props.nameValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col>
              <PatientAgeContainer
                value={this.props.ageValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <StoryDescription
                value={this.props.descriptionValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col md="6">
              <StoryRelatedDiag />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
