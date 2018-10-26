import React, {Component} from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost)


export class Footer extends Component {


  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <button type="button" class="btn btn-fb"><i className="fa fa-facebook pr-1"></i> Facebook</button>
            </Col>
            <Col>
              <button type="button" class="btn btn-tw"><i className="fa fa-twitter pr-1"></i> Twitter</button>
            </Col>
            <Col>
              <button type="button" class="btn btn-ins"><i className="fa fa-instagram pr-1"></i> Instagram</button>
            </Col>
            <Col>
              <FontAwesomeIcon icon="ghost" />Google +
            </Col>
          </Row>
          <Row>
            <Col>
              -
            </Col>
          </Row>
          <Row>
            <Col>
              © Tým 1 - Prevence má smysl {new Date().getFullYear()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
