import React, {Component} from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCapsules } from '@fortawesome/free-solid-svg-icons'
import { facebook } from '@fortawesome/free-solid-svg-icons'


export class Footer extends Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <button type="button" class="btn btn-fb"><i class="fa fa-facebook pr-1"></i> Facebook</button>
            </Col>
            <Col>
              <button type="button" class="btn btn-tw"><i class="fa fa-twitter pr-1"></i> Twitter</button>
            </Col>
            <Col>
              <button type="button" class="btn btn-ins"><i class="fa fa-instagram pr-1"></i> Instagram</button>
            </Col>
            <Col>
              <button type="button" class="btn btn-gplus"><i class="fa fa-google-plus pr-1"></i> Google +</button>
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
