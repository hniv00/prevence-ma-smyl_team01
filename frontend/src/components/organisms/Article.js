import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { getAdminArticles } from '../../services/AdminArticle/reducer';
import { startFetchArticles } from '../../services/AdminArticle/actions';

export class ArticleRaw extends Component {
  componentDidMount() {
    this.props.startFetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <div id="articles">
        {articles.map((item, i) => (
          <div id={item.IDArticle}>
            <Row>
              <Col xs="12">
                <h4 style={{ color: 'black', marginTop: '50px' }}>
                  {item.ArticleName}
                </h4>
              </Col>
              {i % 2 === 1 && (
                <Col xs="12" sm="4">
                  <img
                    src={item.Photo}
                    className="img"
                    style={{ maxWidth: '300px' }}
                    alt=""
                  />
                </Col>
              )}

              <Col xs="12" sm="8">
                <p id="cssContent">{item.ArticleText}</p>
              </Col>

              {i % 2 !== 1 && (
                <Col xs="12" sm="4">
                  <img src={item.Photo} className="img" alt="" />
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

const mapStateToProps = state => {
  const articles = getAdminArticles(state.adminArticles);

  return {
    articles,
  };
};

const mapDispatchToProps = {
  startFetchArticles,
};

export const Article = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleRaw);
