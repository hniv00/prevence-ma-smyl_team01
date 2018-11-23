import React, { Component } from "react";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Slider from "react-slick";
import '../atoms/Carousel.css';

// MyCarousel should be used like an atom instead of Slider
import { MyCarousel } from '../atoms/MyCarousel';

const data = [
  { src: './images/loono_logo.png', title: 'Loono', alt: 'Loono logo'},
  { src: './images/stk_logo.png', title: 'STK pro chlapy', alt: 'STK pro chlapy logo'},
  { src: './images/avon_logo.jpg', title: 'Avon', alt: 'Avon logo'},
  { src: './images/rucenaprsa_logo.jpg', title: 'Ruce na prsa', alt: 'Ruce na prsa logo'},
  { src: './images/proti_logo.png', title: 'S dětmi proti nadváze', alt: 'S dětmi proti nadváze logo'},
]

/* Custom arrows */
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="material-icons" style={{'margin': '10px',color: '#026977'}}>arrow_forward_ios</i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="material-icons" style={{'margin': '10px', color: '#026977'}}>arrow_back_ios</i>
    </div>
  );
}


export class PartnersCarousel extends Component {
  render() {

    const settings = {
    //  dots: true,
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
      <div>
        <h4> Partneské projekty </h4>
        <Slider {...settings}>
          {data.map ( item => (
            <Col>
              <Card>
                  <CardImg key={item} top width="240px" src={item.src} alt={item.alt} />
                <CardBody>
                  <CardTitle key={item} style={{color: 'black'}}>{item.title}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Slider>
      </div>

    );
  }
}

/* this was used before

{data.map ( item => (
  <Col>
    <img key={item} width="240px" style={{margin: "10px"}} src={item.src} alt={item.alt} />
    <span><p style={{'text-align': 'center'}}>{item.title}</p></span>
  </Col>
))}
*/
