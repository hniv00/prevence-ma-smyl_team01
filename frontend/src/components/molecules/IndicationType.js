import React, { Component } from "react";
import { Label } from 'reactstrap';

import {MultiSelectIndicationType} from '../atoms/MultiSelectIndicationType';

export class IndicationType extends Component {

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
      <div className="relatedType">
        <Label for="exampleText">Typ indikace</Label>
        <MultiSelectIndicationType
        selectedOption={this.setState.value}
        setExamination={this.handleChange}
        ></MultiSelectIndicationType>
      </div>
    );
  }
}
