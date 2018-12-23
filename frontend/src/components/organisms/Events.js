import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, CardTitle, CardText, Row, Col, CardColumns } from 'reactstrap';
import {getEvents} from '../../services/Events/reducer';
import {startFetchEvents} from '../../services/Events/actions'


export class EventsRaw extends Component {

  componentDidMount(){
    this.props.startFetchEvents();
  }

  render() {
    const { events } = this.props;
    console.log(this.props);

    return (
      <div id="events">
        <p id="cssContent">Prohlédněte si akce, které pořádáme my sami, anebo naši parteři.
         Navštívit můžete různé workshopy, odborné přednášky, charitativní akce jako jsou koncerty, běhy pro zdraví,
         výtvarné akce podporující vzdělávání těžce nemocných dětí a podobně.
         Většina pořádaných akcí je zdarma, jiné jsou za poplatek. Rádi bychom upozornili, že žádná z akcí není
         samostatně výdělečná, veškeré vybrané peníze jdou na podporu nemocných, rozvoj zdravotních organizací,
         nákup zdravotních pomůcek a podobně. Největší množství akcí se koná přímo v Praze, ale nebojte,
         některé události pořádají naši partneři i na Moravě, jako třeba v Brně nebo Olomouci, ale i v jiných
         koutech republiky. Stačí mrknout níže.</p>
        <Row>
          <Col md="12">
            {events.map ( item => (
              <Row>
                <Card id="cssCardStories" body>
                  <CardTitle>{ item.Name }
                  </CardTitle>
                  <CardText>
                    <Row>
                      <Col sm="6">
                      <i class="material-icons">event</i>{' '}
                        { item.Date }
                        <i class="material-icons">schedule</i>
                        { item.Time }
                      </Col>
                      <Col sm="6" style={{textAlign: 'right'}}>
                      <i class="material-icons">place</i>
                      { item.City }, { item.Street } { item.StreetNum } {' '}
                      </Col>
                    </Row>
                    <Col xs="12">
                      <p id="cssStoriesParagraph">
                        { item.Description }
                      </p>
                    </Col>
                  </CardText>
                </Card>
              </Row>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const events = getEvents(state.showEvents);

  return {
    events,
  };
};

const mapDispatchToProps = {
  startFetchEvents
}

export const Events = connect(mapStateToProps, mapDispatchToProps)(EventsRaw);
