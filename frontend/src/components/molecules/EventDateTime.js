import React, { Component } from "react"
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class EventDateTime extends Component {
  render() {
    return (
      <div>
      <Form>
        <Label>Čas konání</Label>
        <Row>
          <Col md={8}>
            <FormGroup>
               <Label for="exampleDate">Datum</Label>
               <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
             </FormGroup>
           </Col>
           <Col md={4}>
             <FormGroup>
               <Label for="exampleTime">Čas</Label>
               <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
             </FormGroup>
           </Col>
         </Row>
       </Form>
      </div>
    );
  }
}
