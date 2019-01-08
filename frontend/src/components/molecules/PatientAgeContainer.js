import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Container } from 'reactstrap';

export class PatientAgeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange({ age: e.target.value });
  }

  render() {
    return (
      <Container>
        <div>
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <Label>Věk:</Label>
                  <Input
                    className="ageInput"
                    type="number"
                    min="18"
                    max="120"
                    style={{ minWidth: '100px' }}
                    value={this.props.value}
                    onChange={e => this.handleChange(e)}
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
