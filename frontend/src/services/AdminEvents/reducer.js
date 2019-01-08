import { SET_E_NAME } from './actions';
import { SET_E_DESCRIPTION } from './actions';
import {
  SET_E_PLACE_STREET,
  SET_E_PLACE_NUM,
  SET_E_PLACE_CITY,
  SET_E_PLACE_ZIP,
} from './actions';
import { SET_E_DATE } from './actions';
import { SET_E_TIME } from './actions';
import { SET_E_PRICE } from './actions';
import { SET_E_URL } from './actions';
import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  DELETE_EVENT,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
} from './actions';
import {
  CREATE_EVENT,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  CHANGE_EVENT_STATE,
} from './actions';

const initialState = {
  name: '',
  description: '',
  street: '',
  num: '',
  city: '',
  zip: '',
  date: null,
  time: null,
  price: null,
  url: '',
  events: null,
  response: '',
};

const adminEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EVENT_STATE:
      return { ...state, ...action.payload.eventParams };

    case SET_E_NAME:
      return { ...state, name: action.payload.name };

    case SET_E_DESCRIPTION:
      return { ...state, description: action.payload.description };

    case SET_E_PLACE_STREET:
      return { ...state, place: action.payload.street };

    case SET_E_PLACE_NUM:
      return { ...state, place: action.payload.num };

    case SET_E_PLACE_CITY:
      return { ...state, place: action.payload.city };

    case SET_E_PLACE_ZIP:
      return { ...state, place: action.payload.zip };

    case SET_E_DATE:
      return { ...state, date: action.payload.date };

    case SET_E_TIME:
      return { ...state, time: action.payload.time };

    case SET_E_PRICE:
      return { ...state, price: action.payload.price };

    case SET_E_URL:
      return { ...state, url: action.payload.url };

    case FETCH_EVENTS:
      return { ...state, error: null };

    case FETCH_EVENTS_SUCCESS:
      return { ...state, error: null, events: action.payload.events };

    case FETCH_EVENTS_FAILURE:
      return { ...state, error: action.payload.error };

    case DELETE_EVENT:
      return { ...state, error: null };

    case DELETE_EVENT_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case DELETE_EVENT_FAILURE:
      return { ...state, error: action.payload.error };

    case CREATE_EVENT:
      return { ...state, error: null };

    case CREATE_EVENT_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case CREATE_EVENT_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
export const getAdminEvents = state => state.events || [];
export default adminEventsReducer;
