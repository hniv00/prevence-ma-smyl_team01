import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

import {GenderSelection} from '../molecules/GenderSelection';
import {AgeSelection} from '../molecules/AgeSelection';
import {AnamnesisSelection} from '../molecules/AnamnesisSelection';
import {FindPrevention} from '../molecules/FindPrevention';

export const Filter = (props) => {
  return (
    <div>
      <Jumbotron>
        <Row>
          <Col><GenderSelection></GenderSelection></Col>
        </Row>
        <Row>
          <Col><AgeSelection></AgeSelection></Col>
        </Row>
        <Row>
          <Col><AnamnesisSelection></AnamnesisSelection></Col>
        </Row>
        <Row>
          <Col><FindPrevention></FindPrevention></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
