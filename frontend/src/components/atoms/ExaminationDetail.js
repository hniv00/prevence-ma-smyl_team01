import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';

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
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Button color="danger" onClick={this.toggle}>Zobrazit detail vyšetření</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Preventivní prohlídka</ModalHeader>
          <ModalBody>
            <p><Badge color="secondary">Obezita</Badge>{' '}
            <Badge color="secondary">Krátkozrakost</Badge></p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
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