import React, { Component } from "react"
import {Row, Col} from 'reactstrap';
import {AdminAdvancedFilterContainer} from '../organisms/AdminAdvancedFilterContainer';

export class AdminAdvanced extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col><AdminAdvancedFilterContainer/></Col>
        </Row>
      </div>
    );
  }
}
