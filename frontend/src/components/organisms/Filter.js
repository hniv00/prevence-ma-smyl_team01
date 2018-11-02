import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

import {GenderSelection} from '../molecules/GenderSelection';
import {AgeSelection} from '../molecules/AgeSelection';
import {AnamnesisSelection} from '../molecules/AnamnesisSelection';
import {FindPrevention} from '../molecules/FindPrevention';
import {MultiSelect} from '../atoms/MultiSelect';



export const Filter = (props) => {
  return (
    <div>
      <Jumbotron>
        <Row>
          <Col xs="0" sm="12" md="4"><GenderSelection></GenderSelection></Col>
          <Col xs="0" sm="12" md="4"><AgeSelection></AgeSelection></Col>
          <Col xs="0" sm="12" md="4"><AnamnesisSelection></AnamnesisSelection></Col>
        </Row>
        <Row>
          <Col><FindPrevention></FindPrevention></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
