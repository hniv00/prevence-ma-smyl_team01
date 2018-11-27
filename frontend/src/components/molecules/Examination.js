import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { Card, CardTitle, CardText, Row, Col, Badge, Modal, Button, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

import {ExaminationDetail} from '../atoms/ExaminationDetail';
import {BadgesDetail} from '../atoms/BadgesDetail';

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
                      <CardText>
                        <Row>
                          {/* There will never be item.badges, rename the prop to returned data */}
                          {item.badges.map((badge, i) => (<BadgesDetail style={{'margin-right': '5px', 'cursor' : 'pointer'}} key={i} examination={item.title} badge={badge}/>))}
                          <i class="material-icons" style={{ color: "#F26D98", 'margin-left': '6px' }}>more_horiz</i>
                        </Row>
                      </CardText>
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