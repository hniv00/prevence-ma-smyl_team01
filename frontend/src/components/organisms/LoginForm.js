import React, {Component} from 'react';
import { Button, Input } from 'reactstrap';
import { Link } from "react-router-dom";

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
      <div
      className="form-inline"
      >
      <h2
        className="admin-login-title">
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
        <Button outline color="info" size="sm"
          className="signin-btn"
          //color="primary"
          //type="button"
          //onClick={() => this.signUp()}
          href="/admin-lp"
          >
          Přihlásit
        </Button>
        </div>
      </div>
    );
  }
}
