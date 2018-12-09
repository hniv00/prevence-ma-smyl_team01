import {SET_E_NAME} from './actions';
import {SET_E_DESCRIPTION} from './actions';
import {SET_E_EXAMINATION} from './actions';
import {FETCH_CREATED_EXAMINATIONS} from './actions';

const initialState = {
    name: null,
    description: null,
    examination : []
}
const diagnosisReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_E_NAME:
            return { ...state, name: action.payload.name }

        case SET_E_DESCRIPTION:
            return { ...state, description: action.payload.description }

        case SET_E_EXAMINATION:
            return { ...state, examination: action.payload.examination }

        case FETCH_CREATED_EXAMINATIONS:
            return { ...state, }

        default:
            return { ...state}
    }
}

export default examinationsReducer;
