import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import '../organisms/ContactForm.css';

export class Contact extends Component {
  render() {
    return (
      <div>
        <Jumbotron id="contactJumbo">
          <Row>
            <Col>
              <h6 id="contactHeading">Naše sídlo</h6>
              <p>
                Pražská vinárna
                <br />
                Staroměstské nám. 25
                <br />
                110 00 Praha 1
              </p>
              <h6 id="contactHeading">Telefon</h6>
              <p>+420 600 723 860</p>
            </Col>
            <Col>
              <h6 id="contactHeading">Fakturační údaje</h6>
              <p>
                IČO: 02905639
                <br />
                DIČ: CZ02905639
              </p>
              <h6 id="contactHeading">Bankovní spojení</h6>
              <p>7683180237/3030</p>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
