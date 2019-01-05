import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';
import { getAdminExams } from '../../services/AdminExaminations/reducer';
import { startFetchExams, startDeleteExam } from '../../services/AdminExaminations/actions'

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
            {/* <th>Upravit</th> */}
            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {exams.map( item => (
            <tr key={item.IDExamination}>
              <th scope="row">{item.IDExamination}</th>
              <td>{item.ExamName}</td>
              {/* <td><a href=""><i className="material-icons" id="cssFooterArrow">create</i></a></td> */}
              <td><i onClick={(e) => { if (window.confirm('Jste si jistí, že chcete odstranit toto vyšetření?')) this.props.startDeleteExam(item.IDExamination)}} className="material-icons" id="cssFooterArrow">delete</i></td>
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
  startFetchExams,
  startDeleteExam
}

export const AdminExamsTab = connect(mapStateToProps, mapDispatchToProps)(AdminExamsTabRaw);
