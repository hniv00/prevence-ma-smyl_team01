import React, { Component } from 'react';
import { Collapse, Row, Col, Container } from 'reactstrap';
import {AdminAdvanced} from '../molecules/AdminAdvanced';

export class AdminShowAdvanced extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false,
                   text: 'Použít pokročilé filtrování',
                 };
  }


  toggle() {
    this.setState({ collapse: !this.state.collapse });
    this.setState({ text: this.state.collapse === true ? 'Použít pokročilé filtrování' : 'Nepoužít pokročilé filtrování' });
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
              <AdminAdvanced></AdminAdvanced>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}
