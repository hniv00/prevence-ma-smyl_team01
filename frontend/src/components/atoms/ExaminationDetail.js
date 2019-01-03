import React, {Component} from 'react';
import { Modal, Row, Col, Button, ModalHeader, ModalBody, Badge } from 'reactstrap';

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

    const { modal } = this.state;
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

    return (
      <div>
        <Button color="info" size="sm" onClick={this.toggle}>Zobrazit detail vyšetření</Button>
        <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader id="cssCardExamination" toggle={this.toggle} close={closeBtn}>{this.props.title}</ModalHeader>
          <ModalBody id="cssCardExamination">
            <p>{this.props.descr}</p>
            <p>Díky preventivní prohlídce vyloučíte tyto diagnózy:</p>
            <Row>
              <Col style={{marginBottom: '20px'}}>
                {this.props.diags.map((diag, i) => (
                  <span>
                <Badge id="cssBadge" color="secondary"
                key={i} examination={diag.title}>
                {diag.Name}
                </Badge>{' '}
                </span>
              ))}
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="6">
                <p>Základní periodicita pro toto vyšetření je:</p>
                <p><Badge id="cssBadgePeriodicity">
                {this.props.basicPeriodicity}</Badge>{' '}</p>
              </Col>
              <Col xs="12" sm="6">
                <p>Ovšem dbejte zvýšenou pozornost v případech:</p>
                <p><Badge id="cssBadgePeriodicity">
                {this.props.extPeriodicity}</Badge>{' '}</p>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
