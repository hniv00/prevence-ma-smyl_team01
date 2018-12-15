import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';
import { getAdminArticles } from '../../services/AdminArticle/reducer';
import { startFetchArticles, startDeleteArticle } from '../../services/AdminArticle/actions'

export class AdminArticleTabRaw extends Component {

  componentDidMount(){
    this.props.startFetchArticles();
  }
  render() {
    const { articles } = this.props;
    console.log(this.props);
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Název článku</th>
            {/* <th>Upravit</th> */}
            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {articles.map( item => (
            <tr key={item.IDStory}>
              <th scope="row">{item.IDStory}</th>
              <td>{item.Name}, {item.Age}</td>
              {/* <td><a href=""><i class="material-icons" id="cssFooterArrow">create</i></a></td> */}
              <td><i onClick={() =>{this.props.startDeleteStory(item.IDStory)}} class="material-icons" id="cssFooterArrow">delete</i></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  const articles = getAdminArticles(state.adminArticles);

  return {
    articles,
  };
};

const mapDispatchToProps = {
  startFetchArticles,
  startDeleteArticle
}

export const AdminArticleTab = connect(mapStateToProps, mapDispatchToProps)(AdminArticleTabRaw);
