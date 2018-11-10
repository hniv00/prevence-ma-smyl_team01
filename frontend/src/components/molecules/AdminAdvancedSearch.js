import React, { Component } from "react"
import {Row, Col} from 'reactstrap';
import {BasicFilterContainer} from '../organisms/BasicFilterContainer';

export class AdminAdvancedSearch extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col><BasicFilterContainer></BasicFilterContainer></Col>
        </Row>
      </div>
    );
  }
}
