import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Container } from 'reactstrap';

export class BasicFilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agefrombasic: '',
      ageuntilbasic: '',
    };

    this.handleAgeFromChange = this.handleAgeFromChange.bind(this);
    this.handleAgeUntilChange = this.handleAgeUntilChange.bind(this);
  }

  handleAgeFromChange(e) {
    this.setState({ agefrombasic: e.target.value });
    this.props.onChange({ agefrombasic: e.target.value });
  }

  handleAgeUntilChange(e) {
    this.setState({ ageuntilbasic: e.target.value });
    this.props.onChange({ ageuntilbasic: e.target.value });
  }

  render() {
    return (
      <Container>
        <div>
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <Label>Věk od:</Label>
                  <Input
                    className="ageInput"
                    type="number"
                    min="18"
                    max="120"
                    value={this.props.agefrombasicValue}
                    onChange={e => this.handleAgeFromChange(e)}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col>
              <Form>
                <FormGroup>
                  <Label>Věk do:</Label>
                  <Input
                    className="ageInput"
                    type="number"
                    min="18"
                    max="120"
                    value={this.props.ageuntilbasicValue}
                    onChange={e => this.handleAgeUntilChange(e)}
                  />
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
