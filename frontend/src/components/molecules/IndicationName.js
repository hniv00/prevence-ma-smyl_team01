import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class IndicationName extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Název indikace</Label>
          <Input type="text"/>
        </FormGroup>
      </Form>
    );
  }
}
