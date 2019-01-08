import React, { Component } from 'react';
import { Jumbotron, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const ana = [
  { id: '1', title: 'infarkt' },
  { id: '2', title: 'cévní mozková příhoda' },
  { id: '3', title: 'karcinom tlustého střeva' },
  { id: '4', title: 'karcinom prsu' },
];

const dis = [
  { id: '1', title: 'hypertenze' },
  { id: '2', title: 'diabetes' },
  { id: '3', title: 'poruchy štítné žlázy' },
];

const lifestyle = [{ id: '1', title: 'kuřák' }, { id: '2', title: 'obezita' }];

export class AdvancedFilterContainer extends Component {
  render() {
    return (
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk od:</Label>
                <Input className="ageInput" type="number" min="18" max="120" />
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk do:</Label>
                <Input className="ageInput" type="number" min="18" max="120" />
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col align="left">
            <Form>
              <Label>Rodinná anamnéza</Label>
              {ana.map(item => (
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" key={item.id} /> {item.title}
                  </Label>
                </FormGroup>
              ))}
            </Form>
          </Col>

          <Col align="left">
            <Form>
              <Label>Léčím se s</Label>
              {dis.map(item => (
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" key={item.id} /> {item.title}
                  </Label>
                </FormGroup>
              ))}
            </Form>
          </Col>

          <Col align="left">
            <Form>
              <Label>Životní styl</Label>
              {lifestyle.map(item => (
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" key={item.id} /> {item.title}
                  </Label>
                </FormGroup>
              ))}
            </Form>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}
