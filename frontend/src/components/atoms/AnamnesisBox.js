import React, { Component } from "react"
import { ButtonGroup } from 'reactstrap';
import Button from '@material-ui/core/Button';


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
          <Button variant="text" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Kuřák</Button>
          <Button variant="contained" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Podvýživa</Button>
          <Button variant="flat" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Obezita</Button>
          <Button variant="outlined" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Obezita</Button>
          <Button variant="raised" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Obezita</Button>
          <Button variant="fab" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Obezita</Button>
        </ButtonGroup>
        <p id="cssTitle"> Selected: {JSON.stringify(this.state.cSelected)}</p>
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
