import React, { Component } from "react"
import { Button, ButtonGroup } from 'reactstrap';

export class NewStoryButton extends Component {
  render() {
    return (
      <div>
        <Button color="info" size="md" style={{'margin': '20px'}}>Vytvořit nový příběh</Button>{' '}
      </div>
    );
  }
}
