import React, { Component } from 'react';
import { Button, ButtonGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { setGender } from '../../services/AdminExaminations/actions';

const data = [
  { id: 1, gender: 'Žena', shorcut: 'F' },
  { id: 2, gender: 'Muž', shorcut: 'M' },
  { id: 3, gender: 'Unisex', shorcut: 'U' },
];

export class AdminGenderButtonRaw extends Component {
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
        <div>
          <Label for="exampleText">Pohlaví</Label>
        </div>
        <div>
          <ButtonGroup>
            {data.map(item => (
              <Button
                key={item.id}
                outline
                color="info"
                size="sm"
                id="genderB"
                style={{ width: '70px' }}
                onClick={() => this.onRadioBtnClick(item.id)}
                active={rSelected === item.id}
              >
                {item.gender}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.adminExams.gender,
});

const mapDispatchToProps = {
  setGender,
};

export const AdminGenderButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminGenderButtonRaw);
