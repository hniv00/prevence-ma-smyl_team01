export const SET_E_NAME = 'ADMIN_EVENTS.SET_E_NAME';
export const SET_E_DESCRIPTION = 'ADMIN_EVENTS.SET_E_DESCRIPTION';
export const SET_E_PLACE_STREET = 'ADMIN_EVENTS.SET_E_PLACE_STREET';
export const SET_E_PLACE_NUM = 'ADMIN_EVENTS.SET_E_PLACE_NUM';
export const SET_E_PLACE_CITY = 'ADMIN_EVENTS.SET_E_PLACE_CITY';
export const SET_E_PLACE_ZIP = 'ADMIN_EVENTS.SET_E_PLACE_ZIP';
export const SET_E_DATE = 'ADMIN_EVENTS.SET_E_DATE';
export const SET_E_TIME = 'ADMIN_EVENTS.SET_E_TIME';
export const SET_E_PRICE = 'ADMIN_EVENTS.SET_E_PRICE';
export const SET_E_URL = 'ADMIN_EVENTS.SET_E_URL';
export const FETCH_EVENTS = 'ADMIN_EVENTS.FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'ADMIN_EVENTS.FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'ADMIN_EVENTS.FETCH_EVENTS_FAILURE';
export const DELETE_EVENT = 'ADMIN_EVENTS.DELETE_EVENT';
export const DELETE_EVENT_SUCCESS = 'ADMIN_EVENTS.DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'ADMIN_EVENTS.DELETE_EVENT_FAILURE';
export const CREATE_EVENT = 'ADMIN_EVENTS.CREATE_EVENT';
export const CREATE_EVENT_SUCCESS = 'ADMIN_EVENTS.CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAILURE = 'ADMIN_EVENTS.CREATE_EVENT_FAILURE';
export const CHANGE_EVENT_STATE = 'ADMIN_EVENTS.CHANGE_EVENT_STATE';

export const changeEventState = eventParams => ({
  type: CHANGE_EVENT_STATE,
  payload: {
    eventParams,
  },
});

export const setName = name => ({
  type: SET_E_NAME,
  payload: {
    name,
  },
});

export const setDescription = description => ({
  type: SET_E_DESCRIPTION,
  payload: {
    description,
  },
});

export const setPlaceStreet = street => ({
  type: SET_E_PLACE_STREET,
  payload: {
    street,
  },
});

export const setPlaceNum = num => ({
  type: SET_E_PLACE_NUM,
  payload: {
    num,
  },
});

export const setPlaceCity = city => ({
  type: SET_E_PLACE_CITY,
  payload: {
    city,
  },
});

export const setPlaceZIP = zip => ({
  type: SET_E_PLACE_ZIP,
  payload: {
    zip,
  },
});

export const setDate = date => ({
  type: SET_E_DATE,
  payload: {
    date,
  },
});

export const setTime = time => ({
  type: SET_E_TIME,
  payload: {
    time,
  },
});

export const setPrice = price => ({
  type: SET_E_PRICE,
  payload: {
    price,
  },
});

export const setUrl = url => ({
  type: SET_E_URL,
  payload: {
    url,
  },
});

export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

export const fetchEventsSuccess = events => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: { events },
});

export const fetchEventsFailure = error => ({
  type: FETCH_EVENTS_FAILURE,
  payload: { error },
});

export const startFetchEvents = () => (dispatch, getState, { api }) => {
  dispatch(fetchEvents());
  api
    .get(`event/list`)
    .then(({ data }) => {
      let { eventList } = data;
      dispatch(fetchEventsSuccess(eventList));
    })
    .catch(fetchEventsFailure('Failed to fetch events'));
};

export const deleteEvent = () => ({
  type: DELETE_EVENT,
});

export const deleteEventSuccess = response => ({
  type: DELETE_EVENT_SUCCESS,
  payload: { response },
});

export const deleteEventFailure = error => ({
  type: DELETE_EVENT_FAILURE,
  payload: { error },
});

export const startDeleteEvent = eventId => (dispatch, getState, { api }) => {
  dispatch(deleteEvent());
  api
    .post(`event/delete/${eventId}`)
    .then(() => {
      dispatch(deleteEventSuccess('Event has been deleted'));
      dispatch(startFetchEvents());
    })
    .catch(deleteEventFailure('Failed to delete event'));
};

export const createEvent = () => ({
  type: CREATE_EVENT,
});

export const createEventSuccess = response => ({
  type: CREATE_EVENT_SUCCESS,
  payload: { response },
});

export const createEventFailure = error => ({
  type: CREATE_EVENT_FAILURE,
  payload: { error },
});

export const startCreateEvent = () => (dispatch, getState, { api }) => {
  let eventState = getState().adminEvents;
  let body = {
    Name: eventState.name,
    Description: eventState.description,
    Date: eventState.date,
    Time: eventState.time,
    Street: eventState.street,
    StreetNum: eventState.num,
    City: eventState.city,
    PostalCode: eventState.zip,
    EntryFee: eventState.price,
    URL: eventState.url,
  };
  dispatch(createEvent());
  api
    .post(`event/new`, body)
    .then(() => {
      dispatch(createEventSuccess('Event has been created'));
      dispatch(startFetchEvents());
    })
    .catch(createEventFailure('Failed to create event'));
};
