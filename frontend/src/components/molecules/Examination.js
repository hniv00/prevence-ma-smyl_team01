import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';

import {ExaminationDetail} from '../atoms/ExaminationDetail';

export const Examination = (props) => {
  console.log(props);
    return (
        <Col sm="4">
          <Card id="cssCardExamination" body>
            <CardTitle>{props.data.Name}</CardTitle>
            <CardText>
              <p>
              <Badge id="cssExamination" color="secondary">Obezita</Badge>{' '}
              <Badge id="cssExamination" color="secondary">Krátkozrakost</Badge></p>
              {props.data.Description}
              </CardText>
            <ExaminationDetail/>
          </Card>
        </Col>
  );
};
