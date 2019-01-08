import React, { Component } from 'react';
import { AgeSlider } from '../atoms/AgeSlider';

export class AgeSelection extends Component {
  render() {
    return (
      <div>
        <h6>Vyber věk</h6>
        <AgeSlider />
      </div>
    );
  }
}
