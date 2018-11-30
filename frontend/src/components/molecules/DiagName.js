import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { setName } from '../../services/AdminDiagnosis/actions';

export class DiagNameRaw extends Component {

  constructor(props) {
    super(props);
    this.state = {
      diagName:''
    }
    this.diagNameRequired = this.diagNameRequired.bind(this);
  }

  diagNameRequired() {
    let empt = this.state.diagName;
     if (empt == "") {
         alert("Vyplňte přihlašovací jméno!");
         return false;
      }
    return true;
  }

  render() {
    const { inputName } = this.props;


    return (
      <Form>
        <FormGroup>
          <Label>Název diagnózy</Label>
          <Input type="text"
           value={inputName}
           onChange={event => this.setState({diagName: event.target.value})}
           />
        </FormGroup>
      </Form>
    );
  }
}


const mapStateToProps = state => ({
  inputName: state.createDiagnosis.name
});

const mapDispatchToProps = {
  setName
};

export const DiagName = connect(mapStateToProps, mapDispatchToProps)(DiagNameRaw);
