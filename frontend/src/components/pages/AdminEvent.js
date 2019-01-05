import React, {Component} from 'react'
import { Col, Row, Button, UncontrolledTooltip } from 'reactstrap';

import {AdminNav} from '../organisms/AdminNav';
import {EventContainer} from '../organisms/EventContainer';

export class AdminEvent extends Component {
  render() {
    return (
    <div>
      <div>
        <AdminNav/>
        <div>
          <Row style={{margin: "20px"}}>
          <Col></Col>
          <Col  xs="11"><h2 className="AdminWelcH2">Správa akcí</h2></Col>
            <Col>
             <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">
               <i className="material-icons" style={{color:"#28A3B7"}}>
                 help
               </i>
             </span>
             <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
               Ve správě akcí můžete vytvářet či upravovat akce týkající se prevence a zdraví.
             </UncontrolledTooltip>
            </Col>
          </Row>
           <EventContainer/>
             <Col>
                 <a href="/admin-seznam-akci">
                 <Button color="info"
                   size="md"
                   style={{margin: "10px"}}>
                   Zrušit
                 </Button>
                 </a>
                <Button color="info"
                  size="md"
                  style={{margin: "10px"}}>
                  Uložit
                </Button>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}
