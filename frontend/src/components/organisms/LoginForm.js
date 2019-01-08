import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Input } from 'reactstrap';
import { LoginButton } from '../atoms/LoginButton';
import api from '../../api';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.nameRequired = this.nameRequired.bind(this);
    this.passRequired = this.passRequired.bind(this);
  }

  nameRequired() {
    let empt = this.state.username;
    if (empt === '') {
      alert('Vyplňte přihlašovací jméno!');
      return false;
    }
    return true;
  }

  passRequired() {
    let empt = this.state.password;
    if (empt === '') {
      alert('Vyplňte heslo!');
      return false;
    }
    return true;
  }

  signUp() {
    if (this.nameRequired() && this.passRequired()) {
      api
        .get(`/auth/${this.state.username}.${this.state.password}`)
        .then(({ status }) => {
          if (status === 200) window.location.href = '/admin-lp';
        })
        .catch(() => {
          window.location.href = 'admin-login';
        });
    }
  }

  render() {
    return (
      <div>
        <Jumbotron className="login-form">
          <h2 className="admin-login-title">Přihlášení</h2>
          <div className="admin-login">
            <Input
              id="cssAdminLogin"
              className="admin-username"
              placeholder="Uživatelské jméno"
              type="text"
              style={{ marginTop: '20px' }}
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
            <Input
              id="cssAdminLogin"
              className="admin-password"
              placeholder="Heslo"
              type="password"
              style={{ marginTop: '20px' }}
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
            <div className="Submit-button">
              <LoginButton onClickFunc={this.signUp.bind(this)} />
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
