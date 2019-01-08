import React, { Component } from 'react';
import { Label } from 'reactstrap';

import { MultiSelectDiag } from '../atoms/MultiSelectDiag';

export class ExamDiagnosis extends Component {
  render() {
    return (
      <div>
        <Label for="exampleText">Diagnózy</Label>
        <MultiSelectDiag />
      </div>
    );
  }
}
