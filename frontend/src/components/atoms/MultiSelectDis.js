import React, { Component } from 'react';
import { MultiSelect } from './MultiSelect';

const options = [
  { value: 'hypertenze', label: 'hypertenze' },
  { value: 'diabetes', label: 'diabetes' },
  { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' },
];

export class MultiSelectDis extends Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <MultiSelect
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
        isSearchable={true}
        placeholder="Vlastní nemoci"
      />
    );
  }
}
