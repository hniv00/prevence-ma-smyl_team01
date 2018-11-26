import React from 'react';
import { Jumbotron, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export const AdvancedFilterContainer = (props) => {
  return (
      <Jumbotron id="AdminExamContainer">
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
};
