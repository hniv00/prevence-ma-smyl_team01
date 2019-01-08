import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import { getEvents } from '../../services/Events/reducer';
import { startFetchEvents } from '../../services/Events/actions';

export class EventsRaw extends Component {
  componentDidMount() {
    this.props.startFetchEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <div id="events">
        <p id="cssContent">
          Prohlédněte si akce, které pořádáme my sami, anebo naši parteři.
          Navštívit můžete různé workshopy, odborné přednášky, charitativní akce
          jako jsou koncerty, běhy pro zdraví, výtvarné akce podporující
          vzdělávání těžce nemocných dětí a podobně. Většina pořádaných akcí je
          zdarma, jiné jsou za poplatek. Rádi bychom upozornili, že žádná z akcí
          není samostatně výdělečná, veškeré vybrané peníze jdou na podporu
          nemocných, rozvoj zdravotních organizací, nákup zdravotních pomůcek a
          podobně. Největší množství akcí se koná přímo v Praze, ale nebojte,
          některé události pořádají naši partneři i na Moravě, jako třeba v Brně
          nebo Olomouci, ale i v jiných koutech republiky. Stačí mrknout níže.
        </p>
        <Row>
          <Col md="12">
            {events.map(item => (
              <Row>
                <Card id="cssCardStories" body>
                  <CardTitle id={item.IDEvent}>{item.Name}</CardTitle>
                  <CardText>
                    <Col>
                      <Row>
                        <Col sm="6">
                          <i className="material-icons">event</i>{' '}
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            {item.Date}{' '}
                          </span>
                          <i className="material-icons">schedule</i>
                          <span style={{ fontWeight: 'bold' }}>
                            {' '}
                            {item.Time}{' '}
                          </span>
                        </Col>
                        <Col sm="6" style={{ textAlign: 'right' }}>
                          <i className="material-icons">place</i>
                          {item.City}, {item.Street} {item.StreetNum}{' '}
                        </Col>
                      </Row>
                    </Col>
                    <Row>
                      <Col xs="12" md="8">
                        <Col xs="12">
                          <p id="cssStoriesParagraph">{item.Description}</p>
                        </Col>
                        <Col>Vstup: {item.EntryFee}</Col>
                        <Col>
                          Více info zde:{' '}
                          <a
                            href={`{ item.URL }`}
                            className="storiesCarousel"
                            style={{ color: '#EE4279' }}
                          >
                            {item.URL}
                          </a>
                        </Col>
                      </Col>
                      <Col xs="12" md="4">
                        <img
                          src={item.Photo}
                          className="imgEvent"
                          alt="obrázek akce"
                        />
                      </Col>
                    </Row>
                  </CardText>
                </Card>
              </Row>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const events = getEvents(state.showEvents);

  return {
    events,
  };
};

const mapDispatchToProps = {
  startFetchEvents,
};

export const Events = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsRaw);
