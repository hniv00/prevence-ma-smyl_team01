import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAge } from '../../services/Filtration/actions';
import './AgeSlider.css';

export class AgeSliderRaw extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setAge(event.target.value);
  }

  render() {
    return (
      <div className="sliderContainer">
        <input
          type="range"
          min="18"
          max="120"
          className="slider"
          value={this.props.value}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="number"
          min="18"
          max="120"
          className="ageInput"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.filterState.age,
});

const mapDispatchToProps = {
  setAge,
};

export const AgeSlider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AgeSliderRaw);
