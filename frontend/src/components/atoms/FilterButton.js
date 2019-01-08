import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class FilterButton extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClick} color="info" size="md">
          Vyhledej prevenci!
        </Button>{' '}
      </div>
    );
  }
}
