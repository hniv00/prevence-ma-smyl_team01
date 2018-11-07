import React, { Component } from "react"

export class HeightBMI extends Component {
  constructor(props){
    super(props)
    this.state = {value: 180};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <h6>Zadej výšku</h6>
         <input type="number" min="120" max="260" class="inputBMI" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}
