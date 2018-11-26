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
    this.nameRequired = this.nameRequired.bind(this);
    this.passRequired = this.passRequired.bind(this);
  }

  nameRequired() {
    let empt = this.state.username;
     if (empt == "") {
         alert("Vyplňte přihlašovací jméno!");
         return false;
      }
      // fejk přihlášení
     if (empt !== "admin") {
       alert("Špatné přihlašovací jméno nebo heslo!");
       return false;
     }
    return true;
  }

  passRequired() {
      let empt = this.state.password;
       if (empt == "") {
           alert("Vyplňte heslo!");
           return false;
        }
        // fejk přihlášení
       if (empt !== "admin") {
         alert("Špatné přihlašovací jméno nebo heslo!");
         return false;
       }
       else{
         window.location.href = '/admin-lp';
         return true;
       }
  }

  signUp() {
    console.log('this.state', this.state);
    this.nameRequired();
    this.passRequired();
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
          style={{marginTop: '20px'}}
          onChange={event => this.setState({username: event.target.value})}
        />
        <Input id="cssAdminLogin"
          className="admin-password"
          placeholder="Heslo"
          type="password"
          style={{marginTop: '20px'}}
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
