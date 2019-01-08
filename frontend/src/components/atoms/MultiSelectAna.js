import React, { Component } from 'react';
import { MultiSelect } from './MultiSelect';

export class MultiSelectAna extends Component {
  render() {
    return (
      <MultiSelect
        value={this.props.selectedOption}
        onChange={this.props.handleChange}
        options={this.props.options}
        isMulti={true}
        isSearchable={true}
        placeholder="Nemoci v rodině"
      />
    );
  }
}
