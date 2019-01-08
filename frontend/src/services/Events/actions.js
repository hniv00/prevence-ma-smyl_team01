export const FETCH_EVENTS = 'EVENTS.FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'EVENTS.FETCH_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'EVENTS.FETCH_FAILURE';

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
