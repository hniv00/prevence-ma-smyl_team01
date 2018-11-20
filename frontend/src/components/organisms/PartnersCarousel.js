import React, { Component } from "react";
import './Carousel.css';
import {Container} from 'reactstrap';

const data = [
  { src: './images/loono_logo.png', title: 'Loono', alt: 'Loono logo'},
  { src: './images/stk_logo.png', title: 'STK pro chlapy', alt: 'STK pro chlapy logo'},
  { src: './images/avon_logo.jpg', title: 'Avon', alt: 'Avon logo'},
  { src: './images/rucenaprsa_logo.jpg', title: 'Ruce na prsa', alt: 'Ruce na prsa logo'},
  { src: './images/stk_logo.png', title: 'STK pro chlapy', alt: 'STK pro chlapy logo'},
  { src: './images/avon_logo.jpg', title: 'Avon', alt: 'Avon logo'},
  { src: './images/rucenaprsa_logo.jpg', title: 'Ruce na prsa', alt: 'Ruce na prsa logo'}
]

export class PartnersCarousel extends Component {
  render() {
    return (
      <Container style={{height: '400px'}}>
      <div class = 'demo-container' >
        <div class = 'carousel' >

          <input checked = 'checked'
          class = 'carousel__activator'
          id = 'carousel-slide-activator-1'
          name = 'carousel'
          type = 'radio' / >
          <input class = 'carousel__activator'
          id = 'carousel-slide-activator-2'
          name = 'carousel'
          type = 'radio' / >
          <input class = 'carousel__activator'
          id = 'carousel-slide-activator-3'
          name = 'carousel'
          type = 'radio' / >

          <div class = 'carousel__controls' >
            <label class = 'carousel__control carousel__control--forward'
            for = 'carousel-slide-activator-2' >
              <i class="material-icons">chevron_right</i>
            </label>
          </div>

          <div class = 'carousel__controls' >
            <label class = 'carousel__control carousel__control--backward'
            for = 'carousel-slide-activator-1' >
              <i class="material-icons">chevron_left</i>
            </label>
            <label class = 'carousel__control carousel__control--forward'
            for = 'carousel-slide-activator-3' >
              <i class="material-icons">chevron_right</i>
            </label>
          </div>

          <div class = 'carousel__controls' >
            <label class = 'carousel__control carousel__control--backward'
            for = 'carousel-slide-activator-2' >
              <i class="material-icons">chevron_left</i>
            </label>
          </div>



          <div class = 'carousel__screen' >
            <div class = 'carousel__track' >
              {data.map ( item => (
                <div class = 'carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3' >
                  <div class = 'demo-content' >
                    <img key={item} top width="318px" src={item.src} alt={item.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
      </Container>
    );
  }
}
