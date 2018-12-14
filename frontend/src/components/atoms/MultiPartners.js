import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MultiSelect } from './MultiSelect';
import { setDiagnosis, startFetchFilteredPartners } from '../../services/Partners/actions'

const options = [
  { value: 'hypertenze', label: 'hypertenze' },
  { value: 'diabetes', label: 'diabetes' },
  { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' }
];

class MultiPartnersRaw extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(addedOption){
    this.props.setDiagnosis(addedOption);
    this.props.startFetchFilteredPartners();
  }

  render() {
    return (
      <MultiSelect
        value={this.props.selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
        isSearchable={true}
        placeholder="Vyhledej si projekt podle zaměření..."
      />
    );
  }
}

const mapStateToProps = state => ({
  value: state.filterPartner.diagnosis
});

const mapDispatchToProps = {
  setDiagnosis,
  startFetchFilteredPartners
};

export const MultiPartners = connect(mapStateToProps, mapDispatchToProps)(MultiPartnersRaw);