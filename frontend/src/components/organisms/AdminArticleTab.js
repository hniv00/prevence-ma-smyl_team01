import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getAdminArticles } from '../../services/AdminArticle/reducer';
import {
  startDeleteArticle,
  startFetchArticles,
} from '../../services/AdminArticle/actions';

export class AdminArticleTabRaw extends Component {
  componentDidMount() {
    this.props.startFetchArticles();
  }
  render() {
    const { articles } = this.props;

    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Název článku</th>

            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(item => (
            <tr key={item.IDArticle}>
              <th scope="row">{item.IDArticle}</th>
              <td>{item.ArticleName}</td>

              <td>
                <i
                  onClick={e => {
                    if (
                      window.confirm(
                        'Jste si jistí, že chcete odstranit tento článek?',
                      )
                    )
                      this.props.startDeleteArticle(item.IDArticle);
                  }}
                  className="material-icons"
                  id="cssFooterArrow"
                >
                  delete
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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
  startDeleteArticle,
};

export const AdminArticleTab = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminArticleTabRaw);
