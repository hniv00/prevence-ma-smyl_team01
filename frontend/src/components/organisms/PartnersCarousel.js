import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import Slider from 'react-slick';
import '../atoms/Carousel.css';
import { startFetchFilteredPartners } from '../../services/Partners/actions';

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

export class PartnersCarouselRaw extends Component {
  componentDidMount() {
    this.props.startFetchFilteredPartners();
  }

  render() {
    this.data = this.props.partners;

    const settings = {
      infinite: true,
      speed: 1500,
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
      <div>
        <h4> Partneské projekty </h4>
        <Slider {...settings}>
          {this.data.map(item => (
            <Col key={item.Name}>
              <Card id="cssCardPartners">
                <a href={`/partneri/#${item.IDEvent}`}>
                  <CardImg
                    key={item.LogoAlt}
                    top
                    width="240px"
                    src={item.Logo}
                    alt={item.LogoAlt}
                  />
                </a>
                <CardBody>
                  <CardTitle key={item.IDEvent} style={{ color: 'black' }}>
                    {item.Name}
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  partners: state.filterPartner.partners,
});

const mapDispatchToProps = {
  startFetchFilteredPartners,
};

export const PartnersCarousel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PartnersCarouselRaw);
