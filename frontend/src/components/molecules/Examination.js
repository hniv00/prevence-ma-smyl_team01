import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { Card, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';

import {ExaminationDetail} from '../atoms/ExaminationDetail';

class ExaminationRaw extends Component{
  data;
  constructor(props){
    super(props);
  }
  render(){
    this.data = this.props.examinations
    console.log(this.data);
    return (
      <div>
        <Row>
          {this.data.map( item => (
            <Col key={item.IDExamination} sm="12" md="6">
              <Card id="cssCardExamination" body>
                <CardTitle>{ item.ExamName }</CardTitle>
                <CardText>
                  <Row>
                    <Col style={{'text-align': 'left'}}>
                      {/* <p>
                      {item.badges.map( badge => <Fragment key={badge}><Badge id="cssBadge" color="secondary">{badge}</Badge>{' '}</Fragment> )}
                      <i class="material-icons" style={{color: "#F26D98", 'margin-left': '6px'}}>more_horiz</i>
                      </p> */}
                    </Col>
                    <Col>
                      <p style={{'text-align': 'right'}}><Badge id="cssBadgePeriodicity">{ item.Periodicity_ext }</Badge>{' '}
                      <i class="material-icons" style={{color: "#39B2C3", 'margin-left': '6px'}}>more_horiz</i>
                      </p>
                    </Col>
                  </Row>
                    { item.Description }
                </CardText>
                <ExaminationDetail/>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  examinations : state.filterState.examinations
});

export const Examination = connect(mapStateToProps)(ExaminationRaw);