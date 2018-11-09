import React, { Component } from "react"
import {AnamnesisBox} from '../atoms/AnamnesisBox';
import {MultiSelect} from '../atoms/MultiSelect';

export class AnamnesisSelection extends Component {
  render() {
    return (
      <div>
        <h6>Rodinná anamnéza</h6>
        <MultiSelect></MultiSelect>
      </div>
    );
  }
}
