import React, { Component } from "react";
import Select from 'react-select';

export class MultiSelect extends Component {
  render() {
    return (
      <Select style={{'border-color': '#17a2b8', 'border-radius': '20px', 'font-size': '10px'}}
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
