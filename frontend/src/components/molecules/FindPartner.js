import React, { Component } from "react"
import axios from 'axios';
import {connect} from 'react-redux';
import {FilterPartnersButton} from '../atoms/FilterPartnersButton';
// import {dumbStore} from '../../store/dumbStore';

export class FindPartnerRaw extends Component {
  constructor(props){
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(){
    let diagnosis = this.props.diagnosis;
  }

  render() {
    return (
      <div id="filterButton">
        <a href="/partneri#content"><FilterPartnersButton onClick={this.handleOnClick}/></a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  diagnosis: state.filterPartner.diagnosis
});

export const FindPartner = connect(mapStateToProps)(FindPartnerRaw);
