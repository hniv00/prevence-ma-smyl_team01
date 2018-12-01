import React, { Component } from "react";
import { Label } from 'reactstrap';

import {MultiSelectExamination} from '../atoms/MultiSelectExamination';

export class DiagRelatedExams extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
    this.setState({value: e});
    this.props.callback(e.target.value, 'diagRelatedExams');

  }

  render() {
    return (
      <div className="relatedExams">
        <Label for="exampleText">Související vyšetření</Label>
        <MultiSelectExamination
        selectedOption={this.setState.value}
        setExamination={this.handleChange}
        ></MultiSelectExamination>
      </div>
    );
  }
}
