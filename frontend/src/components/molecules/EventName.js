import React, { Component } from "react"
import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class EventName extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Název akce</Label>
          <Input type="text"/>
        </FormGroup>
      </Form>
    );
  }
}
