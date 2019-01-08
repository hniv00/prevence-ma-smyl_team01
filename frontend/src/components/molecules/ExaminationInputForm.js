import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export class ExaminationInputForm extends Component {
  render() {
    return (
      <div className="ExamInputForm">
        <FormGroup className="ExamName">
          <Input type="text" placeholder="Název vyšetření" />
        </FormGroup>
        <FormGroup className="ExamDecription">
          <Input
            type="textarea"
            placeholder="Popis vyšetření"
            name="text"
            id="exampleText"
          />
        </FormGroup>
      </div>
    );
  }
}
