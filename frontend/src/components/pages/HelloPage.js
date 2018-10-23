import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {Container, Row, Col} from 'reactstrap';

import {Heading} from '../atoms/Heading';
import {Filter} from '../organisms/Filter';
import {TopNav} from '../molecules/TopNav';

import logo from '../../img/logo.jpg';

export class HelloPage extends Component {
  render() {
    return (
      <Container>
        <header>
           <Row>
             <Col xs="8" sm="9" md="6"><img src={"logo"}
               width="300" height="150" /></Col>
             <Col xs="4" sm="3" md="6">
               <TopNav></TopNav>
             </Col>
           </Row>
       </header>

       <section>
       <Row>
         <Col>
           <Heading>Nic to nebolí. Nic to nestojí. Může ti zachránit život. Prevence má smysl!</Heading>
         </Col>
       </Row>
       <Row>
         <Col><p>Stačí pár kliknutí a hned budete vědět, na jakou preventivní prohlídku nezapomenout.</p></Col>
       </Row>
         <Filter></Filter>
       </section>

       <section>
         <About></About>
       </section>

       <footer></footer>

     </Container>
  );
  }
}
