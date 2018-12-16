import React, { Component } from "react"
import {Label} from 'reactstrap';
import {PriceButton} from '../atoms/PriceButton';

export class EventPrice extends Component {
  render() {
    return (
      <div>
        <Label>Vyber vstupné akce</Label>
        <PriceButton/>
      </div>
    );
  }
}
