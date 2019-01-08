import React, { Component } from 'react';
import { Label } from 'reactstrap';

import Select from 'react-select';

const options = [
  { value: '1 á 5 let', label: '1 á 5 let' },
  { value: '1 á 2 roky', label: '1 á 2 roky' },
  { value: '1 á 1 rok', label: '1 á 1 rok' },
  { value: '1 á 6 měsíců', label: '1 á 6 měsíců' },
];

export class BasicPeriodicity extends Component {
  render() {
    return (
      <div>
        <Label>Základní periodicita</Label>
        <Select
          style={{ borderColor: '#17a2b8', borderRadius: '20px' }}
          value={this.props.value}
          onChange={this.props.handleChange}
          options={options}
        />
      </div>
    );
  }
}
