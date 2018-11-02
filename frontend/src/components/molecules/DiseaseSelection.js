import React, { Component } from "react"
import {AnamnesisBox} from '../atoms/AnamnesisBox';
import {MultiSelect} from '../atoms/MultiSelect';

export class DiseaseSelection extends Component {
  render() {
    return (
      <div>
        <h6>Léčím se s</h6>
        <MultiSelect></MultiSelect>
      </div>
    );
  }
}
