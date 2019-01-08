import React, { Component } from 'react';
import { FormGroup, Form, Label, Input } from 'reactstrap';

export class EventUrl extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange({ url: e.target.value });
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Odkaz na stránky akce</Label>
          <Input
            type="url"
            value={this.props.value}
            onChange={e => this.handleChange(e)}
          />
        </FormGroup>
      </Form>
    );
  }
}
