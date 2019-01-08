import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHeight, setWeight } from '../../services/Filtration/actions';
import { Row, Col } from 'reactstrap';

export class BMISelectionRaw extends Component {
  constructor(props) {
    super(props);

    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  handleChangeWeight(event) {
    this.props.setWeight(event.target.value);
    this.calculateBMI();
  }

  handleChangeHeight(event) {
    this.props.setHeight(event.target.value);
    this.calculateBMI();
  }

  calculateBMI() {
    var height = Number(this.props.height);
    var weight = Number(this.props.weight);

    var resultBMI = Math.round((weight / Math.pow(height, 2)) * 100000) / 10;
    return resultBMI;
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="0" sm="12" md="4">
            <h6>Zadej výšku</h6>
            <input
              type="number"
              min="120"
              max="260"
              className="inputBMI"
              value={this.props.height}
              onChange={this.handleChangeHeight}
            />
          </Col>
          <Col xs="0" sm="12" md="4">
            <h6>Zadej váhu</h6>
            <input
              type="number"
              min="40"
              max="260"
              className="inputBMI"
              value={this.props.weight}
              onChange={this.handleChangeWeight}
            />
          </Col>
          <Col xs="0" sm="12" md="4">
            <h6>Výsledné BMI</h6>
            <input className="inputBMI" value={this.calculateBMI()} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  height: state.filterState.height,
  weight: state.filterState.weight,
});

const mapDispatchToProps = {
  setHeight,
  setWeight,
};

export const BMISelection = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BMISelectionRaw);
