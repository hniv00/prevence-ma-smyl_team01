import React, { Component } from "react"
import { Jumbotron, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import {AdminSwitch} from '../atoms/AdminSwitch';

export class AdminBasicFilter2 extends Component {
  render() {
    return (
        <Row>
          <Col><Label>Pokročilý filtr:</Label></Col>
        <Col align="right"><AdminSwitch></AdminSwitch></Col></Row>
    );
  }
}
