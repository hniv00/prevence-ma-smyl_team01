import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, Col } from 'reactstrap';
import TextEllipsis from 'react-text-ellipsis';
import Slider from 'react-slick';
import { getStories } from '../../services/Stories/reducer';
import { startFetchStories } from '../../services/Stories/actions';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i
        className="material-icons"
        style={{ margin: '10px', color: '#026977' }}
      >
        arrow_forward_ios
      </i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i
        className="material-icons"
        style={{ margin: '10px', color: '#026977' }}
      >
        arrow_back_ios
      </i>
    </div>
  );
}

export class StoriesCarouselRaw extends Component {
  componentDidMount() {
    this.props.startFetchStories();
  }

  render() {
    const { stories } = this.props;

    const settings = {
      infinite: true,
      speed: 1500,
      autoplay: true,
      pauseOnFocus: true,
      arrows: true,
      slidesToShow: 3,
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
            dots: true,
          },
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="parallax-content" id="stories">
        <h4>Příběhy těch, kterým prevence zachránila život</h4>
        <Slider {...settings}>
          {stories.map(item => (
            <Col key={item.Name}>
              <Card id="cssCardStories" body>
                <CardTitle>
                  {item.Name}, {item.Age}
                </CardTitle>
                <CardText>
                  <p id="cssStoriesParagraph">
                    <TextEllipsis
                      lines={6}
                      tag={'p'}
                      ellipsisChars={'...'}
                      tagClass={'className'}
                      debounceTimeoutOnResize={200}
                      useJsOnly={true}
                    >
                      {item.Description}
                    </TextEllipsis>
                  </p>
                  <a
                    href="/pribehy"
                    className="storiesCarousel"
                    style={{ color: '#026977' }}
                  >
                    Celý příběh...
                  </a>
                </CardText>
              </Card>
            </Col>
          ))}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const stories = getStories(state.showStories);

  return {
    stories,
  };
};

const mapDispatchToProps = {
  startFetchStories,
};

export const StoriesCarousel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoriesCarouselRaw);
