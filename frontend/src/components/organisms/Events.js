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
      <div id="stories">
        <p id="cssContent">TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <Row>
          <Col md="6">
            {events.map ( item => (
              <Row>
                <Card id="cssCardStories" body>
                  <CardTitle>{ item.Name }</CardTitle>
                  <CardText>
                      <p id="cssStoriesParagraph">
                        { item.Date }, { item.Time }
                      </p>
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
