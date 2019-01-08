import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import { EventName } from '../molecules/EventName';
import { EventDescription } from '../molecules/EventDescription';
import { EventPrice } from '../molecules/EventPrice';
import { EventPhoto } from '../molecules/EventPhoto';
import { EventPlace } from '../molecules/EventPlace';
import { EventUrl } from '../molecules/EventUrl';
import { EventDateTime } from '../molecules/EventDateTime';

export class EventContainer extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="AdminExamContainer">
          <Row>
            <Col>
              <EventName
                value={this.props.nameValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <EventDescription
                value={this.props.descriptionValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col md="6">
              <EventUrl
                value={this.props.urlValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <EventPlace
                streetValue={this.props.streetValue}
                numValue={this.props.numValue}
                cityValue={this.props.cityValue}
                zipValue={this.props.zipValue}
                onChange={this.props.onChange}
              />
            </Col>
            <Col md="6">
              <EventDateTime
                dateValue={this.props.dateValue}
                timeValue={this.props.timeValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <EventPhoto />
            </Col>
            <Col md="6">
              <EventPrice
                value={this.props.priceValue}
                onChange={this.props.onChange}
              />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
