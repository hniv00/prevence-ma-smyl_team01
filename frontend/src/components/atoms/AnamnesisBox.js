import React, { Component } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

// not imported to the filter

const data = [
  { id: 1, anamnesis: 'Kuřák' },
  { id: 2, anamnesis: 'Podvýživa' },
  { id: 3, anamnesis: 'Obezita' },
  { id: 4, anamnesis: 'Vegan' },
];

export class AnamnesisBox extends Component {
  constructor(props) {
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
    const { cSelected } = this.state;
    return (
      <div>
        <ButtonGroup>
          {data.map(item => (
            <Button
              key={item.id}
              outline
              color="info"
              size="sm"
              onClick={() => this.onCheckboxBtnClick(item.id)}
              active={cSelected.includes(item.id)}
            >
              item.anamnesis
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}
