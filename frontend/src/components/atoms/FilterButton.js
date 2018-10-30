import React, { Component } from "react"
import { Button, ButtonGroup } from 'reactstrap';

export class FilterButton extends Component {
  render() {
    return (
      <div>
        <Button outline color="info" size="sm">Vyhledej prevenci!</Button>{' '}
      </div>
    );
  }
}
