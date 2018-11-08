import React, { Component } from "react"
import { Button, ButtonGroup, Label } from 'reactstrap';

export class AdminGenderButton extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });

    console.log(JSON.stringify(this.state.rSelected));
  }


  render() {
    return (
      <div>
        <div>
          <Label for="exampleText">Pohlaví</Label>
        </div>
        <div>
          <ButtonGroup>
            <Button outline color="info" size="sm" id="genderB" style={{width: '70px'}} onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Žena</Button>
            <Button outline color="info" size="sm" id="genderB" style={{width: '70px'}} onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Muž</Button>
            <Button outline color="info" size="sm" id="genderB" style={{width: '70px'}} onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Unisex</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
