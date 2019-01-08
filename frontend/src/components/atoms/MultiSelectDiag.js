import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MultiSelect } from './MultiSelect';
import { getAdminDiagnosis } from '../../services/AdminDiagnosis/reducer';
import { startFetchDiagnosis } from '../../services/AdminDiagnosis/actions';

export class MultiSelectDiagRaw extends Component {
  componentDidMount() {
    this.props.startFetchDiagnosis();
  }

  constructor(props) {
    super(props);
    this.getDiagName = this.getDiagName.bind(this);
  }

  getDiagName() {
    let diagName = [];
    for (const diagnosis of this.props.diagnosis) {
      diagName.push({ label: diagnosis.Name, value: diagnosis.Name });
    }
    return diagName;
  }

  render() {
    return (
      <MultiSelect
        value={this.props.selectedOption}
        onChange={this.props.handleChange}
        options={this.getDiagName()}
        isMulti={true}
        isSearchable={true}
        placeholder="Vyberte diagnózy..."
      />
    );
  }
}

const mapStateToProps = state => {
  const diagnosis = getAdminDiagnosis(state.adminDiagnosis);

  return {
    diagnosis,
  };
};

const mapDispatchToProps = {
  startFetchDiagnosis,
};

export const MultiSelectDiag = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiSelectDiagRaw);
