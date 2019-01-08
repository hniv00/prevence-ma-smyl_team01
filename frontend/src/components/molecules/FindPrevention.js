import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FilterButton } from '../atoms/FilterButton';
import { startFetchFilteredExaminations } from '../../services/Filtration/actions';

export class FindPreventionRaw extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.fetchFilteredExaminations();
  }

  render() {
    return (
      <div id="filterButton">
        <FilterButton onClick={this.handleOnClick} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchFilteredExaminations: startFetchFilteredExaminations,
};

export const FindPrevention = connect(
  null,
  mapDispatchToProps,
)(FindPreventionRaw);
