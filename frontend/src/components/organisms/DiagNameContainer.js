import React from 'react';
import { Jumbotron, Button, Row, Col, UncontrolledTooltip } from 'reactstrap';

import {DiagName} from '../molecules/DiagName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {DiagDescription} from '../molecules/DiagDescription';



export const DiagNameContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col><DiagName></DiagName></Col>
        </Row>
        <Row>
        <Col><DiagDescription></DiagDescription></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
