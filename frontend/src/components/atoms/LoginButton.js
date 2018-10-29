import React, { Component } from "react"
import { Button} from 'reactstrap';

export class LoginButton extends Component {
  render() {
    return (
      <div>
        <Button
          id="cssButton"
          color="primary"
          className="login-button"
          href="/admin-lp">
          Přihlásit</Button>{' '}
      </div>
    );
  }
}
