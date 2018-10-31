import React, { Component } from "react"
import { Button, ButtonGroup } from 'reactstrap';

export class FilterButton extends Component {
  render() {
    return (
      <div>
        <Button color="info" size="md">Vyhledej prevenci!</Button>{' '}
      </div>
    );
  }
}
