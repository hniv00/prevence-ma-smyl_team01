import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';
import { getAdminExams } from '../../services/AdminExaminations/reducer';
import { startFetchExams } from '../../services/AdminExaminations/actions'

export class AdminExamsTabRaw extends Component {

    componentDidMount(){
      this.props.startFetchExams();
    }
  render() {
    const { exams } = this.props;
    console.log(this.props);
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Název vyšetření</th>
            <th>Upravit</th>
            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {exams.map( item => (
            <tr key={item.IDExamination}>
              <th scope="row">{item.IDExamination}</th>
              <td>{item.ExamName}</td>
              <td><a href=""><i className="material-icons" id="cssFooterArrow">create</i></a></td>
              <td><a href=""><i className="material-icons" id="cssFooterArrow">delete</i></a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  const exams = getAdminExams(state.adminExams);

  return {
    exams,
  };
};

const mapDispatchToProps = {
  startFetchExams
}

export const AdminExamsTab = connect(mapStateToProps, mapDispatchToProps)(AdminExamsTabRaw);
