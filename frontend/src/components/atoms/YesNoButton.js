import React, { Component } from "react"
import { Button, ButtonGroup, Label } from 'reactstrap';

const data = [
  { id: 1, gender: 'Ano' },
  { id: 2, gender: 'Ne' }
]

export class YesNoButton extends Component {
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
      <div>
        <Label for="exampleText">Má vliv rodinná anamnéza?</Label>
      </div>
      <div>
        <ButtonGroup>
          {data.map (item => (
            <Button key={item.id} outline color="info" size="sm" id="genderB" style={{width: '50px'}} onClick={() => this.onRadioBtnClick( item.id )} active={rSelected ===  item.id }>
              { item.gender }
            </Button>
          ))}
        </ButtonGroup>
        </div>
      </div>
    );
  }
}
