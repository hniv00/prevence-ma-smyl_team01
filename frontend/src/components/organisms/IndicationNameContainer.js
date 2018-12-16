import React from 'react';
import { Jumbotron, Button, Row, Col, UncontrolledTooltip } from 'reactstrap';

import {IndicationName} from '../molecules/IndicationName';
import {IndicationDescription} from '../molecules/IndicationDescription';
import {IndicationType} from '../molecules/IndicationType';

export const IndicationNameContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col><IndicationName></IndicationName></Col>
        </Row>
        <Row>
        <Col md="6"><IndicationDescription></IndicationDescription></Col>
          <Col md="6"><IndicationType
//          value={this.props.parentState.diagRelatedExams}
//          callback = {this.props.callback}
        /></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
