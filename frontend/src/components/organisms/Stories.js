import React, {Component} from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

import Slider from "react-slick";

const data = [{
    id: 1,
    name: 'Petr',
    age: '23',
    description: `Po procházce v lese jsem se pořádně neprohlédl.
    O několik dní později jsem si na těle našel zakouslé klíště, okolo
    místa vkusu zarudlé místo. Ihned jsem jel k lékaři, ale nepomohlo to.`
}, {
    id: 2,
    name: 'Daniela',
    age: '40',
    description: `Kamarádka mě přemluvila, abych s ní šla na Den prevence.
    Jen díky tomu mi tehdy lékaři včas odhalili zhoubný nádor.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}, {
    id: 3,
    name: 'Jiří',
    age: '53',
    description: `Na preventivní prohlídky chodím pravidelně, když mě začaly trápit
    problémy s častým močením, ihned jsem šel za svým urologem.
    Udělal jsem dobře. I když jsem nakonec nebyl nijak vážně nemocný, člověk nikdy neví,
    co se může stát a jaká choroba ho přemůže. Lepší je prevence.`
}, {
    id: 4,
    name: 'Dominika',
    age: '63',
    description: `Nahmatala jsem si bulku v podpaží a ihned jsem šla k lékaři.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}, {
    id: 5,
    name: 'Roman',
    age: '20',
    description: `Po procházce v lese jsem se pořádně neprohlédl.
    O několik dní později jsem si na těle našel zakouslé klíště, okolo
    místa vkusu zarudlé místo. Ihned jsem jel k lékaři, ale nepomohlo to.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}]

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

export class Stories extends Component {
  render() {

        const settings = {
          dots: true,
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
      <div className='parallax-content' id="stories">
        <h4>Příběhy "Za 5min 12"</h4>
        <p id="cssContent">Přečtěte si příběhy těch, kterým prevence zachránila život. A že to někdy bylo opravdu takříkajíc "za 5 12". TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <Slider {...settings}>
          {data.map ( item => (
            <Col>
              <Card id="cssCardStories" body>
                <CardTitle>{ item.name }, { item.age }</CardTitle>
                <CardText>
                    <p id="cssStoriesParagraph">{item.description}</p>
                </CardText>
              </Card>
            </Col>
          ))}

        </Slider>
      </div>
    );
  }
};
