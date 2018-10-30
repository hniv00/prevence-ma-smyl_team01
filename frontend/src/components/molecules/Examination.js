import React, {Component} from 'react';
import { Card, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';

import {ExaminationDetail} from '../atoms/ExaminationDetail';

export const Examination = (props) => {
    return (
      <div>
      <Row>
        <Col sm="4">
          <Card id="cssCardExamination" body>
            <CardTitle>Preventivní prohlídka</CardTitle>
            <CardText>
              <p>
              <Badge id="cssExamination" color="secondary">Obezita</Badge>{' '}
              <Badge id="cssExamination" color="secondary">Krátkozrakost</Badge></p>
            Docházejte pravidelně na preventivní prohlídky,
            které praktický lékař provádí v intervalu 2 let.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
            <ExaminationDetail/>
          </Card>
        </Col>
        <Col sm="4">
          <Card id="cssCardExamination" body>
            <CardTitle>Zubní prohlídka</CardTitle>
            <CardText>
            <p>
              <Badge id="cssExamination" color="secondary">Zubní kaz</Badge>{' '}
              <Badge id="cssExamination" color="secondary">Paradontoza</Badge></p>
            Docházejte pravidelně na preventivní prohlídky k zubaři,
            ideálně jednou za půl roku.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
            <ExaminationDetail/>
          </Card>
        </Col>
        <Col sm="4">
          <Card id="cssCardExamination" body>
            <CardTitle>Preventivní prohlídka</CardTitle>
            <CardText>
            <p>
              <Badge id="cssExamination" color="secondary">Obezita</Badge>{' '}
              <Badge id="cssExamination" color="secondary">Krátkozrakost</Badge></p>
            Docházejte pravidelně na preventivní prohlídky,
            které praktický lékař provádí v intervalu 2 let.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
            <ExaminationDetail/>
          </Card>
        </Col>
        </Row>
      </div>
  );
};
