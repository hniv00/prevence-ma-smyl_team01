import { SET_I_NAME } from './actions';
import { SET_I_TYPE } from './actions';
import {
  FETCH_INDICATION,
  FETCH_INDICATION_SUCCESS,
  FETCH_INDICATION_FAILURE,
  DELETE_INDICATION,
  DELETE_INDICATION_SUCCESS,
  DELETE_INDICATION_FAILURE,
  CREATE_INDICATION,
  CREATE_INDICATION_SUCCESS,
  CREATE_INDICATION_FAILURE,
  CHANGE_INDICATION_STATE,
} from './actions';

const initialState = {
  name: null,
  type: null,
  indication: null,
  response: null,
};

const adminIndicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INDICATION_STATE:
      return { ...state, ...action.payload.indiParams };

    case SET_I_NAME:
      return { ...state, name: action.payload.name };

    case SET_I_TYPE:
      return { ...state, name: action.payload.type };

    case FETCH_INDICATION:
      return { ...state, error: null };

    case FETCH_INDICATION_SUCCESS:
      return { ...state, error: null, indication: action.payload.indication };

    case FETCH_INDICATION_FAILURE:
      return { ...state, error: action.payload.error };

    case DELETE_INDICATION:
      return { ...state, error: null };

    case DELETE_INDICATION_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case DELETE_INDICATION_FAILURE:
      return { ...state, error: action.payload.error };

    case CREATE_INDICATION:
      return { ...state, error: null };

    case CREATE_INDICATION_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case CREATE_INDICATION_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
export const getAdminIndication = state => state.indication || [];
export default adminIndicationsReducer;
