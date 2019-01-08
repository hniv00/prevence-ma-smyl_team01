import React, { Component } from 'react';
import { Col, Row, Button, UncontrolledTooltip } from 'reactstrap';
import { connect } from 'react-redux';
import {
  startCreateStory,
  changeStoryState,
} from '../../services/AdminStories/actions';

import { AdminNav } from '../organisms/AdminNav';
import { StoryNameContainer } from '../organisms/StoryNameContainer';

export class AdminStoriesRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitStory = this.submitStory.bind(this);
    this.patientNameRequired = this.patientNameRequired.bind(this);
    this.patientAgeRequired = this.patientAgeRequired.bind(this);
    this.storyDescriptionRequired = this.storyDescriptionRequired.bind(this);
  }

  patientNameRequired() {
    let empt = this.props.name;
    if (empt === '') {
      alert('Vyplňte jméno pacienta tohoto příběhu!');
      return false;
    }
    return true;
  }

  patientAgeRequired() {
    let empt = this.props.age;
    if (empt === '') {
      alert('Vyplňte věk pacienta!');
      return false;
    }
    return true;
  }

  storyDescriptionRequired() {
    let empt = this.props.description;
    if (empt === '') {
      alert('Vyplňte popis příběhu!');
      return false;
    }
    return true;
  }

  submitStory() {
    if (
      this.patientNameRequired() &&
      this.patientAgeRequired() &&
      this.storyDescriptionRequired()
    ) {
      this.props.startCreateStory();
      alert('Nový příběh byl vytvořen!');
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
                <h2 className="AdminWelcH2">Správa příběhů</h2>
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
                  Ve správě příběhů můžete vytvářet či upravovat příběhy.
                </UncontrolledTooltip>
              </Col>
            </Row>
            <StoryNameContainer
              onChange={this.props.changeStoryState}
              nameValue={this.props.name}
              ageValue={this.props.age}
              descriptionValue={this.props.description}
            />
            <Col>
              <a href="/admin-seznam-pribehu">
                <Button color="info" size="md" style={{ margin: '10px' }}>
                  Zrušit
                </Button>
              </a>{' '}
              <Button
                color="info"
                size="md"
                style={{ margin: '10px' }}
                onClick={this.submitStory}
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
  name: state.createStory.name,
  age: state.createStory.age,
  description: state.createStory.description,
});

const mapDispatchToProps = {
  startCreateStory,
  changeStoryState,
};
export const AdminStories = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminStoriesRaw);
