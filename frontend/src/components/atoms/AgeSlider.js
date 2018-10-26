import React, { Component } from "react"
// import './AgeSlider.css'

export class AgeSlider extends Component {
  constructor(props){
    super(props)
    this.state = {value: 35};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div class="sliderContainer">
         <input type="range" min="1" max="130" class="slider" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}
