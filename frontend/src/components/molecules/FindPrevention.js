import React, { Component } from "react"
import axios from 'axios';
import {connect} from 'react-redux';
import {FilterButton} from '../atoms/FilterButton';
import {dumbStore} from '../../store/dumbStore';

export class FindPreventionRaw extends Component {
  constructor(props){
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(){
    let gender = this.props.gender;
    let age = this.props.age;
    let anamnesis = this.props.anamnesis;
    let disease = this.props.disease;
    let lifeStyle = this.props.lifeStyle;
    let height = this.props.height;
    let weight = this.props.weight;
    console.log('FilterButton was clicked')
    // axios.get('http://localhost:3030/api/examination').then((response)=>{
    //   dumbStore.examinationResult = response;
    // });
  }

  render() {
    return (
      <div id="filterButton">
        <a href="/vysetreni#examinationList"><FilterButton onClick={this.handleOnClick}/></a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gender: state.filterState.gender,
  age: state.filterState.age,
  anamnesis: state.filterState.anamnesis,
  disease: state.filterState.disease,
  lifeStyle: state.filterState.lifeStyle,
  height: state.filterState.height,
  weight: state.filterState.weight
});

export const FindPrevention = connect(mapStateToProps)(FindPreventionRaw);