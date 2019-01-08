import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
} from 'reactstrap';
import { connect } from 'react-redux';
import Recaptcha from 'react-recaptcha';

import { startSendForm, changeFormState } from '../../services/Contact/actions';
import './ContactForm.css';

export class ContactFormRaw extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false,
    };
  }

  handleChange(event) {
    let data = {};
    data[event.target.name] = event.target.value;

    this.props.changeFormState(data);
  }

  recaptchaLoaded() {
    console.log('reCAPCHA úspěšně naloadovaná!');
  }

  handleSubmit(event) {
    if (this.state.isVerified) {
      event.preventDefault();
      this.props.startSendForm();
      alert('Váš dotaz byl odeslán!');
    } else {
      alert('Prosím potvrďte, že nejste robot!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="name">Jméno a příjmení</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Napiš své jméno"
                inline
                value={this.props.value}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="email">E-mail *</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Napiš svůj e-mail"
                inline
                value={this.props.value}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="text">Vzkaz *</Label>
          <Input
            type="textarea"
            name="text"
            id="text"
            placeholder="Napiš, co nám chceš vzkázat..."
            value={this.props.value}
            onChange={this.handleChange}
            required
          />
        </FormGroup>

        <FormGroup check style={{ marginBottom: '20px' }}>
          <CustomInput
            type="checkbox"
            id="checkbox"
            label="Souhlasím se zpracováním osobních údajů. *"
            required
          />
        </FormGroup>

        <Recaptcha
          sitekey="6LeBYoUUAAAAADeQVhqv5AWZYcOPXMhI26C1meth"
          render="explicit"
          onloadCallback={this.recaptchaLoaded}
          verifyCallback={this.verifyCallback}
        />

        <Button id="submit">Odeslat zprávu</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  name: state.sendContactForm.name,
  email: state.sendContactForm.email,
  message: state.sendContactForm.message,
});

const mapDispatchToProps = {
  changeFormState,
  startSendForm,
};

export const ContactForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactFormRaw);
