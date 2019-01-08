import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { startFetchFilteredPartners } from '../../services/Partners/actions';

export class PartnersRaw extends Component {
  componentDidMount() {
    this.props.startFetchFilteredPartners();
  }

  render() {
    this.data = this.props.partners;
    return (
      <div>
        {this.data.map((item, i) => (
          <div id={item.DivID}>
            <Row>
              {i % 2 === 1 && (
                <Col xs="12" sm="4">
                  <img src={item.Src} className="imgRound" alt={item.SrcAlt} />
                </Col>
              )}

              <Col xs="12" sm="8">
                <h5 style={{ textTransform: 'uppercase' }}>{item.Name}</h5>
                <p id="cssContent">{item.Description}</p>
              </Col>

              {i % 2 !== 1 && (
                <Col xs="12" sm="4">
                  <img src={item.Src} className="imgRound" alt={item.SrcAlt} />
                </Col>
              )}
            </Row>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  partners: state.filterPartner.partners,
});

const mapDispatchToProps = {
  startFetchFilteredPartners,
};

export const Partners = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PartnersRaw);
