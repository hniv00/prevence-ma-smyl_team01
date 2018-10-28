import React, { Component } from "react"
import { Button} from 'reactstrap';

export class FilterButton extends Component {
  render() {
    return (
      <div>
        <Button id="cssButton" color="primary">Vyhledej prevenci!</Button>{' '}
      </div>
    );
  }
}
