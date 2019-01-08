import React, { Component } from 'react';
import { GenderButton } from '../atoms/GenderButton';

export class GenderSelection extends Component {
  render() {
    return (
      <div>
        <h6>Vyber pohlaví</h6>
        <GenderButton />
      </div>
    );
  }
}
