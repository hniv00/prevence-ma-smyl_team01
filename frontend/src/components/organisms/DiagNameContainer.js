import React from 'react';
import { Jumbotron, Button, Row, Col, UncontrolledTooltip } from 'reactstrap';

import {DiagName} from '../molecules/DiagName';
import {DiagDescription} from '../molecules/DiagDescription';
import {DiagRelatedExams} from '../molecules/DiagRelatedExams';

export const DiagNameContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col><DiagName></DiagName></Col>
        </Row>
        <Row>
        <Col md="6"><DiagDescription></DiagDescription></Col>
        <Col md="6"><DiagRelatedExams></DiagRelatedExams></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
