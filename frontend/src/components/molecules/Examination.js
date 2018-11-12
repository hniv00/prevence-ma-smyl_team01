import React, {Component, Fragment} from 'react';
import { Card, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import {dumbStore} from '../../store/dumbStore'

import {ExaminationDetail} from '../atoms/ExaminationDetail';

const data = dumbStore.examinationResult;

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
                      </p>
                    </Col>
                    <Col>
                      <p style={{'text-align': 'right'}}><Badge id="cssBadgePeriodicity">{ item.periodicity }</Badge>{' '}
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
