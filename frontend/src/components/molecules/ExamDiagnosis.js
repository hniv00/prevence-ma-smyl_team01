import React, { Component } from "react";
import { Label } from 'reactstrap';


import {MultiSelectAna} from '../atoms/MultiSelectAna';

export class ExamDiagnosis extends Component {
  render() {
    return (
      <div>
        <Label for="exampleText">Diagnózy</Label>
        <MultiSelectAna/>
      </div>
    );
  }
}
