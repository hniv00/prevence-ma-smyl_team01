import {GET_S_NAME} from './actions';
import {GET_S_AGE} from './actions';
import {FETCH_STORIES} from './actions';

const initialState = {
    name: null,
    age: null,
    stories: null,
};

const adminStoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_S_NAME:
            return { ...state, name: action.payload.name }

        case GET_S_AGE:
            return { ...state, age: action.payload.age }

        case FETCH_STORIES:
            return { ...state, }

        default:
            return { ...state}
    }

}
export
const getAdminStories = state => state.stories || [];
export default adminStoriesReducer;
