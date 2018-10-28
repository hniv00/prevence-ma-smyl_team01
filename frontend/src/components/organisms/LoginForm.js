import React, {Component} from 'react';
import { Button } from 'reactstrap';
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
        <input id="cssAdminLogin"
          className="admin-username"
          placeholder="Uživatelské jméno"
          type="text"
          onChange={event => this.setState({username: event.target.value})}
        />
        <input id="cssAdminLogin"
          className="admin-password"
          placeholder="Heslo"
          type="password"
          onChange={event => this.setState({password: event.target.value})}
        />
        <Button id="cssButton"
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
