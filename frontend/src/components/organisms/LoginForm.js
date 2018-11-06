import React, {Component} from 'react';
import { Jumbotron} from 'reactstrap';
import { Button, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import {LoginButton} from '../atoms/LoginButton';
import axios from 'axios';


export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
    }
  }

  signUp() {
    console.log('this.state', this.state);
  }

  render() {
    return (
    <div>
      <Jumbotron className= "login-form">
        <h2 className="admin-login-title">
          Přihlášení
        </h2>
      <div className="admin-login">
        <Input id="cssAdminLogin"
          className="admin-username"
          placeholder="Uživatelské jméno"
          type="text"
          onChange={event => this.setState({username: event.target.value})}
        />
        <Input id="cssAdminLogin"
          className="admin-password"
          placeholder="Heslo"
          type="password"
          onChange={event => this.setState({password: event.target.value})}
        />
            <div className="Submit-button">
                <LoginButton onClickFunc={this.signUp.bind(this)}></LoginButton>
            </div>
        </div>
        </Jumbotron>
      </div>
    );
  }
}
