import {GET_D_NAME} from './actions';
import {GET_D_AGE} from './actions';
import {FETCH_STORIES} from './actions';

const initialState = {
    name: null,
    age: null
}

const adminStoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_D_NAME:
            return { ...state, name: action.payload.name }

        case GET_D_AGE:
            return { ...state, age: action.payload.age }

        case FETCH_STORIES:
            return { ...state, }

        default:
            return { ...state}
    }
}

export default adminStoriesReducer;
