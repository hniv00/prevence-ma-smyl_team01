import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import {Examination} from '../molecules/Examination.1';
import axios from 'axios'

export class ExaminationList extends Component {
  fillList(result){
    this.list = [];
    console.log(result.length);
    for (let i = 0; i < 3; i++) {
      this.list.push(<Examination data={result[i]}/>);
      this.forceUpdate(); 
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3030/api/examination').then((response)=>{
      console.log(response);
      this.fillList(response.data.examinations);
    });
  }
  render() {
    return (
    <div style={{ margin: '2%' }}>
        <h5>Seznam vyhledaných preventivních vyšetření</h5>
        <Row>
        {this.list}
        </Row>
      <div style={{ height: '20px' }} />
        <Button id="cssButton" color="info">Chci vidět více výsledků</Button>{' '}
    </div>
  );
}
};
