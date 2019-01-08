import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class LogoutButton extends Component {
  render() {
    return (
      <div>
        <Button className="logout-button" color="danger" href="/admin-login">
          Odhlásit
        </Button>{' '}
      </div>
    );
  }
}
