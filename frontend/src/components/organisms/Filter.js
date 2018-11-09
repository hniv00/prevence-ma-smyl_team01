import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

import {GenderSelection} from '../molecules/GenderSelection';
import {AgeSelection} from '../molecules/AgeSelection';
import {AnamnesisSelection} from '../molecules/AnamnesisSelection';
import {DiseaseSelection} from '../molecules/DiseaseSelection';
import {FindPrevention} from '../molecules/FindPrevention';
import {MultiSelect} from '../atoms/MultiSelect';
import {ShowAdvancedSearch} from '../molecules/ShowAdvancedSearch';



export const Filter = (props) => {
  return (
    <div id="filtration">
      <Jumbotron>
        <Row>
          <Col xs="0" sm="12" md="3"><GenderSelection></GenderSelection></Col>
          <Col xs="0" sm="12" md="3"><AgeSelection></AgeSelection></Col>
          <Col xs="0" sm="12" md="3"><AnamnesisSelection></AnamnesisSelection></Col>
          <Col xs="0" sm="12" md="3"><DiseaseSelection></DiseaseSelection></Col>
        </Row>
        <Row>
          <ShowAdvancedSearch></ShowAdvancedSearch>
        </Row>
        <Row>
          <Col><FindPrevention></FindPrevention></Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
