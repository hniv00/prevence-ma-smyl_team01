import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export class NewIndiButton extends Component {
  render() {
    return (
      <div>
        <Button color="info" size="md" style={{ margin: '20px' }}>
          Vytvořit novou indikaci
        </Button>{' '}
      </div>
    );
  }
}
