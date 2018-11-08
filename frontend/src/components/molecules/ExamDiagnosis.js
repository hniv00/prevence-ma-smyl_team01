import React, { Component } from "react";
import { Label } from 'reactstrap';


import {MultiSelect} from '../atoms/MultiSelect';

export class ExamDiagnosis extends Component {
  render() {
    return (
      <div>
        <Label for="exampleText">Diagnózy</Label>
        <MultiSelect></MultiSelect>
      </div>
    );
  }
}
