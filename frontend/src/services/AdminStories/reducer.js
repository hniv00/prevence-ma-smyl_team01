import { GET_S_NAME, CHANGE_STORY_STATE } from './actions';
import { GET_S_AGE } from './actions';
import { GET_S_DESCRIPTION } from './actions';
import {
  FETCH_STORIES,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
} from './actions';
import {
  DELETE_STORY,
  DELETE_STORY_SUCCESS,
  DELETE_STORY_FAILURE,
} from './actions';
import {
  CREATE_STORY,
  CREATE_STORY_SUCCESS,
  CREATE_STORY_FAILURE,
} from './actions';

const initialState = {
  name: null,
  age: null,
  description: null,
  stories: null,
  response: null,
};

const adminStoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STORY_STATE:
      return { ...state, ...action.payload.storyParams };

    case GET_S_NAME:
      return { ...state, name: action.payload.name };

    case GET_S_AGE:
      return { ...state, age: action.payload.age };

    case GET_S_DESCRIPTION:
      return { ...state, description: action.payload.description };

    case FETCH_STORIES:
      return { ...state, error: null };

    case FETCH_STORIES_SUCCESS:
      return { ...state, error: null, stories: action.payload.stories };

    case FETCH_STORIES_FAILURE:
      return { ...state, error: action.payload.error };

    case DELETE_STORY:
      return { ...state, error: null };

    case DELETE_STORY_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case DELETE_STORY_FAILURE:
      return { ...state, error: action.payload.error };

    case CREATE_STORY:
      return { ...state, error: null };

    case CREATE_STORY_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case CREATE_STORY_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
export const getAdminStories = state => state.stories || [];
export default adminStoriesReducer;
