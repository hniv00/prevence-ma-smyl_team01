import {GET_S_NAME} from './actions';
import {GET_S_AGE} from './actions';
import {FETCH_STORIES, FETCH_STORIES_SUCCESS, FETCH_STORIES_FAILURE} from './actions';
import {DELETE_STORY, DELETE_STORY_SUCCESS, DELETE_STORY_FAILURE} from './actions';

const initialState = {
    name: null,
    age: null,
    stories: null,
    response: null
};

const adminStoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_S_NAME:
            return { ...state, name: action.payload.name }

        case GET_S_AGE:
            return { ...state, age: action.payload.age }

        case FETCH_STORIES:
            return { ...state, error: null }

        case FETCH_STORIES_SUCCESS:
            return { ...state, error: null, stories: action.payload.stories }

        case FETCH_STORIES_FAILURE:
            return { ...state, error: action.payload.error}

        case DELETE_STORY:
            return { ...state, error: null }

        case DELETE_STORY_SUCCESS:
            return { ...state, error: null, response: action.payload.response }

        case DELETE_STORY_FAILURE:
            return { ...state, error: action.payload.error}

        default:
            return state
    }

}
export const getAdminStories = state => state.stories || [];
export default adminStoriesReducer;
