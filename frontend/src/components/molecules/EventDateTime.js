import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export class EventDateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
    this.props.onChange({ date: e.target.value });
  }

  handleTimeChange(e) {
    this.setState({ time: e.target.value });
    this.props.onChange({ time: e.target.value });
  }

  render() {
    return (
      <div>
        <Form>
          <Label>Čas konání</Label>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label for="exampleDate">Datum</Label>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                  value={this.props.dateValue}
                  onChange={e => this.handleDateChange(e)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleTime">Čas</Label>
                <Input
                  type="time"
                  name="time"
                  id="exampleTime"
                  placeholder="time placeholder"
                  value={this.props.timeValue}
                  onChange={e => this.handleTimeChange(e)}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
