import React, { Component } from "react";
import { connect } from 'react-redux';
import {setAge} from '../../services/Filtration/actions';
import './AgeSlider.css';

export class AgeSliderRaw extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    //this.setState({value: event.target.value});
    this.props.setAge(event.target.value);
  }

  render() {
    return (
      <div class="sliderContainer">
         <input type="range" min="18" max="120" class="slider" value={this.props.value} onChange={this.handleChange}/>
         <br/>
         <input type="number" min="18" max="120" class="ageInput" value={this.props.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.filterState.age
});

const mapDispatchToProps = {
  setAge
};

export const AgeSlider = connect(mapStateToProps, mapDispatchToProps)(AgeSliderRaw);


