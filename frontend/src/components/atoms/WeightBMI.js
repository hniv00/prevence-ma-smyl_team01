import React, { Component } from "react"

export class WeightBMI extends Component {
  constructor(props){
    super(props)
    this.state = {value: 70};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <h6>Zadejte váhu</h6>
         <input type="number" min="40" max="260" class="inputBMI" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}
