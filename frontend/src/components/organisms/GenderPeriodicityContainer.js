import React from 'react';
import { Jumbotron, Button, Row, Col, Label } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {AdminGenderButton} from '../atoms/AdminGenderButton';
import {BasicPeriodicity} from '../molecules/BasicPeriodicity';
import {AdvancedPeriodicity} from '../molecules/AdvancedPeriodicity';



export const GenderPeriodicityContainer = (props) => {
  return (
    <div>
      <Jumbotron>
        <Row>
          <Col xs="0" sm="12" md="4"><AdminGenderButton></AdminGenderButton></Col>
          <Col xs="0" sm="12" md="4"><BasicPeriodicity></BasicPeriodicity></Col>
          <Col xs="0" sm="12" md="4"><AdvancedPeriodicity></AdvancedPeriodicity></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
