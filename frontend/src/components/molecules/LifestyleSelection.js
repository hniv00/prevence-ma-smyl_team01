import React, { Component } from "react"
import {AnamnesisBox} from '../atoms/AnamnesisBox';
import {MultiSelect} from '../atoms/MultiSelect';

export class LifestyleSelection extends Component {
  render() {
    return (
      <div>
        <h6>Životní styl</h6>
        <MultiSelect></MultiSelect>
      </div>
    );
  }
}
