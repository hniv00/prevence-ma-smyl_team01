import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Table} from 'reactstrap';
import { getAdminDiagnosis } from '../../services/AdminDiagnosis/reducer';
import { startFetchDiagnosis, startDeleteDiagnosis } from '../../services/AdminDiagnosis/actions';

export class AdminDiagTabRaw extends Component {

  componentDidMount(){
    this.props.startFetchDiagnosis();
  }

  render() {
    const { diagnosis } = this.props;
    console.log(this.props);
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Název diagnózy</th>
            {/* <th>Upravit</th> */}
            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {diagnosis.map( item => (
            <tr key={item.IDDiagnosis}>
              <th scope="row">{item.IDDiagnosis}</th>
              <td>{item.Name}</td>
              {/* <td><a href=""><i class="material-icons" id="cssFooterArrow">create</i></a></td> */}
              <td><i onClick={(e) => { if (window.confirm('Jste si jistí, že chcete odstranit tuto diagnózu?')) this.props.startDeleteDiagnosis(item.IDDiagnosis)}} class="material-icons" id="cssFooterArrow">delete</i></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  const diagnosis = getAdminDiagnosis(state.adminDiagnosis);

  return {
    diagnosis,
  };
};

const mapDispatchToProps = {
  startFetchDiagnosis,
  startDeleteDiagnosis
}

export const AdminDiagTab = connect(mapStateToProps, mapDispatchToProps)(AdminDiagTabRaw);
