import React, { Component } from "react";
import  { MultiSelect } from './MultiSelect';
import { connect } from 'react-redux';
import { setExamination } from '../../services/AdminDiagnosis/actions';

const options = [
  { value: 'preventivní prohlídka', label: 'preventivní prohlídka' },
  { value: 'vyšetření prostaty', label: 'vyšetření prostaty' },
  { value: 'zubní preventivní prohlídka', label: 'zubní preventivní prohlídka' },
  { value: 'rentgen plic', label: 'rentgen plic' },
  { value: 'mamografické vyšetření', label: 'mamografické vyšetření' },
];

export class MultiSelectExaminationRaw extends Component {

  render() {
    const { selectedOption, setExamination } = this.props;

    return (
      <MultiSelect
        value={selectedOption}
        onChange={setExamination}
        options={options}
        isMulti={true}
        isSearchable={true}
        placeholder="Vyberte vyšetření..."
      />
    );
  }
}


const mapStateToProps = state => ({
    selectedOption: state.createDiagnosis.examination
});

const mapDispatchToProps = {
  setExamination,
};

export const MultiSelectExamination = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiSelectExaminationRaw);
