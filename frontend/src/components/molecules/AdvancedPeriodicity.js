import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class AdvancedPeriodicity extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Rozšířená periodicita</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Form>
    );
  }
}
