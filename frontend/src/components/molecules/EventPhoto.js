import React, { Component } from "react"
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class EventPhoto extends Component {
  render() {
    return (
      <div>
      <Form>
          <FormGroup>
              <Label for="exampleFile">Vyber fotografii</Label>
              <Col>
                <Input type="file" name="file" id="exampleFile"/>
              </Col>
          </FormGroup>
      </Form>
      </div>
    );
  }
}
