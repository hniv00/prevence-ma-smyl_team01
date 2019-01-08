import React, { Component } from 'react';

import { AdminNav } from '../organisms/AdminNav';

export class AdminLandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <AdminNav />
        </div>
        <h2 className="AdminWelcH2">Vítejte v admin modulu</h2>
        <br />
        <h3 className="AdminWelcH2">
          Můžete začít spravovat vyšetření nebo příběhy. Vyberte akci z menu.
        </h3>
      </div>
    );
  }
}
