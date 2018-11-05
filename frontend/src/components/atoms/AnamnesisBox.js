import React, { Component } from "react"
import { ButtonGroup, Button } from 'reactstrap';

const data = [
  { id: 1, anamnesis: 'Kuřák' },
  { id: 2, anamnesis: 'Podvýživa' },
  { id: 3, anamnesis: 'Obezita' },
  { id: 4, anamnesis: 'Vegan' },
]

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

    console.log(JSON.stringify(this.state.cSelected));
  }

  render() {
    const { cSelected } = this.state;
    return (
      <div>
        <ButtonGroup>
        {data.map (item => (
            <Button outline color="info" size="sm" onClick={() => this.onCheckboxBtnClick(item.id)} active={cSelected.includes(item.id)}>
              item.anamnesis
            </Button>
          ))}

        </ButtonGroup>
      </div>
    );
  }
}



/* Test of combo box with tags */
/*
import { SelectPopover} from 'react-select-popover';

export class AnamnesisBox extends Component {
render () {
var options = [
    { label: "CSS", value: "css" },
    { label: "HTML", value: "html" },
    { label: "JavaScript", value: "js" },
    { label: "Ruby on Rails", value: "ror" },
];
var selectFieldName = "my-select";
var selectPlaceholder = "Choose some options...";
var onChange = function(obj) {
    console.log("EVENT", obj.event); // "added" or "removed"
    console.log("ITEM", obj.item);   // item that has been added/removed { label: '...', value: '...' }
    console.log("VALUE", obj.value); // [{label: '...', value: '...'}, {label: '...', value: '...'}]
}

return(
    <SelectPopover
        options={options}
        name={selectFieldName}
        selectPlaceholder={selectPlaceholder}
        onChange={ onChange }
    />
);
}
}

*/
