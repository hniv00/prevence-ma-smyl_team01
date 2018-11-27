import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { setName } from '../../services/AdminDiagnosis/actions';

export class DiagNameRaw extends Component {
  render() {
    const { inputName } = this.props;

    return (
      <Form>
        <FormGroup>
          <Label>Název diagnózy</Label>
          <Input type="text" value={inputName}></Input>
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
