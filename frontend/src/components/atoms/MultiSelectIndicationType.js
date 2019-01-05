import React, { Component } from "react";
import  { MultiSelect } from './MultiSelect';

const options = [
  { value: 'Rodinná anamnéza', label: 'Rodinná anamnéza' },
  { value: 'Léčím se s', label: 'Léčím se s' },
  { value: 'Životní styl', label: 'Životní styl' },
];

export class MultiSelectIndicationType extends Component {

  render() {
    const { selectedOption, setType } = this.props;

    return (
      <MultiSelect
        value={selectedOption}
        onChange={setType}
        options={options}
        isMulti={false}
        isSearchable={true}
        placeholder="Vyberte typ indikace..."
      />
    );
  }
}

/*
const mapStateToProps = state => ({
    selectedOption: state.createIndication.type
});

const mapDispatchToProps = {
  setType,
};

export const MultiSelectIndicationType = connect( mapStateToProps, mapDispatchToProps)(MultiSelectIndicationType);
*/
