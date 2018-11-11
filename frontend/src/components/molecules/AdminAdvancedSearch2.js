import React, { Component } from "react"
import {Row, Col} from 'reactstrap';
import {AdvancedFilterContainer} from '../organisms/AdvancedFilterContainer';

export class AdminAdvancedSearch2 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col><AdvancedFilterContainer></AdvancedFilterContainer></Col>
        </Row>
      </div>
    );
  }
}
