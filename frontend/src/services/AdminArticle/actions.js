export const SET_A_NAME = 'ADMIN_ARTICLES.SET_A_NAME';
export const SET_A_TEXT = 'ADMIN_ARTICLES.SET_A_TEXT';
export const SET_A_PHOTO = 'ADMIN_ARTICLES.SET_A_PHOTO';
export const SET_A_DIAGNOSIS = 'ADMIN_ARTICLES.SET_A_DIAGNOSIS';
export const FETCH_ARTICLES = 'ADMIN_ARTICLES.FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'ADMIN_ARTICLES.FETCH_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'ADMIN_ARTICLES.FETCH_FAILURE';
export const DELETE_ARTICLE = 'ADMIN_ARTICLES.DELETE_ARTICLES';
export const DELETE_ARTICLE_SUCCESS = 'ADMIN_ARTICLES.DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_FAILURE = 'ADMIN_ARTICLES.DELETE_ARTICLE_FAILURE';

export const setName = name => ({
  type: SET_A_NAME,
  payload: {
    name,
  },
});

export const setText = text => ({
  type: SET_A_TEXT,
  payload: {
    text,
  },
});

export const setPhoto = photo => ({
  type: SET_A_PHOTO,
  payload: {
    photo,
  },
});

export const setDiagnosis = diagnosis => ({
  type: SET_A_DIAGNOSIS,
  payload: {
    diagnosis,
  },
});

export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});

export const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { articles },
});

export const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error },
});

export const startFetchArticles = () => (dispatch, getState, { api }) => {
  dispatch(fetchArticles());
  api
    .get(`article/list`)
    .then(({ data }) => {
      let { articleList } = data;
      dispatch(fetchArticlesSuccess(articleList));
    })
    .catch(fetchArticlesFailure('Failed to fetch articles'));
};

export const deleteArticle = () => ({
  type: DELETE_ARTICLE,
});

export const deleteArticleSuccess = response => ({
  type: DELETE_ARTICLE_SUCCESS,
  payload: { response },
});

export const deleteArticleFailure = error => ({
  type: DELETE_ARTICLE_FAILURE,
  payload: { error },
});

export const startDeleteArticle = articleId => (
  dispatch,
  getState,
  { api },
) => {
  dispatch(deleteArticle());
  api
    .post(`article/delete/${articleId}`)
    .then(() => {
      dispatch(deleteArticleSuccess(`Deleted article with ID ${articleId}`));
    })
    .catch(deleteArticleFailure('Failed to delete article'));
  dispatch(startFetchArticles());
};
