import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Motivation extends Component {
  render() {
    return (
      <div style={{ marginTop: '80px', marginBottom: '80px' }}>
        <h2
          className="pageHeader"
          style={{ color: 'white', textAlign: 'left', fontSize: '52px' }}
        >
          Poslouchej své tělo. Starej se o své zdraví. Podporuj své blízké.
        </h2>
        <h3 style={{ color: 'white', textAlign: 'left' }}>
          Protože prevence má smysl!
        </h3>
        <a href="/projekt#joinUs">
          <Button
            color="info"
            size="lg"
            style={{ borderRadius: '30px', marginTop: '40px' }}
          >
            Chci se zapojit!
          </Button>{' '}
        </a>
      </div>
    );
  }
}
