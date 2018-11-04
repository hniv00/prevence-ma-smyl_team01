import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {Jumbotron} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {Footer} from '../organisms/Footer';
import {LogoutButton} from '../atoms/LogoutButton';
import {MultiSelect} from '../atoms/MultiSelect';
import {AdminNav} from '../organisms/AdminNav';
import {ExaminationInputForm} from '../molecules/ExaminationInputForm';


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
            <ExaminationInputForm></ExaminationInputForm>
          </div>
      </div>

    );
  }
}
