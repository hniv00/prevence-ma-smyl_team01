import React, { Component } from 'react';
import { Label } from 'reactstrap';

import { MultiSelect } from '../atoms/MultiSelect';

export class DiagRelatedExams extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedExams) {
    this.setState({ value: selectedExams });
    this.props.onChange({ examination: selectedExams });
  }

  render() {
    return (
      <div className="relatedExams">
        <Label for="exampleText">Související vyšetření</Label>
        <MultiSelect
          value={this.props.selectedExams}
          onChange={this.handleChange}
          options={this.props.options}
          isMulti={true}
          isSearchable={true}
          placeholder="Vyberte vyšetření..."
        />
      </div>
    );
  }
}
