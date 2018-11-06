import React, { Component } from 'react';
import { Collapse, Row, Col, Container } from 'reactstrap';
import {AdvancedSearch} from '../molecules/AdvancedSearch';

export class ShowAdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  // How to do it so that when the advanced search is opened, text above is "Skrýt pokročilé vyhledávání"

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" style={{ 'margin-top': '2rem'}}>
            <a href="#filtration" onClick={this.toggle} style={{ color: '#17a2b8', 'text-align': 'center' }}>Zobrazit pokročilé vyhledávání</a>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Collapse isOpen={this.state.collapse}>
              <AdvancedSearch></AdvancedSearch>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}
