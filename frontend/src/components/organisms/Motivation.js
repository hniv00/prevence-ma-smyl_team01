import React, {Component} from 'react';
import { Button } from 'reactstrap';

export class Motivation extends Component {
  render() {
    return (
    <div style={{marginTop: '80px', marginBottom: '80px'}}>
      <h2 className="pageHeader" style={{textAlign: 'left', fontSize: '52px'}}>
        <span className="decor">Poslouchej své tělo. Starej se o své zdraví. Podporuj své blízké.</span>
      </h2>
      <h3 style={{textAlign: 'left'}}>Protože prevence má smysl!</h3>
      <Button color="info" size="lg" style={{borderRadius: '30px', marginTop: '40px'}}>Chci se zapojit!</Button>{' '}
    </div>
  );
}
};
