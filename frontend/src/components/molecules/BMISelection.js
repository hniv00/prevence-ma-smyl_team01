import React, { Component } from "react"
import {Row, Col} from 'reactstrap';

export class BMISelection extends Component {
  constructor(props){
    super(props)
    this.state = {weight : 60,
                  height: 170,
                  result: 20.5}

    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  handleChangeWeight(event){
    this.setState({weight: event.target.value})
    this.calculateBMI();
  }

  handleChangeHeight(event){
    this.setState({height: event.target.value})
    this.calculateBMI();
  }

  calculateBMI() {
    var height = Number(this.state.height);
    var weight = Number(this.state.weight);

    var resultBMI = Math.round(weight / Math.pow(height, 2) * 100000) / 10;
    this.setState({result: resultBMI});
/*    if (resultBMI < 18.5)
          "Underweight";
      else if (resultBMI >= 18.5 && resultBMI <= 25)
          "Normal";
      else if (resultBMI >= 25 && resultBMI <= 30)
          "Obese";
      else if (resultBMI > 30)
          "Overweight";        */
  }


  render() {
    return (
      <div>
      <Row>
        <Col xs="0" sm="12" md="4">
          <h6>Zadej výšku</h6>
          <input type="number" min="120" max="260" class="inputBMI" value={this.state.height} onChange={this.handleChangeHeight}/>
        </Col>
        <Col xs="0" sm="12" md="4">
          <h6>Zadej váhu</h6>
          <input type="number" min="40" max="260" class="inputBMI" value={this.state.weight} onChange={this.handleChangeWeight}/>
        </Col>
        <Col xs="0" sm="12" md="4">
          <h6>Výsledné BMI</h6>
          <input class="inputBMI" value={this.state.result} />
        </Col>
      </Row>
      </div>
    );
  }
}
