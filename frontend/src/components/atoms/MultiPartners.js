import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDiagnosis } from '../../services/Partners/actions';
import  { MultiSelect } from './MultiSelect';

const options = [
  { value: 'hypertenze', label: 'hypertenze' },
  { value: 'diabetes', label: 'diabetes' },
  { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' }
];

export class MultiPartners extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({selectedOption});
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.props;

    return (
      <MultiSelect
        value={this.selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
        isSearchable={true}
        placeholder="Vyhledej si projekt podle zaměření..."
      />
    );
  }
}
