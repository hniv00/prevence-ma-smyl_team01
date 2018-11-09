import React, { Component } from 'react';
import { Collapse, Row, Col, Container } from 'reactstrap';
import {AdvancedSearch} from '../molecules/AdvancedSearch';

export class ShowAdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false,
                   text: 'Zobrazit pokročilé vyhledávání',
                 };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  //  this.setState({ text: 'Skrýt pokročilé vyhledávání'})
  }

  // How to do it so that when the advanced search is opened, text above is "Skrýt pokročilé vyhledávání"

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" style={{ 'margin-top': '2rem'}}>
            <a href="#filtration" onClick={this.toggle} style={{ color: '#17a2b8', 'text-align': 'center' }}>{this.state.text}</a>
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
