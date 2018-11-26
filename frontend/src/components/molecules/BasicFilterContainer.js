import React from 'react';
import { Jumbotron, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export const BasicFilterContainer = (props) => {
  return (
    <Container>
      <div>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk od:</Label>
                <Input className="ageInput" type="number" min="18" max="120"/>
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk do:</Label>
                <Input className="ageInput" type="number" min="18" max="120"/>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
