import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class NewArticleButton extends Component {
  render() {
    return (
      <div>
        <Button color="info" size="md" style={{ margin: '20px' }}>
          Vytvořit nový článek
        </Button>{' '}
      </div>
    );
  }
}
