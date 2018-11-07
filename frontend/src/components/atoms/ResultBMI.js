import React, { Component } from "react"

export class ResultBMI extends Component {
  constructor(props){
    super(props)
    this.state = {weight : 60,
                  height: 170,
                  value: 20};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <h6>Výsledné BMI</h6>
         <input class="inputBMI" value={this.state.weight} />
      </div>
    );
  }
}


/*
metoda parenta (např. BMICalculation)
render(
<Input value={this.state.height}/>
<Input value={this.state.weight}/>
<Button onClick = () => {
this.state.heigt * this.state.weight;
}
)
*/
