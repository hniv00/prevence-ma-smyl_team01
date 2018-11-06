import React, { Component } from "react"
import {Row, Col} from 'reactstrap';
import {WeightBMI} from '../atoms/WeightBMI';
import {HeightBMI} from '../atoms/HeightBMI';
import {ResultBMI} from '../atoms/ResultBMI';

export class BMISelection extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="0" sm="12" md="4"><WeightBMI></WeightBMI></Col>
          <Col xs="0" sm="12" md="4"><HeightBMI></HeightBMI></Col>
          <Col xs="0" sm="12" md="4"><ResultBMI></ResultBMI></Col>
        </Row>
      </div>
    );
  }
}
