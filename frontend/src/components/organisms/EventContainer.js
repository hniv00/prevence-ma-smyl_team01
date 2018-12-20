import React, { Component } from "react";
import { Jumbotron, Row, Col } from 'reactstrap';

import {EventName} from '../molecules/EventName';
import {EventDescription} from '../molecules/EventDescription';
import {EventPrice} from '../molecules/EventPrice';
import {EventPhoto} from '../molecules/EventPhoto';
import {EventPlace} from '../molecules/EventPlace';
import {EventUrl} from '../molecules/EventUrl';
import {EventDateTime} from '../molecules/EventDateTime';

export class EventContainer extends Component{
  render () {
    return (
      <div>
        <Jumbotron id="AdminExamContainer">
          <Row>
            <Col>
              <EventName/>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <EventDescription/>
            </Col>
            <Col md="6">
              <EventUrl/>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <EventPlace/>
            </Col>
            <Col md="6">
              <EventDateTime/>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <EventPhoto/>
            </Col>
            <Col md="6">
              <EventPrice/>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
