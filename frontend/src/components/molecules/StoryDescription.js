import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';

export class StoryDescription extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Popis příběhu</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Form>
    );
  }
}
