import React, { Component } from 'react';
import { Collapse, Row, Col, Container } from 'reactstrap';
import {AdminBasic} from '../molecules/AdminBasic';

export class AdminShowBasic extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false,
                   text: 'Použít základní filtrování',
                 };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
    this.setState({ text: this.state.collapse === true ? 'Použít základní filtrování' : 'Nepoužít základní filtrování' });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" style={{'text-align': 'left'}}>
            <a href="#filtration" onClick={this.toggle} style={{ color: '#17a2b8', 'text-align': 'center' }}>{this.state.text}</a>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Collapse isOpen={this.state.collapse}>
              <AdminBasic></AdminBasic>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}
