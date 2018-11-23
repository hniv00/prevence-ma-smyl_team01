import React, {Component} from 'react'
import { Row, Col, Container, Jumbotron, Table} from 'reactstrap';

const data = [{
  id: 1,
  name: 'Preventivní prohlídka'
}, {
  id: 2,
  name: 'Zubní prohlídka'
}, {
  id: 3,
  name: 'Oční prohlídka'
}
]

export class AdminExamsTab extends Component {
  render() {
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
          {data.map( item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td><a href=""><i className="material-icons" id="cssFooterArrow">create</i></a></td>
              <td><a href=""><i className="material-icons" id="cssFooterArrow">delete</i></a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
