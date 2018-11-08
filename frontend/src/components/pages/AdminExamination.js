import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {Jumbotron, Row, Col, Button} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {Footer} from '../organisms/Footer';
import {LogoutButton} from '../atoms/LogoutButton';
import {MultiSelect} from '../atoms/MultiSelect';
import {AdminNav} from '../organisms/AdminNav';
import {ExamNameContainer} from '../organisms/ExamNameContainer';
import {GenderPeriodicityContainer} from '../organisms/GenderPeriodicityContainer';
import {BasicFilterContainer} from '../organisms/BasicFilterContainer';
import {AdvancedFilterContainer} from '../organisms/AdvancedFilterContainer';

//import logo from '../../img/logo_prevence.png';

export class AdminExamination extends Component {
  render() {
    return (
      <div>
        <div>
          <AdminNav></AdminNav>
        </div>
          <div>
            <h2 className="AdminWelcH2">Správa vyšetření</h2>
          </div>
          <div>
            <ExamNameContainer />
          </div>
          <div>
            <GenderPeriodicityContainer />
          </div>
          <div>
            <Row>
              <Col>
                <BasicFilterContainer />
              </Col>
              <Col><AdvancedFilterContainer /></Col>
            </Row>
          </div>
          <div>
                <Button color="info" size="md">Smazat</Button>
                <Button color="info" size="md">Uložit</Button>
          </div>
      </div>

    );
  }
}
