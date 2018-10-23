import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {Container, Row, Col} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {Filter} from '../organisms/Filter';

import logo from '../../img/logo.jpg';

export class HelloPage extends Component {
  render() {
    return (
      <Container>
        <header>
           <Row>
             <Col>
               <TopNav></TopNav>
             </Col>
           </Row>
       </header>

       <section>
         <Row>
           <Col>
             <p>Nic to nebolí. Nic to nestojí. Může ti zachránit život. Prevence má smysl!
             Stačí pár kliknutí a hned budete vědět, na jakou preventivní prohlídku nezapomenout.</p>
           </Col>
         </Row>
         <Filter></Filter>
       </section>

       <section>
         <p>O projektu</p>
       </section>

       <footer></footer>

     </Container>
  );
  }
}
