import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

import {GenderSelection} from '../molecules/GenderSelection';
import {AgeSelection} from '../molecules/AgeSelection';
import {AnamnesisSelection} from '../molecules/AnamnesisSelection';

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
          <Col><Button color="primary">Vyhledej prevenci!</Button>{' '}</Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
