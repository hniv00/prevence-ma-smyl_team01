import React, { Component } from "react";
import  { MultiSelect } from './MultiSelect';
import { connect } from 'react-redux';
import { setExamination } from '../../services/AdminDiagnosis/actions';

const options = [
  { value: 'Rodinná anamnéza', label: 'Rodinná anamnéza' },
  { value: 'Léčím se s', label: 'Léčím se s' },
  { value: 'Životní styl', label: 'Životní styl' },
];

export class MultiSelectIndicationType extends Component {

  render() {
//    const { selectedOption, setExamination } = this.props;

    return (
      <MultiSelect
//        value={selectedOption}
//        onChange={setExamination}
        options={options}
        isMulti={true}
        isSearchable={true}
        placeholder="Vyberte typ indikace..."
      />
    );
  }
}


//const mapStateToProps = state => ({
//    selectedOption: state.createDiagnosis.examination
//});

//const mapDispatchToProps = {
//  setExamination,
//};

//export const MultiSelectIndicationType = connect(
  /*mapStateToProps,
  mapDispatchToProps,*/
//)(MultiSelectIndicationType);
