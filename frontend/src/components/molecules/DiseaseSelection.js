import React, { Component } from "react"
import {AnamnesisBox} from '../atoms/AnamnesisBox';
import {MultiSelectDis} from '../atoms/MultiSelectDis';

export class DiseaseSelection extends Component {
  render() {
    return (
      <div>
        <h6>Léčím se s</h6>
        <MultiSelectDis></MultiSelectDis>
      </div>
    );
  }
}
