import React, { Component } from 'react';
import { Col, Row, UncontrolledTooltip } from 'reactstrap';

import { AdminNav } from '../organisms/AdminNav';

export class AdminBlog extends Component {
  render() {
    return (
      <div>
        <div>
          <AdminNav />
          <div>
            <Row>
              <Col xs="11">
                <h2 className="AdminWelcH2">Správa článků na blogu</h2>
              </Col>
              <Col>
                <span
                  style={{ textDecoration: 'underline', color: 'blue' }}
                  href="#"
                  id="UncontrolledTooltipExample"
                >
                  <i className="material-icons" style={{ color: '#28A3B7' }}>
                    help
                  </i>
                </span>
                <UncontrolledTooltip
                  placement="right"
                  target="UncontrolledTooltipExample"
                >
                  Ve správě článků můžete vytvářet či upravovat články na
                  blogové stránce webu.
                </UncontrolledTooltip>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ textAlign: 'center' }}>
                  Zde budete moci již brzy psát články na blog. Momentálně je
                  stránka ve fázi vývoje. Děkujeme za pochopení.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
