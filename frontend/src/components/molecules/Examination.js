import React, {Component, Fragment} from 'react';
import { Card, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';

import {ExaminationDetail} from '../atoms/ExaminationDetail';


const data = [{
  id: 1,
  title: 'Preventivní prohlídka',
  description: `Docházejte pravidelně na preventivní prohlídky,
    které praktický lékař provádí v intervalu 2 let.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  badges: [ 'Obezita', 'Krátkozrakost' ]
}, {
  id: 2,
  title: 'Zubní prohlídka',
  description: `Docházejte pravidelně na preventivní prohlídky k zubaři,
  ideálně jednou za půl roku.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  badges: [ 'Zubní kaz', 'Paradontoza' ]
}, {
  id: 3,
  title: 'Preventivní prohlídka 1',
  description: `Docházejte pravidelně na preventivní prohlídky,
    které praktický lékař provádí v intervalu 2 let.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  badges: [ 'Obezita', 'Krátkozrakost' ]
}, {
  id: 4,
  title: 'Preventivní prohlídka 2',
  description: `Docházejte pravidelně na preventivní prohlídky,
    které praktický lékař provádí v intervalu 2 let.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  badges: [ 'Obezita', 'Krátkozrakost' ]
}
]

export const Examination = (props) => {
  console.log(props);
    return (
      <div>
        <Row>
          {data.map( item => (
            <Col key={item.id} sm="12" md="6">
              <Card id="cssCardExamination" body>
                <CardTitle>{ item.title }</CardTitle>
                <CardText>
                  <p>
                  {item.badges.map( badge => <Fragment key={badge}><Badge id="cssBadge" color="secondary">{badge}</Badge>{' '}</Fragment> )}
                  </p>
                  { item.description }
                </CardText>
                <ExaminationDetail/>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
  );
};
