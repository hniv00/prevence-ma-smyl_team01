import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';

import {Heading} from '../atoms/Heading';
import {Filter} from '../organisms/Filter';
import {TopNav} from '../molecules/TopNav';
import {Container, Row, Col, Button} from 'reactstrap';

export class HelloPage extends Component {
  render() {
    return (

      <Container>
       <Row>
         <Col xs="6" sm="9">logo TBD</Col>
         <Col xs="6" sm="3">
           <TopNav/>
         </Col>
       </Row>
       <Row>
         <Col>
           <Heading>Nic to nebolí. Nic to nestojí. Může ti zachránit život. Prevence má smysl!</Heading>
         </Col>
       </Row>
       <Row>
         <Col><p>Stačí pár kliknutí a hned budete vědět, na jakou preventivní prohlídku nezapomenout.</p></Col>
       </Row>
       <Filter></Filter>
     </Container>
  );
  }
}
