import React, { Component } from "react";
import { Label } from 'reactstrap';

import { MultiSelect } from "../atoms/MultiSelect";

const options = [
  { value: 'rodinná anamnéza', label: 'Rodinná anamnéza' },
  { value: 'léčím se s', label: 'Léčím se s' },
  { value: 'životní styl', label: 'Životní styl' },
];

export class IndicationType extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedType) {
    console.log(selectedType.value);
    this.setState({value: selectedType.value});
    this.props.onChange({type: selectedType.value});
  }

  render() {
    return (
      <div className="relatedType">
        <Label for="exampleText">Typ indikace</Label>
        <MultiSelect
        value={this.props.selectedType}
        onChange={this.handleChange}
        options={options}
        isMulti={false}
        isSearchable={true}
        placeholder="Vyberte typ indikace..."
        />
      </div>
    );
  }
}


/*
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
    this.setType({typeValue: e});
  //  this.props.callback(e.target.value, 'diagRelatedExams');
  //  this.props.onChange({name: e.target.value});
  }

  render() {
    return (
      <div className="relatedType">
        <Label for="exampleText">Typ indikace</Label>
        <MultiSelectIndicationType
        selectedOption={this.setState.typeValue}
        setExamination={this.handleChange}
        onChange={e => (this.handleChange(e))}
        ></MultiSelectIndicationType>
      </div>
    );
  }
}
*/
