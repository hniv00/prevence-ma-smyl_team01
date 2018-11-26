import React, {Component} from 'react'
import { Row, Col, Container, Jumbotron, Table} from 'reactstrap';

const data = [{
  id: 1,
  name: 'Diabetes'
}, {
  id: 2,
  name: 'Zvýšený krevní tlak'
}, {
  id: 3,
  name: 'Krátkozrakost'
}
]

export class AdminDiagTab extends Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Název diagnózy</th>
            <th>Upravit</th>
            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {data.map( item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td><a href=""><i class="material-icons" id="cssFooterArrow">create</i></a></td>
              <td><a href=""><i class="material-icons" id="cssFooterArrow">delete</i></a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
