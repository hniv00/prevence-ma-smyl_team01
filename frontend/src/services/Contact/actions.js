export const SET_NAME ='SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SEND_FORM = 'SEND_FORM';
export const SEND_FORM_SUCCESS = 'SEND_FORM_SUCCESS';
export const SEND_FORM_FAILURE = 'SEND_FORM_FAILURE';

export const setName = name => ({
    type: SET_NAME,
    payload : {
        name
    }
});

export const setEmail = email => ({
    type: SET_EMAIL,
    payload : {
        email
    }
});

export const setMessage = message => ({
    type: SET_MESSAGE,
    payload : {
        message
    }
});

export const sendForm = () => ({
    type: SEND_FORM
});

export const sendFormSuccess = form => ({
    type: SEND_FORM_SUCCESS,
    payload: {form}
});

export const sendFormFailure = error => ({
    type: SEND_FORM_FAILURE,
    payload: {error}
});
