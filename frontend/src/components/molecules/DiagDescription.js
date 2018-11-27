import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { setDescription } from '../../services/AdminDiagnosis/actions';

export class DiagDescriptionRaw extends Component {
  render() {
    const { inputDescr } = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Popis diagnózy</Label>
          <Input type="textarea" name="text" id="exampleText" value={inputDescr}/>
        </FormGroup>
      </Form>
    );
  }
}


const mapStateToProps = state => ({
  inputDescr: state.createDiagnosis.description
});

const mapDispatchToProps = {
  setDescription
};

export const DiagDescription = connect(mapStateToProps, mapDispatchToProps)(DiagDescriptionRaw);
