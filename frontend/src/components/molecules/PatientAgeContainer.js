import React from 'react';
import { Jumbotron, Row, Col, Form, FormGroup, Label, Input, Container } from 'reactstrap';

export const PatientAgeContainer = (props) => {
  return (
    <Container>
      <div>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk:</Label>
                <Input className="ageInput" type="number" min="18" max="120"/>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
