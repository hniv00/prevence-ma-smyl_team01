import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';

import {ExaminationModal} from '../atoms/ExaminationModal';

export const Examination = (props) => {
    return (
    <div>
      <Col sm="4">
        <Card body>
          <CardTitle>Preventivní prohlídka</CardTitle>
          <CardText>
          <p>
            <Badge color="secondary">Obezita</Badge>{' '}
            <Badge color="secondary">Krátkozrakost</Badge></p>
          Docházejte pravidelně na preventivní prohlídky,
          které praktický lékař provádí v intervalu 2 let.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
          <ExaminationModal></ExaminationModal>
        </Card>
      </Col>
    </div>
  );
};
