import React, {Component} from 'react'
import {Parallax} from 'react-parallax';
import {Row, Col} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Filter} from '../organisms/Filter';
import {About} from '../organisms/About';
import {Motivation} from '../organisms/Motivation';
import {Partners} from '../organisms/Partners';
import {Footer} from '../organisms/Footer';

import logo from '../../img/logo_prevence.png';
import '../../parallax.css';

import image from '../../img/POZADI_PSD.png';

export class HelloPage extends Component {
  render() {
    return (<div>

        <Parallax strength={150} bgImage={image} bgWidth={'auto'}>
          <header style={{margin: '2%'}}>
            <Row>
              <Col xs="0" sm="0" md="3">
                <img src={logo} class="logoPic" alt="My logo" />
              </Col>
              <Col xs="12" sm="12" md="6">
                <h2 className="mainHeader" >Nebolí a nic nestojí. Může ti zachránit život. <span class="decor">Prevence má smysl.</span> Stačí pár kliknutí a hned víš, na jakou preventivní prohlídku nezapomenout.</h2>
              </Col>
              <Col xs="0" sm="0" md="3">
                <TopNav/>
              </Col>
            </Row>
            <Row>
              <Col xs="0" sm="2"/>
              <Col xs="12" sm="8">
                <Filter/>
              </Col>
              <Col xs="0" sm="2"/>
            </Row>
            </header>
        </Parallax>

        <Parallax>
            <About/>
        </Parallax>

        <Parallax>
          <section>
            <div className='parallax-content' id="stories">
              <h4>Příběhy</h4>
              <p id="cssContent">Příběhy za 5 minut 12. TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
          </section>
        </Parallax>

        <Parallax strength={400} bgImage={image} bgHeight={'1080px'} bgWidth={'1920px'}>
          <section>
            <div className='parallax-content' id="justCare">
              <Motivation/>
            </div>
          </section>
        </Parallax>

        <Parallax>
          <div className='parallax-content' id="stories">
            <Partners/>
          </div>
        </Parallax>

      <div class="footer">
            <Footer/>
      </div>

    </div>);
  }
}

// bgHeight={'1080px'} bgWidth={'1920px'}
