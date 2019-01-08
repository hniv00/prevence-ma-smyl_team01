import React, { Component } from 'react';
import { Jumbotron, Row } from 'reactstrap';

import { AdminShowBasic } from '../molecules/AdminShowBasic';

export class AdminBasicFilterContainer extends Component {
  render() {
    return (
      <Jumbotron id="AdminExamContainer">
        <Row>
          <AdminShowBasic
            onChange={this.props.changeExaminationState}
            agefrombasicValue={this.props.agefrombasicValue}
            ageuntilbasicValue={this.props.ageuntilbasicValue}
          />
        </Row>
      </Jumbotron>
    );
  }
}
