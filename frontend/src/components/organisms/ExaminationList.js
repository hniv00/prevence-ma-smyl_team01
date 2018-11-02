import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import {Examination} from '../molecules/Examination';
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
