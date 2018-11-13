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
  badges: [ 'Obezita', 'Krátkozrakost' ],
  periodicity: '1 á 2 roky'
}, {
  id: 2,
  title: 'Zubní prohlídka',
  description: `Docházejte pravidelně na preventivní prohlídky k zubaři,
  ideálně jednou za půl roku.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  badges: [ 'Zubní kaz', 'Paradontoza' ],
  periodicity: '1 á 6 měsíců'
}, {
  id: 3,
  title: 'Oční prohlídka',
  description: `Docházejte pravidelně na preventivní oční prohlídky,
    které oční lékař provádí v intervalu jednoho roku.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  badges: [ 'Obezita', 'Krátkozrakost' ],
  periodicity: '1 á 1 rok'
}, {
  id: 4,
  title: 'Preventivní prohlídka 2',
  description: `Docházejte pravidelně na preventivní prohlídky,
    které praktický lékař provádí v intervalu 2 let.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  badges: [ 'Obezita', 'Krátkozrakost' ],
  periodicity: '1 á 2 roky'
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
                  <Row>
                    <Col style={{'text-align': 'left'}}>
                      <p>
                      {item.badges.map( badge => <Fragment key={badge}><Badge id="cssBadge" color="secondary">{badge}</Badge>{' '}</Fragment> )}
                      <i class="material-icons" style={{color: "#F26D98", 'margin-left': '6px'}}>more_horiz</i>
                      </p>
                    </Col>
                    <Col>
                      <p style={{'text-align': 'right'}}><Badge id="cssBadgePeriodicity">{ item.periodicity }</Badge>{' '}
                      <i class="material-icons" style={{color: "#39B2C3", 'margin-left': '6px'}}>more_horiz</i>
                      </p>
                    </Col>
                  </Row>
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
