import React, { Component } from "react"

export class ResultBMI extends Component {
  constructor(props){
    super(props)
    this.state = {value: 20};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <h6>Výsledné BMI</h6>
         <input class="inputBMI" value={this.state.value} />
      </div>
    );
  }
}
