import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from './actions';

const initialState = {
  events: null,
  response: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, error: null };

    case FETCH_EVENTS_SUCCESS:
      return { ...state, error: null, events: action.payload.events };

    case FETCH_EVENTS_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};

export const getEvents = state => state.events || [];
export default eventsReducer;
