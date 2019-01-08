import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { setGender } from '../../services/Filtration/actions';

const data = [{ id: 1, gender: 'Žena' }, { id: 2, gender: 'Muž' }];

export class GenderButtonRaw extends Component {
  constructor(props) {
    super(props);

    this.state = { rSelected: this.props.selected };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected }, () =>
      this.props.setGender(this.state.rSelected),
    );
  }

  render() {
    const { rSelected } = this.state;
    return (
      <div>
        <ButtonGroup>
          {data.map(item => (
            <Button
              key={item.id}
              outline
              color="info"
              size="sm"
              id="genderB"
              style={{ width: '50px' }}
              onClick={() => this.onRadioBtnClick(item.id)}
              active={rSelected === item.id}
            >
              {item.gender}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.filterState.gender,
});

const mapDispatchToProps = {
  setGender,
};

export const GenderButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenderButtonRaw);
