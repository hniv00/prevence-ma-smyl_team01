import React, { Component } from "react";
import Select from 'react-select';

export class MultiSelect extends Component {
  render() {
    return (
      <Select
        value={this.props.selectedOption}
        onChange={this.props.handleChange}
        options={this.props.options}
        isMulti={true}
        isSearchable={true}
        placeholder="Vyberte..."
      />
    );
  }
}
