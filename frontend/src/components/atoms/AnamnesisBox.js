import React, { Component } from "react"
import { Button, ButtonGroup } from 'reactstrap';

export class AnamnesisBox extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button outline color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Kuřák</Button>
          <Button outline color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Povýživa</Button>
          <Button outline color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Obezita</Button>
        </ButtonGroup>
        <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
      </div>
    );
  }
}
