import React, { Component } from "react"
import { Button, ButtonGroup } from 'reactstrap';

export class GenderButton extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }


  render() {
    return (
      <div>
        <ButtonGroup>
          <Button outline color="primary" size="sm" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Žena</Button>
          <Button outline color="primary" size="sm" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Muž</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
      </div>
    );
  }
}
