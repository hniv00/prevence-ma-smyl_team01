import React, { Component } from "react"
import { Button} from 'reactstrap';

export class LoginButton extends Component {
  constructor(props){
    super(props);
    console.log('Binding');
    this.onClickFunc = props.onClickFunc;
  }
  render() {
    return (
      <div>
        <Button
          id="cssButton"
          color="primary"
          className="login-button"
          onClick={this.onClickFunc}>
          Přihlásit
        </Button>{' '}
      </div>
    );
  }
}
