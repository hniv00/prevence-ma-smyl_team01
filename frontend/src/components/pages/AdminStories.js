import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import { Col, Row, Button, UncontrolledTooltip } from 'reactstrap';

import {LogoutButton} from '../atoms/LogoutButton';
import {MultiSelect} from '../atoms/MultiSelect';
import {AdminNav} from '../organisms/AdminNav';
import {GenderPeriodicityContainer} from '../organisms/GenderPeriodicityContainer';
import {TooltipItem} from '../molecules/TooltipItem';
import {StoryNameContainer} from '../organisms/StoryNameContainer';


export class AdminStories extends Component {
  render() {
    return (
    <div>
      <div>
        <AdminNav/>
        <div>
          <Row style={{margin: "20px"}}>
          <Col></Col>
          <Col  xs="11"><h2 className="AdminWelcH2">Správa příběhů</h2></Col>
            <Col>
             <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">
               <i class="material-icons" style={{color:"#28A3B7"}}>
                 help
               </i>
             </span>
             <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
               Ve správě příběhů můžete vytvářet či upravovat příběhy.
             </UncontrolledTooltip>
            </Col>
          </Row>
           <StoryNameContainer />
             <Col>
                <Button color="info" size="md" style={{margin: "10px"}}>Smazat</Button>
                <Button color="info" size="md" style={{margin: "10px"}}>Uložit</Button>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}
