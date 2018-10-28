import React, {Component} from 'react';
import { Jumbotron, Button, Row, Col, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import {LoginButton} from '../atoms/LoginButton';


export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      // error: {
      //   message: 'Neplatné přihlášení'
      // }
    }
  }

  // signUp() {
  //   console.log('this.state', this.state);
  // }

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
              onChange={event => this.setState({username: event.target.value})}/>
            </div>
            <div className="Submit-button">
                <LoginButton></LoginButton>
            </div>
        </Jumbotron>
    );
  }
}
