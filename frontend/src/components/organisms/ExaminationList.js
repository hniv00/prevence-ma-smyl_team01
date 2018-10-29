import React, {Component} from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';

import {Examination} from '../molecules/Examination';

export class ExaminationList extends Component {
  render() {
    return (
    <div style={{ margin: '2%' }}>
        <h5>Seznam vyhledaných preventivních vyšetření</h5>
        <Examination/>
      <div style={{ height: '20px' }} />
        <Button variant="contained" color="primary">Chci vidět více výsledků</Button>{' '}
    </div>
  );
}
};
