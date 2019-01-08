import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getAdminIndication } from '../../services/AdminIndication/reducer';
import {
  startFetchIndication,
  startDeleteIndication,
} from '../../services/AdminIndication/actions';

export class AdminIndiTabRaw extends Component {
  componentDidMount() {
    this.props.startFetchIndication();
  }
  render() {
    const { indication } = this.props;

    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Název indikace</th>
            <th>/Typ indikace/</th>

            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {indication.map(item => (
            <tr key={item.IDIndication}>
              <th scope="row">{item.IDIndication}</th>
              <td>{item.NameInd}</td>
              <td>{item.Type}</td>

              <td>
                <i
                  onClick={e => {
                    if (
                      window.confirm(
                        'Jste si jistí, že chcete odstranit tuto indikaci?',
                      )
                    )
                      this.props.startDeleteIndication(item.IDIndication);
                  }}
                  className="material-icons"
                  id="cssFooterArrow"
                >
                  delete
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  const indication = getAdminIndication(state.adminIndications);

  return {
    indication,
  };
};

const mapDispatchToProps = {
  startFetchIndication,
  startDeleteIndication,
};

export const AdminIndiTab = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminIndiTabRaw);
