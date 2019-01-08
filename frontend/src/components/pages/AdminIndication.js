import React, { Component } from 'react';
import { Col, Row, Button, UncontrolledTooltip } from 'reactstrap';
import { connect } from 'react-redux';
import {
  startCreateIndication,
  changeIndicationState,
} from '../../services/AdminIndication/actions';

import { AdminNav } from '../organisms/AdminNav';
import { IndicationNameContainer } from '../organisms/IndicationNameContainer';

export class AdminIndicationRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitIndication = this.submitIndication.bind(this);
    this.indicationNameRequired = this.indicationNameRequired.bind(this);
    this.indicationTypeRequired = this.indicationTypeRequired.bind(this);
  }

  indicationNameRequired() {
    let empt = this.props.name;
    if (empt === '') {
      alert('Vyplňte název indikace!');
      return false;
    }
    return true;
  }

  indicationTypeRequired() {
    let empt = this.props.type;
    if (empt === null || empt === undefined || empt.length === 0) {
      alert('Vyplňte typ indikace!');
      return false;
    }
    return true;
  }

  submitIndication() {
    if (this.indicationNameRequired() && this.indicationTypeRequired()) {
      this.props.startCreateIndication();
      alert('Nová indikace byla vytvořena!');
    }
  }

  render() {
    return (
      <div>
        <div>
          <AdminNav />
          <div>
            <Row style={{ margin: '20px' }}>
              <Col />
              <Col xs="11">
                <h2 className="AdminWelcH2">Správa indikací</h2>
              </Col>
              <Col>
                <span
                  style={{ textDecoration: 'underline', color: 'blue' }}
                  href="#"
                  id="UncontrolledTooltipExample"
                >
                  <i className="material-icons" style={{ color: '#28A3B7' }}>
                    help
                  </i>
                </span>
                <UncontrolledTooltip
                  placement="right"
                  target="UncontrolledTooltipExample"
                >
                  Ve správě indikací můžete vytvářet či upravovat indikace.
                </UncontrolledTooltip>
              </Col>
            </Row>
            <IndicationNameContainer
              onChange={this.props.changeIndicationState}
              nameValue={this.props.name}
              typeValue={this.props.type}
            />
            <Col>
              <a href="/admin-seznam-indikaci">
                <Button color="info" size="md" style={{ margin: '10px' }}>
                  Zrušit
                </Button>
              </a>{' '}
              <Button
                color="info"
                size="md"
                style={{ margin: '10px' }}
                onClick={this.submitIndication}
              >
                Uložit
              </Button>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.createIndication.name,
  type: state.createIndication.type,
});

const mapDispatchToProps = {
  startCreateIndication,
  changeIndicationState,
};
export const AdminIndication = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminIndicationRaw);
