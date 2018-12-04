import React, {Component} from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import './ContactForm.css';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      text:'',
    }
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    let emailEmpt = this.state.email;
    let textEmpt = this.state.text;

    if (emailEmpt == "" || textEmpt == "") {
          alert("Políčka 'e-mail' a 'vzkaz' musí být vyplněna.");
         return false;
    }
    return true;
  }

  handleSubmit(event) {
    this.validate();
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="name">Jméno a příjmení</Label>
              <Input type="text" name="name" id="name" placeholder="Napiš své jméno" inline/>
            </FormGroup>
          </Col>

          <Col md="6">
          <FormGroup>
            <Label for="email">E-mail *</Label>
            <Input type="email" name="email" id="email" placeholder="Napiš svůj e-mail" inline
            onChange={event => this.setState({email: event.target.value})}/>
          </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="text">Vzkaz</Label>
          <Input type="textarea" name="text" id="text" placeholder="Napiš, co nám chceš vzkázat..."
          onChange={event => this.setState({text: event.target.value})}/>
        </FormGroup>

        <FormGroup check>
          <CustomInput type="checkbox" id="checkbox" label="Souhlasím se zpracováním osobních údajů. *" />
        </FormGroup>

        <Button id="submit">Odeslat zprávu</Button>
      </Form>
    );
  }
}
