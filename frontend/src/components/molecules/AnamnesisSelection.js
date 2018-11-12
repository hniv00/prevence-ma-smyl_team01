import React, { Component } from "react";
import {connect} from 'react-redux';
import {setAnamnesis} from '../../services/Filtration/actions'
import {MultiSelect} from '../atoms/MultiSelect';
import {dumbStore} from '../../store/dumbStore';
import axios from 'axios';

export class AnamnesisSelectionRaw extends Component {
   options = dumbStore.anamnesisOptions;

  constructor(){
    super()
    this.fillFromDB = this.fillFromDB.bind(this);
    this.options = dumbStore.anamnesisOptions;
  }

  fillFromDB(){
    return 'lol';
     axios.get('http://localhost:3030/api/examination').then((response)=>{
      dumbStore.anamnesisOptions = response;
     });
  }

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