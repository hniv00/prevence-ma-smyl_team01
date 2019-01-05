import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MultiSelectP } from './MultiSelectP';
import { setDiagnosis, startFetchFilteredPartners } from '../../services/Partners/actions'
import { getAdminDiagnosis } from '../../services/AdminDiagnosis/reducer';
import { startFetchDiagnosis } from '../../services/AdminDiagnosis/actions';

/*
const options = [
  { value: 'hypertenze', label: 'hypertenze' },
  { value: 'diabetes', label: 'diabetes' },
  { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' }
];
*/

class MultiPartnersRaw extends Component {
  componentDidMount(){
    this.props.startFetchDiagnosis();
  }

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.getDiagName = this.getDiagName.bind(this);
  }

  handleChange(addedOption){
    this.props.setDiagnosis(addedOption);
    this.props.startFetchFilteredPartners();
  }

  getDiagName(){
    let diagName = []
    for (const diagnosis of this.props.diagnosis) {
      diagName.push({label: diagnosis.Name, value: diagnosis.Name});
      console.log(diagName);
    }
    return diagName;
  }

  render() {
    console.log(this.props.diagnosis);

    return (
        <MultiSelectP
          value={this.props.selectedOption}
          onChange={this.handleChange}
          options={this.getDiagName()}
          isMulti={true}
          isSearchable={true}
          placeholder="Vyhledej si projekt podle zaměření..."
        />
    );
  }
}

const mapStateToProps = (state) => {
  const diagnosis = getAdminDiagnosis(state.adminDiagnosis);

  return {
    diagnosis,
    value: state.filterPartner.diagnosis
  };
};

const mapDispatchToProps = {
  startFetchDiagnosis,
  setDiagnosis,
  startFetchFilteredPartners
};

export const MultiPartners = connect(mapStateToProps, mapDispatchToProps)(MultiPartnersRaw);
