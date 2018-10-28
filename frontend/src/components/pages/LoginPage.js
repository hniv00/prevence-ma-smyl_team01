import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import {Container, Row, Col} from 'reactstrap';

import {TopNav} from '../molecules/TopNav';
import {Heading} from '../atoms/Heading';
import {Footer} from '../organisms/Footer';
import {LoginForm} from '../organisms/LoginForm';

import logo from '../../img/logo_prevence.png';

export class LoginPage extends Component {
  render() {
    return (
      <div>
      <LoginForm/>
      </div>
    );
  }
}
