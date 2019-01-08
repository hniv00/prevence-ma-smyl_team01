import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import TextEllipsis from 'react-text-ellipsis';
import { getStories } from '../../services/Stories/reducer';
import { startFetchStories } from '../../services/Stories/actions';
import { getTwitterFeed } from '../../services/Stories/reducer';
import { startFetchTwitterFeed } from '../../services/Stories/actions';

export class StoriesRaw extends Component {
  componentDidMount() {
    this.props.startFetchStories();
    this.props.startFetchTwitterFeed();
  }

  render() {
    const { stories } = this.props;

    return (
      <div id="stories">
        <p id="cssContent">
          Příběhy za 5 minut 12. Ne každý má v životě štěstí. Někteří si ale
          díky včasné prevenci dokázali zachránit život. Ne vždy se to ale
          podaří. Prevence je důležitá a své o tom vědí právě lidé, kteří se
          nebojí svěřit se se svým příběhem. Máš i ty svůj osobní příběh, kdy
          jsi díky prevenci předešel zbytečným komplikacím, anebo víš naopak o
          někom, komu se nečinnost a nezájem o vlastní tělo vymstily? Sdílej
          svůj příběh s hashtagem #prevenceMaSmysl na Twitteru nebo Instagramu a
          inspiruj tak ostatní k tomu, aby se zajímali o své zdraví.
        </p>
        <Row>
          <Col md="6">
            {stories.map(item => (
              <Row>
                <Card id="cssCardStories" body>
                  <CardTitle>
                    {item.Name}, {item.Age}
                  </CardTitle>
                  <CardText>
                    <p
                      id="cssStoriesParagraph"
                      style={{ textAlign: 'justify' }}
                    >
                      {item.Description}
                    </p>
                  </CardText>
                </Card>
              </Row>
            ))}
          </Col>

          <Col md="6">
            <Col id="cssCardColumns">
              {this.props.twitterFeed.map(item => (
                <div
                  className="container"
                  style={{
                    maxWidth: '266px',
                    minWidth: '240px',
                    margin: '10px',
                  }}
                >
                  <img
                    src={item.src}
                    style={{
                      maxWidth: '266px',
                      minWidth: '240px',
                      marginTop: '10px',
                    }}
                    alt=""
                  />
                  <div className="overlay">
                    <div className="text">
                      <p
                        id="cssStoriesParagraph"
                        style={{
                          color: 'black',
                          textAlign: 'justify',
                          width: 'auto',
                          maxWidth: '266px',
                          minWidth: '200px',
                          margin: '30px',
                        }}
                      >
                        <TextEllipsis
                          lines={10}
                          tag={'p'}
                          ellipsisChars={'...'}
                          tagClass={'className'}
                          debounceTimeoutOnResize={200}
                          useJsOnly={true}
                        >
                          {item.text}
                        </TextEllipsis>
                      </p>
                    </div>
                  </div>
                  <h6>{item.user}</h6>
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const stories = getStories(state.showStories);
  const twitterFeed = getTwitterFeed(state.showStories);
  return {
    stories,
    twitterFeed,
  };
};

const mapDispatchToProps = {
  startFetchStories,
  startFetchTwitterFeed,
};

export const Stories = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoriesRaw);
