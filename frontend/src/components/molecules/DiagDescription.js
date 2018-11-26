import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class DiagDescription extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Popis diagnózy</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Form>
    );
  }
}
