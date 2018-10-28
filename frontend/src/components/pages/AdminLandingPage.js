import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {Button} from 'reactstrap';


import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {Footer} from '../organisms/Footer';

import logo from '../../img/logo_prevence.png';

export class AdminLandingPage extends Component {
  render() {
    return (
      <div>
        <h2>Vítejte v admin modulu</h2>
        <h3>Zde budete mít brzy možnost spravovat obsah webu ...</h3>
        <Button id="cssButton"
          className="signin-btn"
          //color="danger"
          //type="button"
          //onClick={() => this.signUp()}
          href="/admin-login"
          >
          Odhlásit
        </Button>
      </div>
    );
  }
}
