import React, { Component } from "react";
import {connect} from 'react-redux';
import {setAnamnesis} from '../../services/Filtration/actions'
import {MultiSelect} from '../atoms/MultiSelect';

export class AnamnesisSelectionRaw extends Component {
   options = [
    { value: 'hypertenze', label: 'hypertenze' },
    { value: 'diabetes', label: 'diabetes' },
    { value: 'rakovina', label: 'rakovina' },
    { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' },
    { value: 'vyšší cholesterol', label: 'vyšší cholesterol' }
  ];

  handleChange = (selectedOption) => {
    this.props.setAnamnesis(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    return (
      <div>
        <h6>Rodinná anamnéza</h6>
        <MultiSelect handleChange={this.handleChange.bind(this)}
          options={this.options}
          selectedOption={this.props.selectedOption}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedOption: state.filterState.anamnesis
});

const mapDispatchToProps = {
  setAnamnesis
};

export const AnamnesisSelection = connect(mapStateToProps, mapDispatchToProps)(AnamnesisSelectionRaw);