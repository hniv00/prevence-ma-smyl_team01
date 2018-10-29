import React, { Component } from "react"
import './AgeSlider.css'

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
         <input type="range" min="18" max="120" class="slider" value={this.state.value} onChange={this.handleChange}/>
         <input style={{width: '50px'}} type="number" min="18" max="120" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}
