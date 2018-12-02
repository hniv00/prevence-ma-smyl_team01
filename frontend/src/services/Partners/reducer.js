import {SET_DIAGNOSIS} from './actions';
import {FETCH_FILTERED_PARTNERS,
    FETCH_FILTERED_PARTNERS_SUCCESS,
    FETCH_FILTERED_PARTNERS_FAILURE} from './actions';

const initialState = {
    diagnosis: [],
    error : null,
    partners : []
}

const partnersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIAGNOSIS: {
          const { diagnosis } = action.payload;
          return {
            ...state,
            diagnosis,
          };
        }

        case FETCH_FILTERED_PARTNERS:
            return { ...state, error: null }

        case FETCH_FILTERED_PARTNERS_SUCCESS:
            return { ...state, error: null, partners: action.payload.partners }

        case FETCH_FILTERED_PARTNERS_FAILURE:
            return { ...state, error: action.payload.error}

        default:
          return state, console.log(state);

    }
};

export default partnersReducer;
