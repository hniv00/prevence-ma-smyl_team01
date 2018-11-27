import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardDeck, CardTitle, CardSubtitle,
          Row, Col} from 'reactstrap';

const data = [
  { src: './images/loono_logo.png', title: 'Loono', alt: 'Loono logo'},
  { src: './images/stk_logo.png', title: 'STK pro chlapy', alt: 'STK pro chlapy logo'},
  { src: './images/avon_logo.jpg', title: 'Avon', alt: 'Avon logo'},
  { src: './images/rucenaprsa_logo.jpg', title: 'Ruce na prsa', alt: 'Ruce na prsa logo'}
]

/* Probably no more used component
*
*/

export class PartnerCard extends Component {
  render() {
    return (
    <div>
      <h4>Partnerské projekty</h4>
      <Row>
        {data.map ( item => (
            <Col xs="3">
              <Card>
                  <CardImg key={item.src} top width="318px" src={item.src} alt={item.alt} />
                <CardBody>
                  <CardTitle key={item.src} style={{color: 'black'}}>{item.title}</CardTitle>
                </CardBody>
              </Card>
            </Col>
        ))}
      </Row>
    </div>
  );
}
};
