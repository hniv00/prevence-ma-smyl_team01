export const FETCH_ARTICLES = 'ADMIN_ARTICLES.FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'ADMIN_ARTICLES.FETCH_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'ADMIN_ARTICLES.FETCH_FAILURE';
export const DELETE_ARTICLE = 'ADMIN_ARTICLES.DELETE_ARTICLES';
export const DELETE_ARTICLE_SUCCESS = 'ADMIN_ARTICLES.DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_FAILURE = 'ADMIN_ARTICLES.DELETE_ARTICLE_FAILURE';

export const fetchArticles = () => ({
    type: FETCH_ARTICLES,
});

export const fetchArticlesSuccess = articles => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: {articles}
});

export const fetchArticlesFailure = error => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: {error}
});

export const startfetchArticles = () => (dispatch, getState, { api }) => {
  dispatch(fetchArticles());
  api
  .get(`article/list`)
  .then(({ data }) => {
      let {articles} = data;
    dispatch(fetchArticlesSuccess(articles));
  })
  .catch(fetchArticlesFailure("Failed to fetch articles"));
}

 // -- DELETE -- //

 export const deleteArticle = () => ({
    type: DELETE_ARTICLE,
});

export const deleteArticleSuccess = response => ({
    type: DELETE_ARTICLE_SUCCESS,
    payload: {response}
});

export const deleteArticleFailure = error => ({
    type: DELETE_ARTICLE_FAILURE,
    payload: {error}
});

export const startDeleteArticle = (articleId) => (dispatch, getState, { api }) => {
  dispatch(deleteArticle());
  api
  .post(`article/delete/${articleId}`)
  .then(() => {
    dispatch(deleteArticleSuccess(`Deleted article with ID ${articleId}`));
  })
  .catch(deleteArticleFailure("Failed to delete article"));
  dispatch(startFetchArticles())
}
