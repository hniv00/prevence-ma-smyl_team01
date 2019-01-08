import React, { Component } from 'react';
import { Col, Row, Button, UncontrolledTooltip } from 'reactstrap';
import { connect } from 'react-redux';
import {
  startCreateDiagnosis,
  changeDiagnosisState,
} from '../../services/AdminDiagnosis/actions';
import { startFetchExams } from '../../services/AdminExaminations/actions';

import { AdminNav } from '../organisms/AdminNav';
import { DiagNameContainer } from '../organisms/DiagNameContainer';

export class AdminDiagnosisRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitDiagnosis = this.submitDiagnosis.bind(this);
    this.diagNameRequired = this.diagNameRequired.bind(this);
    this.diagDescriptionRequired = this.diagDescriptionRequired.bind(this);
    this.diagRelatedExamsRequired = this.diagRelatedExamsRequired.bind(this);
  }

  componentDidMount() {
    this.props.startFetchExams();
    let options = [];
    for (const exam of this.props.rawExams) {
      options.push({ value: exam.ExamName, label: exam.ExamName });
    }
    this.setState({ options: options });
  }

  diagNameRequired() {
    let empt = this.props.diagName;
    if (empt === '') {
      alert('Vyplňte název diagnózy!');
      return false;
    }
    return true;
  }

  diagDescriptionRequired() {
    let empt = this.state.diagDescription;
    if (empt === '') {
      alert('Vyplňte popis diagnózy!');
      return false;
    }
    return true;
  }

  diagRelatedExamsRequired() {
    let empt = this.props.selectedExams;
    if (empt.length === 0) {
      alert('Vyplňte související vyšetření!');
      return false;
    }
    return true;
  }

  submitDiagnosis() {
    if (
      this.diagNameRequired() &&
      this.diagDescriptionRequired() &&
      this.diagRelatedExamsRequired()
    ) {
      this.props.startCreateDiagnosis();
      alert('Nová diagnóza byla vytvořena!');
    }
  }

  render() {
    return (
      <div>
        <div>
          <AdminNav />
          <div>
            <Row style={{ margin: '20px' }}>
              <Col />
              <Col xs="11">
                <h2 className="AdminWelcH2">Správa diagnóz</h2>
              </Col>
              <Col>
                <span
                  style={{ textDecoration: 'underline', color: 'blue' }}
                  href="#"
                  id="UncontrolledTooltipExample"
                >
                  <i className="material-icons" style={{ color: '#28A3B7' }}>
                    help
                  </i>
                </span>
                <UncontrolledTooltip
                  placement="right"
                  target="UncontrolledTooltipExample"
                >
                  Ve správě diagnóz můžete vytvářet či upravovat diagnózy.
                </UncontrolledTooltip>
              </Col>
            </Row>
            <DiagNameContainer
              onChange={this.props.changeDiagnosisState}
              nameValue={this.props.name}
              descriptionValue={this.props.description}
              selectedExams={this.props.selectedExams}
              options={this.state.options}
            />
            <Col>
              <a href="/admin-seznam-diagnoz">
                <Button color="info" size="md" style={{ margin: '10px' }}>
                  Zrušit
                </Button>
              </a>
              <Button
                color="info"
                size="md"
                style={{ margin: '10px' }}
                onClick={this.submitDiagnosis}
              >
                Uložit
              </Button>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedExams: state.createDiagnosis.examination,
  name: state.createDiagnosis.name,
  description: state.createDiagnosis.description,
  rawExams: state.adminExams.exams,
});

const mapDispatchToProps = {
  startCreateDiagnosis,
  changeDiagnosisState,
  startFetchExams,
};
export const AdminDiagnosis = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminDiagnosisRaw);
