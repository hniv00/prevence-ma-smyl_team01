import React, { Component } from "react"
import {connect} from 'react-redux';
import {FilterButton} from '../atoms/FilterButton';
import {startFetchFilteredExaminations} from '../../services/Filtration/actions'

export class FindPreventionRaw extends Component {
  constructor(props){
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(){
<<<<<<< HEAD
    this.props.fetchFilteredExaminations();
=======
    let gender = this.props.gender;
    let age = this.props.age;
    let anamnesis = this.props.anamnesis;
    let disease = this.props.disease;
    let lifeStyle = this.props.lifeStyle;
    let height = this.props.height;
    let weight = this.props.weight;
    console.log('FilterButton was clicked');
    this.props.fetchFilteredExaminations('criteriaTest');
>>>>>>> bea29a9a33adfea35709e52d9f58bc7402339822
  }

  render() {
    return (
      <div id="filterButton">
        <a href="/vysetreni#examinationList"><FilterButton onClick={this.handleOnClick}/></a>
      </div>
    );
  }
}

<<<<<<< HEAD
const mapDispatchToProps = {
  fetchFilteredExaminations: startFetchFilteredExaminations
}

export const FindPrevention = connect(null, mapDispatchToProps)(FindPreventionRaw);
=======
const mapStateToProps = state => ({
  gender: state.filterState.gender,
  age: state.filterState.age,
  anamnesis: state.filterState.anamnesis,
  disease: state.filterState.disease,
  lifeStyle: state.filterState.lifeStyle,
  height: state.filterState.height,
  weight: state.filterState.weight,
  examinations: state.filterState.examinations
});

const mapDispatchToProps = {
  fetchFilteredExaminations: startFetchFilteredExaminations
}

export const FindPrevention = connect(mapStateToProps, mapDispatchToProps)(FindPreventionRaw);
>>>>>>> bea29a9a33adfea35709e52d9f58bc7402339822
