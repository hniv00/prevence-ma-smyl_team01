import React, { Component } from "react";
import { Label } from 'reactstrap';

import {MultiSelectExamination} from '../atoms/MultiSelectExamination';

export class DiagRelatedExams extends Component {
  render() {
    return (
      <div className="relatedExams">
        <Label for="exampleText">Související vyšetření</Label>
        <MultiSelectExamination></MultiSelectExamination>
      </div>
    );
  }
}
