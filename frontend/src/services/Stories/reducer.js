import {FETCH_STORIES, FETCH_STORIES_SUCCESS, FETCH_STORIES_FAILURE} from './actions';


const initialState = {
    stories: null,
    response: null
};

const storiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STORIES:
          return { ...state, error: null }

      case FETCH_STORIES_SUCCESS:
          return { ...state, error: null, stories: action.payload.stories }

      case FETCH_STORIES_FAILURE:
          return { ...state, error: action.payload.error}

        default:
          return state;
    }
};

export const getStories = state => state.stories || [];
export default storiesReducer;
