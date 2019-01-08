import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import { GenderSelection } from '../molecules/GenderSelection';
import { AgeSelection } from '../molecules/AgeSelection';
import { AnamnesisSelection } from '../molecules/AnamnesisSelection';
import { DiseaseSelection } from '../molecules/DiseaseSelection';
import { FindPrevention } from '../molecules/FindPrevention';
import { ShowAdvancedSearch } from '../molecules/ShowAdvancedSearch';

export const Filter = props => {
  return (
    <div id="filtration">
      <Jumbotron>
        <Row>
          <Col xs="0" sm="12" md="3">
            <GenderSelection />
          </Col>
          <Col xs="0" sm="12" md="3">
            <AgeSelection />
          </Col>
          <Col xs="0" sm="12" md="3">
            <AnamnesisSelection />
          </Col>
          <Col xs="0" sm="12" md="3">
            <DiseaseSelection />
          </Col>
        </Row>
        <Row>
          <ShowAdvancedSearch />
        </Row>
        <Row>
          <Col>
            <FindPrevention />
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
