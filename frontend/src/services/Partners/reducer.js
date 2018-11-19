import {SET_DIAGNOSIS} from './actions';

const initialState = {
    diagnosis: []
}

const partnersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIAGNOSIS:
            return { ...state, diagnosis: action.payload.diagnosis }

        default:
            return state;
    }
}

export default partnersReducer;
