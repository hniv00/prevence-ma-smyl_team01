import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { Examination } from '../molecules/Examination';

export class ExaminationListRaw extends Component {
  render() {
    return (
      <div style={{ margin: '5%' }}>
        <h4>Seznam vyhledaných preventivních vyšetření</h4>
        <div>
          <Row>
            {this.props.examinations.map((item, i) => (
              <Col sm="12" md="6">
                <Examination key={i} data={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  examinations: state.filterState.examinations,
});

export const ExaminationList = connect(mapStateToProps)(ExaminationListRaw);
