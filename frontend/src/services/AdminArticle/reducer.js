import {FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE} from './actions';
import {DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE} from './actions';

const initialState = {
    articles: null,
    response: null
};

const adminArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES:
            return { ...state, error: null }

        case FETCH_ARTICLES_SUCCESS:
            return { ...state, error: null, articles: action.payload.articles }

        case FETCH_ARTICLES_FAILURE:
            return { ...state, error: action.payload.error}

        case DELETE_ARTICLE:
            return { ...state, error: null }

        case DELETE_ARTICLE_SUCCESS:
            return { ...state, error: null, response: action.payload.response }

        case DELETE_ARTICLE_FAILURE:
            return { ...state, error: action.payload.error}

        default:
            return state
    }

}
export const getAdminArticles = state => state.articles || [];
export default adminArticlesReducer;
