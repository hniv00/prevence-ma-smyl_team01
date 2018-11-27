import React, { Component } from "react"
import { Button, ButtonGroup } from 'reactstrap';

export class StoryButton extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClick} color="info" size="md">Celý příběh</Button>{' '}
      </div>
    );
  }
}
