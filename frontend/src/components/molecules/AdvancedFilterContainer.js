import React, { Component } from "react"
import { Jumbotron, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export class AdvancedFilterContainer extends Component {
  render() {
  return (
      <Jumbotron id="AdminExamContainer">
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
                  />
                </FormGroup>
              </Form>
            </Col>
        </Row>

        <Row>
        <Col align="left">
          <Form>
            <Label>Rodinná anamnéza</Label>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Karcinom prsu
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Vysoký krevní tlak
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Diabetes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Dna
              </Label>
            </FormGroup>
          </Form>
        </Col>

        <Col align="left">
          <Form>
            <Label>Léčím se s</Label>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Vysoký cholesterol
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Diabetes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Krátkozrakost
              </Label>
            </FormGroup>
          </Form>
        </Col>

        <Col align="left">
          <Form>
            <Label>Životní styl</Label>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Kuřák
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Obezita
              </Label>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Jumbotron>
  );
}
};
