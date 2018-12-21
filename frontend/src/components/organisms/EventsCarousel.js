import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

import {StoryButton} from '../atoms/StoryButton';

import Slider from "react-slick";
import {getEvents} from '../../services/Events/reducer';
import {startFetchEvents} from '../../services/Events/actions'

/* Custom arrows */
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="material-icons" style={{'margin': '10px',color: '#026977'}}>arrow_forward_ios</i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="material-icons" style={{'margin': '10px', color: '#026977'}}>arrow_back_ios</i>
    </div>
  );
}

export class EventsCarouselRaw extends Component {

  componentDidMount(){
    this.props.startFetchEvents();
  }

  render() {
    const { events } = this.props;
    console.log(this.props);

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          pauseOnFocus: true,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

    return (
      <div className='parallax-content' id="events">
        <h4>Akce</h4>
        <h5>Akce, které se v budoucnu budou konat</h5>
      <p id="cssContent">TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <Slider {...settings}>
          {events.map ( item => (
            <Col>
              <Card id="cssCardStories" body>
                <CardTitle>{ item.Name }</CardTitle>
                <CardText>
                    <p id="cssStoriesParagraph">
                      { item.Date }, { item.Time }
                    </p>
                    <a href="/akce" className="storiesCarousel">Popis akce...</a>
                </CardText>
              </Card>
            </Col>
          ))}

        </Slider>
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

export const EventsCarousel = connect(mapStateToProps, mapDispatchToProps)(EventsCarouselRaw);
