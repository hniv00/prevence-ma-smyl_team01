import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLifestyle } from '../../services/Filtration/actions';
import { Button, ButtonGroup } from 'reactstrap';

export class SmokerButtonRaw extends Component {
  constructor(props) {
    super(props);

    this.state = { rSelected: this.props.selected };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected }, () =>
      this.props.setLifestyle(this.state.rSelected),
    );
  }
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button
            outline
            color="info"
            size="sm"
            id="genderB"
            style={{ width: '70px' }}
            onClick={() => this.onRadioBtnClick(1)}
            active={this.state.rSelected === 1}
          >
            Kuřák
          </Button>
          <Button
            outline
            color="info"
            size="sm"
            id="genderB"
            style={{ width: '70px' }}
            onClick={() => this.onRadioBtnClick(2)}
            active={this.state.rSelected === 2}
          >
            Nekuřák
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedOption: state.filterState.lifestyle,
});

const mapDispatchToProps = {
  setLifestyle,
};

export const SmokerButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SmokerButtonRaw);
