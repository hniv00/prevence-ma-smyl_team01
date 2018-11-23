import React from 'react';
import Slider from "react-slick";
import './Carousel.css';

/* MyCarousel should be used as a template for carousels.. But did not work */

export const MyCarousel = props => {
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

  /* Custom setting */
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
    <Slider {...settings}/>
  );
}
