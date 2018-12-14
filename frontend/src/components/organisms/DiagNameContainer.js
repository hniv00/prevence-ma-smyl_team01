import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, UncontrolledTooltip } from 'reactstrap';

import {DiagName} from '../molecules/DiagName';
import {DiagDescription} from '../molecules/DiagDescription';
import {DiagRelatedExams} from '../molecules/DiagRelatedExams';

export class DiagNameContainer extends Component{
constructor(props) {
  super(props)

}

  //console.log(this);
render () {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
        <Col>
          <DiagName
            value={this.props.parentState.diagName}
            callback = {this.props.callback}
          />
        </Col>
        </Row>
        <Row>
        <Col md="6">
        <DiagDescription
          value={this.props.parentState.diagDescription}
          callback = {this.props.callback}
          />
          </Col>
        <Col md="6">
        <DiagRelatedExams
          value={this.props.parentState.diagRelatedExams}
          callback = {this.props.callback}
        />
        </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
}
