import React, {Component} from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import {setName} from '../../services/Contact/actions';
import {setEmail} from '../../services/Contact/actions';
import {setMessage} from '../../services/Contact/actions';
import './ContactForm.css';

export class ContactFormRaw extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.props.setName(event.target.name);
    this.props.setEmail(event.target.email);
    this.props.setMessage(event.target.message);
  }

  validate() {
    let emailEmpt = this.props.email;
    let textEmpt = this.props.message;

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
              <Input type="text" name="name" id="name" placeholder="Napiš své jméno" inline
              value={this.props.value} onChange={this.handleChange}/>
            </FormGroup>
          </Col>

          <Col md="6">
          <FormGroup>
            <Label for="email">E-mail *</Label>
            <Input type="email" name="email" id="email" placeholder="Napiš svůj e-mail" inline
            value={this.props.value} onChange={this.handleChange}/>
          </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="text">Vzkaz</Label>
          <Input type="textarea" name="text" id="text" placeholder="Napiš, co nám chceš vzkázat..."
          value={this.props.value} onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup check>
          <CustomInput type="checkbox" id="checkbox" label="Souhlasím se zpracováním osobních údajů. *" />
        </FormGroup>

        <Button id="submit">Odeslat zprávu</Button>
      </Form>
    );
  }
}


const mapStateToProps = state => ({
  name: state.sendContactForm.name,
  email: state.sendContactForm.email,
  message: state.sendContactForm.message
});

const mapDispatchToProps = {
  setName,
  setEmail,
  setMessage
};

export const ContactForm = connect(mapStateToProps, mapDispatchToProps)(ContactFormRaw);
