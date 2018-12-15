import {FETCH_INDICATION,
    FETCH_INDICATION_SUCCESS,
    FETCH_INDICATION_FAILURE,
    DELETE_INDICATION,
    DELETE_INDICATION_SUCCESS,
    DELETE_INDICATION_FAILURE,
    CREATE_INDICATION,
    CREATE_INDICATION_SUCCESS,
    CREATE_INDICATION_FAILURE} from './actions';

const initialState = {
    indication: null,
    response: null
}

const adminIndicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INDICATION:
            return { ...state, error: null }

        case FETCH_INDICATION_SUCCESS:
            return { ...state, error: null, indication: action.payload.indication}

        case FETCH_INDICATION_FAILURE:
            return { ...state, error: action.payload.error }

        case DELETE_INDICATION:
            return { ...state, error: null }

        case DELETE_INDICATION_SUCCESS:
            return { ...state, error: null, response: action.payload.response}

        case DELETE_INDICATION_FAILURE:
            return { ...state, error: action.payload.error }

        default:
            return state
    }
}
export const getAdminIndication = state => state.indication || [];
export default adminIndicationReducer;
