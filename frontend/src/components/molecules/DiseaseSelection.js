import React, { Component } from "react"
import {MultiSelectDis} from '../atoms/MultiSelectDis';
import {connect} from 'react-redux';
import {setDisease} from '../../services/Filtration/actions';

export class DiseaseSelectionRaw extends Component {

  options = [
    { value: 'hypertenze', label: 'hypertenze' },
    { value: 'diabetes', label: 'diabetes' },
    { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' }
  ];

  handleChange = (selectedOption) => {
    this.props.setAnamnesis(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    return (
      <div>
        <h6>Léčím se s</h6>
        <MultiSelectDis handleChange={this.handleChange.bind(this)}
          options={this.options}
          selectedOption={this.props.selectedOption}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedOption: state.filterState.disease
});

const mapDispatchToProps = {
  setDisease
};

export const DiseaseSelection = connect(mapStateToProps, mapDispatchToProps)(DiseaseSelectionRaw);
