import React, { Component } from "react"
import Button from '@material-ui/core/Button';


export class FilterButton extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">Vyhledej prevenci!</Button>{' '}
      </div>
    );
  }
}
