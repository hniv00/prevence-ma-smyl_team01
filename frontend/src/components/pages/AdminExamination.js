import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import { connect } from 'react-redux';
import {
  startCreateExamination,
  changeExaminationState,
} from '../../services/AdminExaminations/actions';
import { startFetchDiagnosis } from '../../services/AdminDiagnosis/actions';

import { AdminNav } from '../organisms/AdminNav';
import { ExamNameContainer } from '../organisms/ExamNameContainer';
import { GenderPeriodicityContainer } from '../organisms/GenderPeriodicityContainer';
import { AdminBasicFilterContainer } from '../organisms/AdminBasicFilterContainer';
import { AdminAdvancedFilterContainer } from '../organisms/AdminAdvancedFilterContainer';

export class AdminExaminationRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitExam = this.submitExam.bind(this);
    this.examNameRequired = this.examNameRequired.bind(this);
    this.examDescriptionRequired = this.examDescriptionRequired.bind(this);
    this.examGenderRequired = this.examGenderRequired.bind(this);
    this.examPeriodicityBasicRequired = this.examPeriodicityBasicRequired.bind(
      this,
    );
    this.examRelatedDiagsRequired = this.examRelatedDiagsRequired.bind(this);
  }

  componentDidMount() {
    this.props.startFetchDiagnosis();
    let options = [];
    for (const diagnosis of this.props.rawDiagnosis) {
      options.push({ value: diagnosis.Name, label: diagnosis.ExamName });
    }
    this.setState({ options: options });
  }

  examNameRequired() {
    let empt = this.props.examName;
    if (empt === '') {
      alert('Vyplňte název vyšetření!');
      return false;
    }
    return true;
  }

  examDescriptionRequired() {
    let empt = this.props.examDescription;
    if (empt === '') {
      alert('Vyplňte popis vyšetření!');
      return false;
    }
    return true;
  }

  examGenderRequired() {
    let empt = this.props.gender;
    if (empt === '') {
      alert('Vyberte pohlaví!');
      return false;
    }
    return true;
  }

  examPeriodicityBasicRequired() {
    let empt = this.props.periodicityBasic;
    if (empt.length === 0) {
      alert('Zvolte základní periodicitu!');
      return false;
    }
    return true;
  }

  examRelatedDiagsRequired() {
    let empt = this.props.selectedDiags;
    if (empt === null || empt === undefined) {
      alert('Zvolte alespoň jednu související diagnózu!');
      return false;
    }
    return true;
  }

  submitExam() {
    if (
      this.examNameRequired() &&
      this.examDescriptionRequired() &&
      this.examRelatedDiagsRequired() &&
      this.examGenderRequired() &&
      this.examPeriodicityBasicRequired()
    ) {
      this.props.startCreateExam();
      alert('Nové vyšetření bylo vytvořeno!');
    }
  }

  render() {
    return (
      <div>
        <div>
          <AdminNav />
        </div>
        <div>
          <Container>
            <Row>
              <Col>
                <h2 className="AdminWelcH2">Správa vyšetření</h2>
              </Col>
            </Row>
            <ExamNameContainer
              onChange={this.props.changeExaminationState}
              nameValue={this.props.name}
              descriptionValue={this.props.description}
              selectedDiags={this.props.selectedDiags}
              options={this.state.options}
            />
            <GenderPeriodicityContainer
              onChange={this.props.changeExaminationState}
              perbasicValue={this.props.perbasic}
              perextValue={this.props.perext}
              genderValue={this.props.gender}
            />
            <Row>
              <Col xs="4">
                <AdminBasicFilterContainer
                  onChange={this.props.changeExaminationState}
                  agefrombasicValue={this.props.agefrombasicValue}
                  ageuntilbasicValue={this.props.ageuntilbasicValue}
                />
              </Col>
              <Col xs="8">
                <AdminAdvancedFilterContainer
                  onChange={this.props.changeExaminationState}
                  agefromextValue={this.props.agefromext}
                  ageuntilextValue={this.props.ageuntilext}
                />
              </Col>
            </Row>

            <Row>
              <Col
                style={{
                  marginBottom: '30px',
                  marginRight: '20px',
                  textAlign: 'right',
                }}
              >
                <a href="/admin-seznam-vysetreni">
                  <Button color="info" size="md" style={{ margin: '10px' }}>
                    Zrušit
                  </Button>
                </a>{' '}
                <Button
                  color="info"
                  size="md"
                  style={{ margin: '10px' }}
                  onClick={this.submitExam}
                >
                  Uložit
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedDiags: state.createExamination.diagnosis,
  rawDiagnosis: state.adminDiagnosis.diagnosis,
  name: state.createExamination.name,
  description: state.createExamination.description,
  agefrombasic: state.createExamination.agefrombasic,
  agefromext: state.createExamination.agefromext,
  ageuntilbasic: state.createExamination.ageuntilbasic,
  ageuntilext: state.createExamination.ageuntilext,
  gender: state.createExamination.gender,
  perbasic: state.createExamination.perbasic,
  perext: state.createExamination.perext,
  indineeded: state.createExamination.indineeded,
});

const mapDispatchToProps = {
  startCreateExamination,
  changeExaminationState,
  startFetchDiagnosis,
};

export const AdminExamination = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminExaminationRaw);
