import React, { Component } from 'react';
import { Col, Row, Button, UncontrolledTooltip } from 'reactstrap';
import { connect } from 'react-redux';
import {
  startCreateEvent,
  changeEventState,
} from '../../services/AdminEvents/actions';

import { AdminNav } from '../organisms/AdminNav';
import { EventContainer } from '../organisms/EventContainer';

export class AdminEventRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitEvent = this.submitEvent.bind(this);
    this.eventNameDescrRequired = this.eventNameDescrRequired.bind(this);
    this.datetimeRequired = this.datetimeRequired.bind(this);
    this.placeRequired = this.placeRequired.bind(this);
    this.priceRequired = this.priceRequired.bind(this);
  }

  eventNameDescrRequired() {
    let nameEmpt = this.props.name;
    let descrEmpt = this.props.description;
    if (nameEmpt === '' || descrEmpt === '') {
      alert('Název i popis akce musí být vyplněny!');
      return false;
    }
    return true;
  }

  datetimeRequired() {
    let dateEmpt = this.props.date;
    let timeEmpt = this.props.time;
    if (dateEmpt === '' || timeEmpt === '') {
      alert('Vyplňte datum a čas akce!');
      return false;
    }
    return true;
  }

  placeRequired() {
    let cityEmpt = this.props.city;
    let streetEmpt = this.props.street;
    let numEmpt = this.props.num;
    if (cityEmpt === '' || streetEmpt === '' || numEmpt === '') {
      alert(
        'Vyplňte místo konání akce! Povinná pole jsou: město, ulice a číslo popisné.',
      );
      return false;
    }
    return true;
  }

  priceRequired() {
    let empt = this.props.price;
    if (empt === null || empt === undefined || empt.length === 0) {
      alert('Vyplňte typ vstupného na akci!');
      return false;
    }
    return true;
  }

  submitEvent() {
    if (
      this.eventNameDescrRequired() &&
      this.datetimeRequired() &&
      this.placeRequired() &&
      this.priceRequired()
    ) {
      this.props.startCreateEvent();
      alert('Nová akce byla vytvořena!');
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
                <h2 className="AdminWelcH2">Správa akcí</h2>
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
                  Ve správě akcí můžete vytvářet či upravovat akce týkající se
                  prevence a zdraví.
                </UncontrolledTooltip>
              </Col>
            </Row>
            <EventContainer
              onChange={this.props.changeEventState}
              nameValue={this.props.name}
              descriptionValue={this.props.description}
              urlValue={this.props.url}
              streetValue={this.props.street}
              numValue={this.props.num}
              cityValue={this.props.city}
              zipValue={this.props.zip}
              dateValue={this.props.date}
              timeValue={this.props.time}
              priceValue={this.props.price}
            />
            <Col>
              <a href="/admin-seznam-akci">
                <Button color="info" size="md" style={{ margin: '10px' }}>
                  Zrušit
                </Button>
              </a>
              <Button
                color="info"
                size="md"
                style={{ margin: '10px' }}
                onClick={this.submitEvent}
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
  name: state.createEvent.name,
  description: state.createEvent.description,
  url: state.createEvent.url,
  street: state.createEvent.street,
  num: state.createEvent.num,
  city: state.createEvent.city,
  zip: state.createEvent.zip,
  date: state.createEvent.date,
  time: state.createEvent.time,
  price: state.createEvent.price,
});

const mapDispatchToProps = {
  startCreateEvent,
  changeEventState,
};
export const AdminEvent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminEventRaw);
