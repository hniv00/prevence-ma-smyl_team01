import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import {Examination} from '../molecules/Examination';

export class ExaminationList extends Component {
  render() {
    return (
    <div style={{ margin: '5%'}}>
        <h4>Seznam vyhledaných preventivních vyšetření</h4>
        <Examination/>
      <div style={{ height: '20px'}} />
        <Button color="info" size="md" style={{'border-radius': '20px'}}>Chci vidět více výsledků</Button>{' '}
    </div>
  );
}
};
