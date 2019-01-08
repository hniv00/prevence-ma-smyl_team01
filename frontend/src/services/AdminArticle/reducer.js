import { SET_A_NAME } from './actions';
import { SET_A_TEXT } from './actions';
import { SET_A_PHOTO } from './actions';
import { SET_A_DIAGNOSIS } from './actions';
import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from './actions';
import {
  DELETE_ARTICLE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
} from './actions';

const initialState = {
  name: null,
  text: null,
  photo: null,
  diagnosis: [],
  articles: null,
  response: null,
};

const adminArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_A_NAME:
      return { ...state, name: action.payload.name };

    case SET_A_TEXT:
      return { ...state, text: action.payload.text };

    case SET_A_PHOTO:
      return { ...state, photo: action.payload.photo };

    case SET_A_DIAGNOSIS:
      return { ...state, diagnosis: action.payload.diagnosis };

    case FETCH_ARTICLES:
      return { ...state, error: null };

    case FETCH_ARTICLES_SUCCESS:
      return { ...state, error: null, articles: action.payload.articles };

    case FETCH_ARTICLES_FAILURE:
      return { ...state, error: action.payload.error };

    case DELETE_ARTICLE:
      return { ...state, error: null };

    case DELETE_ARTICLE_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case DELETE_ARTICLE_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
export const getAdminArticles = state => state.articles || [];
export default adminArticlesReducer;
