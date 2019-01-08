import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Badge,
  Collapse,
} from 'reactstrap';

import { ExaminationDetail } from '../atoms/ExaminationDetail';
import { BadgesDetail } from '../atoms/BadgesDetail';

export class Examination extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <Card id="cssCardExamination" body>
        <CardTitle>{this.props.data.ExamName}</CardTitle>
        <CardText>
          <Row>
            <Col style={{ textAlign: 'left' }}>
              <CardText>
                <Row>
                  {this.props.data.Diagnosis.slice(1, 4).map((diag, i) => (
                    <BadgesDetail
                      style={{ marginRight: '5px', cursor: 'pointer' }}
                      key={i}
                      examination={this.props.data.title}
                      badge={diag.Name}
                    />
                  ))}
                  <Collapse isOpen={this.state.toggle}>
                    {this.props.data.Diagnosis.slice(
                      4,
                      this.props.data.Diagnosis.length,
                    ).map((diag, i) => (
                      <BadgesDetail
                        style={{ marginRight: '5px', cursor: 'pointer' }}
                        key={i}
                        examination={this.props.data.title}
                        badge={diag.Name}
                      />
                    ))}
                  </Collapse>
                  {this.props.data.Diagnosis.length - 3 > 0 && (
                    <i
                      class="material-icons"
                      style={{
                        color: '#F26D98',
                        marginLeft: '6px',
                        cursor: 'pointer',
                      }}
                      onClick={this.toggleCollapse}
                    >
                      more_horiz
                    </i>
                  )}
                </Row>
              </CardText>
            </Col>
            <Col>
              <p style={{ textAlign: 'right' }}>
                <Badge id="cssBadgePeriodicity" style={{ marginBottom: '4px' }}>
                  {this.props.data.Periodicity_ext}
                </Badge>{' '}
              </p>
            </Col>
          </Row>
          {this.props.data.Description}
        </CardText>
        <ExaminationDetail
          key={this.props.data.ExamName}
          title={this.props.data.ExamName}
          descr={this.props.data.Description}
          extPeriodicity={this.props.data.Periodicity_ext}
          basicPeriodicity={this.props.data.Periodicity_value}
          diags={this.props.data.Diagnosis}
        />
      </Card>
    );
  }
}
