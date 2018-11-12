import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {dumbStore} from '../../store/dumbStore';

import {Examination} from '../molecules/Examination';
import axios from 'axios'

export class ExaminationList extends Component {  
  render() {
    return (
    <div style={{ margin: '5%'}}>
        <h4>Seznam vyhledaných preventivních vyšetření</h4>
        <Examination/>
        </div>
  );
}
};

/* This was excluded from the div..probably delete forever

<div style={{ height: '20px'}} />
  <Button color="info" size="md" style={{'border-radius': '20px'}}>Chci vidět více výsledků</Button>{' '}

*/
