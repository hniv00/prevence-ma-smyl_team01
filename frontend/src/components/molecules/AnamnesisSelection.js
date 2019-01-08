import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAnamnesis } from '../../services/Filtration/actions';
import { MultiSelectAna } from '../atoms/MultiSelectAna';
import { dumbStore } from '../../store/dumbStore';

export class AnamnesisSelectionRaw extends Component {
  options = dumbStore.anamnesisOptions;

  constructor() {
    super();
    this.options = dumbStore.anamnesisOptions;
  }

  handleChange = selectedOption => {
    this.props.setAnamnesis(selectedOption);
  };

  render() {
    return (
      <div>
        <h6>Rodinná anamnéza</h6>
        <MultiSelectAna
          handleChange={this.handleChange.bind(this)}
          options={this.options}
          selectedOption={this.props.selectedOption}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedOption: state.filterState.anamnesis,
});

const mapDispatchToProps = {
  setAnamnesis,
};

export const AnamnesisSelection = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnamnesisSelectionRaw);
