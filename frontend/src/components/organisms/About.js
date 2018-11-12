import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

import loono from '../../img/loono.jpg';

export class About extends Component {
  render() {
    return (
    <div id="cssAboutProject" >
      <div className="parallax-content">
        <h4>O projektu</h4>
          <Row>
            <Col xs="12" sm="8">
              <p id="cssContent" id="cssAboutText">Jsme tým lidí, kterým zdraví není lhostejné. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </Col>
            <Col xs="12" sm="4">
              <img src={loono} class="imgRound" alt="Loono tým"/>
            </Col>
          </Row>
          <a id="cssFooterArrow" href="#stories" ><i class="material-icons" style={{position: 'absolute' , right: '5%'}}>expand_more</i></a>
      </div>
    </div>
  );
}
};
