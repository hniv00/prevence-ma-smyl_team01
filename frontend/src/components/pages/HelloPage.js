import React, {Component} from 'react'
import {Parallax} from 'react-parallax';
import {Row, Col} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Filter} from '../organisms/Filter';
import {ExaminationList} from '../organisms/ExaminationList';
import {About} from '../organisms/About';
import {Footer} from '../organisms/Footer';

import logo from '../../img/logo_prevence.png';
import '../../parallax.css';

import image from '../../img/header_pic_2.jpg';

export class HelloPage extends Component {
  render() {
    return (<div>

        <Parallax strength={400} bgImage={image} bgHeight={'1080px'} bgWidth={'1900px'}>
          <header style={{margin: '2%'}}>
            <Row>
              <Col xs="0" sm="0" md="3">
                <img src={logo} style = {{width: '100%', 'max-width': '200px', margin: '15px 15px'}} alt="My logo" />
              </Col>
              <Col xs="12" sm="12" md="6">
                <h3 className="mainHeader" >Nebolí a nic nestojí. Může ti zachránit život. <span class="decor">Prevence má smysl.</span> Stačí pár kliknutí a hned víš, na jakou preventivní prohlídku nezapomenout.</h3>
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
          <ExaminationList/>
        </Parallax>

        <Parallax>
            <About/>
        </Parallax>

        <Parallax>
          <section>
            <div className='parallax-content' id="stories">
              <h5>Příběhy</h5>
              <p id="cssTextStory">Příběhy za 5 minut 12. TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
          </section>
        </Parallax>

      <div class="footer">
            <Footer/>
      </div>

    </div>);
  }
}
