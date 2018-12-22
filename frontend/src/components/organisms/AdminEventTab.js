import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Table} from 'reactstrap';
import { getAdminEvents } from '../../services/AdminEvents/reducer';
import { startFetchEvents, startDeleteEvent } from '../../services/AdminEvents/actions';

export class AdminEventTabRaw extends Component {

  componentDidMount(){
    this.props.startFetchEvents();
  }

  render() {
    const { events } = this.props;
    console.log(this.props);
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Název akce</th>
            {/* <th>Upravit</th> */}
            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {events.map( item => (
            <tr key={item.IDEvent}>
              <th scope="row">{item.IDEvent}</th>
              <td>{item.Name}</td>
              {/* <td><a href=""><i class="material-icons" id="cssFooterArrow">create</i></a></td> */}
              <td><i onClick={(e) => { if (window.confirm('Jste si jistí, že chcete odstranit tuto událost?')) this.props.startDeleteEvent(item.IDEvent)}} class="material-icons" id="cssFooterArrow">delete</i></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  const events = getAdminEvents(state.adminEvents);

  return {
    events,
  };
};

const mapDispatchToProps = {
  startFetchEvents,
  startDeleteEvent
}

export const AdminEventTab = connect(mapStateToProps, mapDispatchToProps)(AdminEventTabRaw);
