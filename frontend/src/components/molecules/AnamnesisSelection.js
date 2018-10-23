import React, { Component } from "react"
import {AnamnesisBox} from '../atoms/AnamnesisBox';

export class AnamnesisSelection extends Component {
  render() {
    return (
      <div>
        <h6>Vyber anamnézu</h6>
        <AnamnesisBox></AnamnesisBox>
      </div>
    );
  }
}
