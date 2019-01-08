import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class NewEventButton extends Component {
  render() {
    return (
      <div>
        <Button color="info" size="md" style={{ margin: '20px' }}>
          Vytvořit novou akci
        </Button>{' '}
      </div>
    );
  }
}
