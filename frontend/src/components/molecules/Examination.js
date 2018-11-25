import React, {Component, Fragment} from 'react';
import { Card, CardTitle, CardText, Row, Col, Badge, Modal, Button, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import {dumbStore} from '../../store/dumbStore'

import {ExaminationDetail} from '../atoms/ExaminationDetail';
import {BadgesDetail} from '../atoms/BadgesDetail';

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
                      <CardText>
                        <Row>
                          {item.badges.map((badge, i) => (<BadgesDetail style={{'margin-right': '5px', 'cursor' : 'pointer'}} key={i} examination={item.title} badge={badge}/>))}
                          <i class="material-icons" style={{ color: "#F26D98", 'margin-left': '6px' }}>more_horiz</i>
                        </Row>
                      </CardText>
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
