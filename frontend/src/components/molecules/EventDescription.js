import React, { Component } from "react"
import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class EventDescription extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Popis akce</Label>
            <Input
              type="textarea"
              name="text"
              id="eventText"/>
        </FormGroup>
      </Form>
    );
  }
}
