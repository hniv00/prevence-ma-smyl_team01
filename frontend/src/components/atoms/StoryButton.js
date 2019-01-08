import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class StoryButton extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={this.props.onClick}
          color="info"
          size="md"
          style={{ borderRadius: '20px' }}
        >
          Celý příběh
        </Button>{' '}
      </div>
    );
  }
}
