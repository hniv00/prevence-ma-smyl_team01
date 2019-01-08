import React, { Component } from 'react';
import { MultiSelectDis } from '../atoms/MultiSelectDis';
import { connect } from 'react-redux';
import { setDisease } from '../../services/Filtration/actions';
import { dumbStore } from '../../store/dumbStore';

export class DiseaseSelectionRaw extends Component {
  options = dumbStore.diseaseOptions;

  handleChange = selectedOption => {
    this.props.setDisease(selectedOption);
  };

  render() {
    return (
      <div>
        <h6>Léčím se s</h6>
        <MultiSelectDis
          handleChange={this.handleChange.bind(this)}
          options={this.options}
          selectedOption={this.props.selectedOption}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedOption: state.filterState.disease,
});

const mapDispatchToProps = {
  setDisease,
};

export const DiseaseSelection = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiseaseSelectionRaw);
