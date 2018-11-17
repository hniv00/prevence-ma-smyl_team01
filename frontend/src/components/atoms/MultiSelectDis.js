import React, { Component } from "react";
import Select from 'react-select';

const options = [
  { value: 'hypertenze', label: 'hypertenze' },
  { value: 'diabetes', label: 'diabetes' },
  { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' }
];

export class MultiSelectDis extends Component {
  render() {
    return (
      <Select style={{'border-color': '#17a2b8', 'border-radius': '20px'}}
        value={this.props.selectedOption}
        onChange={this.props.handleChange}
        options={options}
        isMulti={true}
        isSearchable={true}
        placeholder="Vlastní nemoci"
      />
    );
  }
}
