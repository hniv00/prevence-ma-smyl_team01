import React from 'react';
import { Jumbotron, Button, Row, Col, Label } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {YesNoButton} from '../atoms/YesNoButton';
import {BasicPeriodicity} from '../molecules/BasicPeriodicity';
import {AdvancedPeriodicity} from '../molecules/AdvancedPeriodicity';
import {BasicFilterContainer} from '../molecules/BasicFilterContainer';
import {DiagRelatedExams} from '../molecules/DiagRelatedExams';



export const DiagInfoContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col xs="0" sm="12" md="4"><YesNoButton></YesNoButton></Col>
          <Col xs="0" sm="12" md="4"><BasicFilterContainer></BasicFilterContainer></Col>
          <Col xs="0" sm="12" md="4"><DiagRelatedExams></DiagRelatedExams></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
