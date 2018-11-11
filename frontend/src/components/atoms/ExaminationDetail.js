import React, {Component} from 'react';
import { Modal, Row, Col, Button, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';

export class ExaminationDetail extends Component {
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
        <Button color="info" size="sm" onClick={this.toggle}>Zobrazit detail vyšetření</Button>
        <Modal isOpen={modal} toggle={this.toggle} className={className}>
          <ModalHeader id="cssCardExamination" toggle={this.toggle} close={closeBtn}>Preventivní prohlídka</ModalHeader>
          <ModalBody id="cssCardExamination">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
            <p>Díky preventivní prohlídce vyloučíte tyto diagnózy:</p>
            <Row>
              <Col>
                <p>
                <Badge id="cssBadge" color="secondary">Obezita</Badge> {' '}
                <Badge id="cssBadge" color="secondary">Krátkozrakost</Badge>
                </p>
              </Col>
            </Row>
            <p>Základní periodicita pro toto vyšetření je:</p>
            <Badge id="cssBadgePeriodicity">1 á 2 roky</Badge>{' '}
            <Badge id="cssBadgePeriodicity">
            !!! lidé trpící poruchami zažívání by toto vyšetření měli navštěvovat 1 á 6 měsíců !!!</Badge>{' '}
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
