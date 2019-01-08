import React, { Component } from 'react';
import { Collapse, Row, Col, Container } from 'reactstrap';
import { AdvancedSearch } from '../molecules/AdvancedSearch';

export class ShowAdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, text: 'Zobrazit pokročilé vyhledávání' };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
    this.setState({
      text:
        this.state.collapse === true
          ? 'Zobrazit pokročilé vyhledávání'
          : 'Skrýt pokročilé vyhledávání',
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" style={{ marginTop: '2rem' }}>
            <a
              href="#filtration"
              onClick={this.toggle}
              style={{ color: '#17a2b8', textAlign: 'center' }}
            >
              {this.state.text}
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Collapse isOpen={this.state.collapse}>
              <AdvancedSearch />
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}
