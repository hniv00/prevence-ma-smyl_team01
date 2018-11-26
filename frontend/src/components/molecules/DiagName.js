import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class DiagName extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Název diagnózy</Label>
          <Input type="text"/>
        </FormGroup>
      </Form>
    );
  }
}
