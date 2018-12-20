export const SET_E_NAME ='ADMIN_EVENTS.SET_E_NAME';
export const SET_E_DESCRIPTION = 'ADMIN_EVENTS.SET_E_DESCRIPTION';
export const SET_E_PLACE = 'ADMIN_EVENTS.SET_E_PLACE';
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

export const setName = name => ({
    type: SET_E_NAME,
    payload : {
        name
    }
});

export const setDescription = description => ({
    type: SET_E_DESCRIPTION,
    payload : {
        description
    }
});

export const setPlace = place => ({
    type: SET_E_PLACE,
    payload : {
        place
    }
});

export const setDate = date => ({
    type: SET_E_DATE,
    payload : {
        date
    }
});

export const setTime = time => ({
    type: SET_E_TIME,
    payload : {
        time
    }
});

export const setPrice = price => ({
    type: SET_E_PRICE,
    payload : {
        price
    }
});

export const setUrl = url => ({
    type: SET_E_URL,
    payload : {
        url
    }
});

export const fetchEvents = () => ({
    type: FETCH_EVENTS,
});

export const fetchEventsSuccess = events => ({
    type: FETCH_EVENTS_SUCCESS,
    payload: {events}
});

export const fetchEventsFailure = error => ({
    type: FETCH_EVENTS_FAILURE,
    payload: {error}
});

export const startFetchEvents = () => (dispatch, getState, { api }) => {
  dispatch(fetchEvents());
  api
  .get(`event/list`)
  .then(({ data }) => {
      let {eventList} = data;
    dispatch(fetchEventsSuccess(eventList));
  })
  .catch(fetchEventsFailure("Failed to fetch events"));
}

export const deleteEvent = () => ({
    type: DELETE_EVENT,
});

export const deleteEventSuccess = response => ({
    type: DELETE_EVENT_SUCCESS,
    payload: {response}
});

export const deleteEventFailure = error => ({
    type: DELETE_EVENT_FAILURE,
    payload: {error}
});

export const startDeleteEvent = (eventId) => (dispatch, getState, { api }) => {
  dispatch(deleteEvent());
  api
  .post(`event/delete/${eventId}`)
  .then(() => {
    dispatch(deleteEventSuccess("Event has been deleted"));
    dispatch(startFetchEvents());
  })
  .catch(deleteEventFailure("Failed to delete event"));
}
