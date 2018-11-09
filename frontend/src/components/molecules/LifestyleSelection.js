import React, { Component } from "react"
import {AnamnesisBox} from '../atoms/AnamnesisBox';
import {SmokerButton} from '../atoms/SmokerButton';

export class LifestyleSelection extends Component {
  render() {
    return (
      <div>
        <h6>Životní styl</h6>
        <SmokerButton></SmokerButton>
      </div>
    );
  }
}
