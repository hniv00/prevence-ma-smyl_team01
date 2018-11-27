import React, { Component } from "react";
import  { MultiSelect } from './MultiSelect';

const options = [
  { value: 'hypertenze', label: 'hypertenze' },
  { value: 'diabetes', label: 'diabetes' },
  { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' },
  { value: 'rakova prostaty', label: 'rakova prostaty' },
  { value: 'krátkozrakost', label: 'krátkozrakost' },
];

export class MultiSelectDiag extends Component {
  render() {

    return (
      <MultiSelect
        value={this.props.selectedOption}
        onChange={this.props.handleChange}
        options={options}
        isMulti={true}
        isSearchable={true}
        placeholder="Vyberte diagnózy..."
      />
    );
  }
}
