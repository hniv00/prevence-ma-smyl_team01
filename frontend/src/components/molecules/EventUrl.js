import React, { Component } from "react"
import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class EventUrl extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Odkaz na stránky akce</Label>
          <Input type="url"/>
        </FormGroup>
      </Form>
    );
  }
}
