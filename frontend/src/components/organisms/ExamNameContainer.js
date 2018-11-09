import React from 'react';
import { Jumbotron, Button, Row, Col, UncontrolledTooltip } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';




export const ExamNameContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col xs="0" sm="12" md="4"><ExamName></ExamName></Col>
          <Col xs="0" sm="12" md="4"></Col>
          <Col xs="0" sm="12" md="4">
            <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">
              <i class="material-icons" style={{color:"#28A3B7"}}>
                help
              </i>
            </span>
            <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
              Hello world!
            </UncontrolledTooltip>
          </Col>
        </Row>
        <Row>
        <Col xs="0" sm="12" md="4"><ExamDescription></ExamDescription></Col>
        <Col xs="0" sm="12" md="4"></Col>
        <Col xs="0" sm="12" md="4"><ExamDiagnosis></ExamDiagnosis></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
