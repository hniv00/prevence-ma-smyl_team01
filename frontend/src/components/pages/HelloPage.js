import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {Container, Row, Col} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {Filter} from '../organisms/Filter';
import {ExaminationList} from '../organisms/ExaminationList';
import {About} from '../organisms/About';
import {Footer} from '../organisms/Footer';

import logo from '../../img/logo.jpg';

export class HelloPage extends Component {
  render() {
    return (<div>

      <header>
        <Row>
          <Col>
            <TopNav></TopNav>
          </Col>
        </Row>
      </header>

      <Container>


        <Parallax blur={10} strength={200}>
          <div style={{ height: '50px' }} />
          <section>
            <Row>
              <Col xs="0" sm="2"></Col>
              <Col xs="12" sm="8">
                <h4>Nic to nebolí. Nic to nestojí. Může ti zachránit život. Prevence má smysl! Stačí pár kliknutí a hned budete vědět, na jakou preventivní prohlídku nezapomenout.</h4>
              </Col>
              <Col xs="0" sm="2"></Col>
            </Row>
            <Row>
              <Col xs="0" sm="2"></Col>
              <Col xs="12" sm="8">
                <Filter></Filter>
              </Col>
              <Col xs="0" sm="2"></Col>
            </Row>
          </section>

          <Background className="custom-bg" >
            <img src="http://cdn.strategyonline.ca/wp/wp-content/uploads/2018/08/Cossette-Health1.jpg?93ff1b" alt="lp-image"
            style = {{width: '1200px'}}/>
          </Background>
          <div style={{ height: '50px' }} />
        </Parallax>

        <section>
        <div style={{ height: '50px' }} />
          <ExaminationList></ExaminationList>
          <div style={{ height: '50px' }} />
        </section>

        <section>
          <About></About>
          <div style={{ height: '50px' }} />
        </section>

        <section>
          <h5>Příběhy</h5>
          <p>Příběhy za 5 minut 12. TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </section>
        <div style={{ height: '50px' }} />
      </Container>

      <div class="footer">
            <Footer></Footer>
      </div>

    </div>);
  }
}
