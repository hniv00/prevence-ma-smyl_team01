import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

export const Filter = (props) => {
  return (
    <div>
      <Jumbotron>
        <Row>
          <Col><Button color="primary">Vyber pohlaví</Button>{' '}</Col>
        </Row>
        <Row>
          <Col><Button color="primary">Vyber věk</Button>{' '}</Col>
        </Row>
        <Row>
          <Col><Button color="primary">Vyber anamnézu</Button>{' '}</Col>
        </Row>
        <Row>
          <Col><Button color="primary">Vyhledej prevenci!</Button>{' '}</Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
