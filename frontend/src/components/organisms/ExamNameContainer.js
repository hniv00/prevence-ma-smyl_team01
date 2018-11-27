import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipExamination} from '../atoms/TooltipExamination';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';


export const ExamNameContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row style={{textAlign: 'right'}}>
          <TooltipExamination/>
        </Row>
        <Row>
          <Col xs="0" sm="12" md="8"><ExamName></ExamName></Col>
        </Row>
        <Row>
        <Col xs="0" sm="12" md="8"><ExamDescription></ExamDescription></Col>
        <Col xs="0" sm="12" md="4"><ExamDiagnosis></ExamDiagnosis></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
