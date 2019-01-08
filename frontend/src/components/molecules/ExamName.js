import React, { Component } from 'react';

import { FormGroup, Form, Label, Input } from 'reactstrap';

export class ExamName extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange({ name: e.target.value });
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Název vyšetření</Label>
          <Input
            type="text"
            value={this.props.value}
            onChange={e => this.handleChange(e)}
          />
        </FormGroup>
      </Form>
    );
  }
}
