import React, {Component} from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCapsules } from '@fortawesome/free-solid-svg-icons'


export class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              TBD <FontAwesomeIcon icon={faCoffee} />
            </Col>
          </Row>
          <Row>
            <Col>
              TBD <FontAwesomeIcon icon={faCapsules} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
