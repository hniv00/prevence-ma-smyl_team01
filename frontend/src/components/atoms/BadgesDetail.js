import React, { Component } from 'react';
import { Badge, Modal, ModalHeader, ModalBody } from 'reactstrap';

export class BadgesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const { modal } = this.state;
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div style={this.props.style}>
        <p>
          <Badge id="cssBadge" color="secondary" onClick={this.toggle}>
            {this.props.badge}
          </Badge>
        </p>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader
            id="cssCardExamination"
            toggle={this.toggle}
            close={closeBtn}
          >
            {this.props.badge}
          </ModalHeader>
          <ModalBody id="cssCardExamination">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Související preventivní vyšetření:</p>
            <p id="cssCardExaminationName">{this.props.examination}</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
