import {SET_D_NAME} from './actions';
import {SET_D_DESCRIPTION} from './actions';
import {SET_D_EXAMINATION} from './actions';
import {FETCH_CREATED_DIAGNOSIS} from './actions';

const initialState = {
    name: null,
    description: null,
    examination : []
}
const diagnosisReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_D_NAME:
            return { ...state, name: action.payload.name }

        case SET_D_DESCRIPTION:
            return { ...state, description: action.payload.description }

        case SET_D_EXAMINATION:
            return { ...state, examination: action.payload.examination }

        case FETCH_CREATED_DIAGNOSIS:
            return { ...state, }

        default:
            return { ...state}
    }
}

export default diagnosisReducer;
