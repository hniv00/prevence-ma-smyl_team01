import React, { Component } from "react"
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class EventPlace extends Component {
  render() {
    return (
      <div>
      <Form>
      <Label>Místo konání</Label>
      <Row form>
      <Col md={8}>
        <FormGroup>
          <Label for="street">Ulice</Label>
          <Input type="text" name="street" id="street"/>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for="number">Číslo popisné</Label>
          <Input type="text" name="number" id="number"/>
        </FormGroup>
      </Col>
      <Col md={8}>
        <FormGroup>
          <Label for="city">Město</Label>
          <Input type="text" name="city" id="city"/>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for="zip">PSČ</Label>
          <Input type="text" name="zip" id="zip"/>
        </FormGroup>
      </Col>
    </Row>
      </Form>
      </div>
    );
  }
}
