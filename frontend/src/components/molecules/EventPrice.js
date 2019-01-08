import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { MultiSelect } from '../atoms/MultiSelect';

const options = [
  { value: 'placené', label: 'placené' },
  { value: 'zdarma', label: 'zdarma' },
];

export class EventPrice extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedFee) {
    this.setState({ value: selectedFee.value });
    this.props.onChange({ price: selectedFee.value });
  }

  render() {
    return (
      <div>
        <Label>Vyber vstupné akce</Label>
        <MultiSelect
          value={this.props.selectedFee}
          onChange={this.handleChange}
          options={options}
          isMulti={false}
          isSearchable={true}
          placeholder="Vyberte typ vstupného..."
        />
      </div>
    );
  }
}
