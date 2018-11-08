import React from 'react';
import { Jumbotron, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';
import {AdminBasicFilter2} from '../molecules/AdminBasicFilter2';




export const AdvancedFilterContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row><AdminBasicFilter2></AdminBasicFilter2></Row>
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
            <Label>Rodinná anamnéza</Label>
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
  </div>
  );
};
