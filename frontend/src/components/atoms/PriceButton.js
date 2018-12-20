import React, { Component } from "react"
import { Button, ButtonGroup } from 'reactstrap';

const data = [
  { id: 1, type: 'placené' },
  { id: 2, type: 'zdarma' }
]

export class PriceButton extends Component {
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
    const { rSelected } = this.state
    return (
      <div>
        <ButtonGroup>
          {data.map (item => (
            <Button key={item.id} outline color="info" size="sm" id="genderB" style={{width: '80px'}} onClick={() => this.onRadioBtnClick( item.id )} active={rSelected ===  item.id }>
              { item.type }
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}
