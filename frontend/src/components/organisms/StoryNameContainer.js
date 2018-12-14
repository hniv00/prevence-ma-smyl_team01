import React from 'react';
import { Jumbotron, Button, Row, Col, UncontrolledTooltip } from 'reactstrap';

import {PatientName} from '../molecules/PatientName';
import {StoryDescription} from '../molecules/StoryDescription';
import {StoryRelatedDiag} from '../molecules/StoryRelatedDiag';
import {PatientAgeContainer} from '../molecules/PatientAgeContainer';

export const StoryNameContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col><PatientName></PatientName></Col>
          <Col><PatientAgeContainer></PatientAgeContainer></Col>
        </Row>
        <Row>
        <Col md="6"><StoryDescription></StoryDescription></Col>
        <Col md="6"><StoryRelatedDiag></StoryRelatedDiag></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
