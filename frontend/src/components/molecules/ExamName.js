import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class ExamName extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Název vyšetření</Label>
          <Input type="text"/>
        </FormGroup>
      </Form>
    );
  }
}
