import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import {BasicPeriodicity} from '../molecules/BasicPeriodicity';
import {AdvancedPeriodicity} from '../molecules/AdvancedPeriodicity';
import {AdminGenderButton} from '../atoms/AdminGenderButton';

export const GenderPeriodicityContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col xs="0" sm="12" md="4"><AdminGenderButton></AdminGenderButton></Col>
          <Col xs="0" sm="12" md="4"><BasicPeriodicity></BasicPeriodicity></Col>
          <Col xs="0" sm="12" md="4"><AdvancedPeriodicity></AdvancedPeriodicity></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
