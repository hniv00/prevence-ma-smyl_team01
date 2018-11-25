
import React, {Component, Fragment} from 'react';
import { Card, CardTitle, CardText, Row, Col, Badge, Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {dumbStore} from '../../store/dumbStore'



const data = dumbStore.examinationResult;


export class BadgesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    const { modal } = this.state
    const { className } = this.props
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;


    return (
      <div>
        <Row>


                      <CardText>
                        <p>
                          {this.props.item.badges.map( badge => <Fragment key={badge}><Badge id="cssBadge" color="secondary" onClick={this.toggle}>{badge}</Badge>{' '}</Fragment> )}
                          <i class="material-icons" style={{color: "#F26D98", 'margin-left': '6px'}}>more_horiz</i>
                        </p>
                      </CardText>



          </Row>

        <Modal isOpen={modal} toggle={this.toggle} className={className}>

          <ModalHeader id="cssCardExamination" toggle={this.toggle} close={closeBtn}>{this.props.item.badges}</ModalHeader>
          <ModalBody id="cssCardExamination">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
            <p>Související preventivní vyšetření:</p>

            <p id="cssCardExaminationName">{this.props.item.title}</p>

          </ModalBody>
        </Modal>

      </div>
    );
  }
}



/* After modal body can be
<ModalFooter>
  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
</ModalFooter>
*/
