import React, {Component} from 'react';
import { Jumbotron} from 'reactstrap';
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
      <Jumbotron className= "login-form">
        <h2 className="admin-login-title">
          Přihlášení
        </h2>
        <div className="login-input-group">
              <input
                className="login-input"
                placeholder="Uživatelské jméno"
                type="text"
                onChange={event => this.setState({username: event.target.value})}/>
            </div>
            <div className="login-input-group">
              <input
              className="login-input"
              placeholder="Heslo"
              type="password"
              onChange={event => this.setState({password: event.target.value})}/>
            </div>
            <div className="Submit-button">
                <LoginButton onClickFunc={this.signUp.bind(this)}></LoginButton>
            </div>
        </Jumbotron>
    );
  }
}
