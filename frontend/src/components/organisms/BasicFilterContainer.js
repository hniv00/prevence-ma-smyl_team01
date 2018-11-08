import React from 'react';
import { Jumbotron, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';




export const BasicFilterContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row><Label>zakladni filtrovani + tady bude switch</Label></Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk od:</Label>
                <Input className="ageInput" type="number"/>
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk od:</Label>
                <Input className="ageInput" type="number"/>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
