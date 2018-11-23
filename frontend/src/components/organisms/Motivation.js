import React, {Component} from 'react';
import { Button } from 'reactstrap';

export class Motivation extends Component {
  render() {
    return (
    <div style={{'margin-top': '80px', 'margin-bottom': '80px'}}>
      <h2 style={{'text-align': 'left'}}><span className="decor">Poslouchej své tělo. Starej se o své zdraví. Podporuj své blízké.</span></h2>
      <h3 style={{'text-align': 'left'}}>Protože prevence má smysl.</h3>
      <Button color="info" size="lg" style={{'border-radius': '30px', 'margin-top': '40px'}}>Chci se zapojit!</Button>{' '}
    </div>
  );
}
};
