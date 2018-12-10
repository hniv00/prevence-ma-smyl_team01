import {SET_NAME} from './actions';
import {SET_EMAIL} from './actions';
import {SET_MESSAGE} from './actions';
import {SEND_FORM, SEND_FORM_SUCCESS, SEND_FORM_FAILURE} from './actions';

const initialState = {
    name: '',
    email: '',
    message: '',
    error: null,
    form: []
}

const contactFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload.name }

        case SET_EMAIL:
            return { ...state, email: action.payload.email }

        case SET_MESSAGE:
            return { ...state, message: action.payload.message }

        case SEND_FORM:
            return { ...state, error: null }

        case SEND_FORM_SUCCESS:
            return { ...state, error: null, form: action.payload.form }

        case SEND_FORM_FAILURE:
            return { ...state, error: action.payload.error}

        default:
            return { ...state}
    }
}

export default contactFormReducer;
