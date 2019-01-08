import { CHANGE_FORM_STATE } from './actions';
import { SEND_FORM, SEND_FORM_SUCCESS, SEND_FORM_FAILURE } from './actions';

const initialState = {
  name: '',
  email: '',
  text: '',
  error: null,
  form: [],
};

const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_STATE:
      return { ...state, ...action.payload.formState };

    case SEND_FORM:
      return { ...state, error: null };

    case SEND_FORM_SUCCESS:
      return { ...state, error: null, form: action.payload.form };

    case SEND_FORM_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return { ...state };
  }
};

export default contactFormReducer;
