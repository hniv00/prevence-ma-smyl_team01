import React, { Component } from "react"

export class WeightBMI extends Component {
  constructor(props){
    super(props)
    this.state = {weight: 70};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <h6>Zadej váhu</h6>
         <input type="number" min="40" max="260" class="inputBMI" value={this.state.weight} onChange={this.handleChange}/>
      </div>
    );
  }
}
