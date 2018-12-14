import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class PatientName extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Jméno pacienta</Label>
          <Input type="text"/>
        </FormGroup>
      </Form>
    );
  }
}
