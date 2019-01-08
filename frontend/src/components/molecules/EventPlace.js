import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export class EventPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      num: '',
      city: '',
      zip: '',
    };

    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
  }

  handleStreetChange(e) {
    this.setState({ street: e.target.value });
    this.props.onChange({ street: e.target.value });
  }

  handleNumChange(e) {
    this.setState({ num: e.target.value });
    this.props.onChange({ num: e.target.value });
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value });
    this.props.onChange({ city: e.target.value });
  }

  handleZipChange(e) {
    this.setState({ zip: e.target.value });
    this.props.onChange({ zip: e.target.value });
  }

  render() {
    return (
      <div>
        <Form>
          <Label>Místo konání</Label>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label for="street">Ulice</Label>
                <Input
                  type="text"
                  name="street"
                  id="street"
                  value={this.props.streetValue}
                  onChange={e => this.handleStreetChange(e)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="number">Číslo popisné</Label>
                <Input
                  type="text"
                  name="number"
                  id="number"
                  value={this.props.numValue}
                  onChange={e => this.handleNumChange(e)}
                />
              </FormGroup>
            </Col>
            <Col md={8}>
              <FormGroup>
                <Label for="city">Město</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  value={this.props.cityValue}
                  onChange={e => this.handleCityChange(e)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="zip">PSČ</Label>
                <Input
                  type="text"
                  name="zip"
                  id="zip"
                  value={this.props.zipValue}
                  onChange={e => this.handleZipChange(e)}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
