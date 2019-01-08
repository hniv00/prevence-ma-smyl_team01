export const SET_I_NAME = 'ADMIN_INDICATION.SET_I_NAME';
export const SET_I_TYPE = 'ADMIN_INDICATION.SET_I_TYPE';
export const FETCH_INDICATION = 'ADMIN_INDICATION.FETCH_INDICATION';
export const FETCH_INDICATION_SUCCESS =
  'ADMIN_INDICATION.FETCH_INDICATION_SUCCESS';
export const FETCH_INDICATION_FAILURE =
  'ADMIN_INDICATION.FETCH_INDICATION_FAILURE';
export const DELETE_INDICATION = 'ADMIN_INDICATION.DELETE_INDICATION';
export const DELETE_INDICATION_SUCCESS =
  'ADMIN_INDICATION.DELETE_INDICATION_SUCCESS';
export const DELETE_INDICATION_FAILURE =
  'ADMIN_INDICATION.DELETE_INDICATION_FAILURE';
export const CREATE_INDICATION = 'ADMIN_INDICATION.CREATE_INDICATION';
export const CREATE_INDICATION_SUCCESS =
  'ADMIN_INDICATION.CREATE_INDICATION_SUCCESS';
export const CREATE_INDICATION_FAILURE =
  'ADMIN_INDICATION.CREATE_INDICATION_FAILURE';
export const CHANGE_INDICATION_STATE =
  'ADMIN_INDICATION.CHANGE_INDICATION_STATE';

export const changeIndicationState = indiParams => ({
  type: CHANGE_INDICATION_STATE,
  payload: {
    indiParams,
  },
});

export const setName = name => ({
  type: SET_I_NAME,
  payload: {
    name,
  },
});

export const setType = type => ({
  type: SET_I_TYPE,
  payload: {
    type,
  },
});

export const fetchIndication = () => ({
  type: FETCH_INDICATION,
});

export const fetchIndicationSuccess = indication => ({
  type: FETCH_INDICATION_SUCCESS,
  payload: { indication },
});

export const fetchIndicationFailure = error => ({
  type: FETCH_INDICATION_FAILURE,
  payload: { error },
});

export const startFetchIndication = () => (dispatch, getState, { api }) => {
  dispatch(fetchIndication());
  api
    .get(`indication/list`)
    .then(({ data }) => {
      let { indications } = data;
      dispatch(fetchIndicationSuccess(indications));
    })
    .catch(fetchIndicationFailure('Failed to fetch indication'));
};

export const deleteIndication = () => ({
  type: DELETE_INDICATION,
});

export const deleteIndicationSuccess = response => ({
  type: DELETE_INDICATION_SUCCESS,
  payload: { response },
});

export const deleteIndicationFailure = error => ({
  type: DELETE_INDICATION_FAILURE,
  payload: { error },
});

export const startDeleteIndication = indiId => (
  dispatch,
  getState,
  { api },
) => {
  dispatch(deleteIndication());
  api
    .post(`indication/delete/${indiId}`)
    .then(() => {
      dispatch(deleteIndicationSuccess('Indication has been deleted'));
      dispatch(startFetchIndication());
    })
    .catch(deleteIndicationFailure('Failed to delete indication'));
};

export const createIndication = () => ({
  type: CREATE_INDICATION,
});

export const createIndicationSuccess = response => ({
  type: CREATE_INDICATION_SUCCESS,
  payload: { response },
});

export const createIndicationFailure = error => ({
  type: CREATE_INDICATION_FAILURE,
  payload: { error },
});

export const startCreateIndication = () => (dispatch, getState, { api }) => {
  let indiState = getState().adminIndications;

  let body = { NameInd: indiState.name, Type: indiState.type };
  dispatch(createIndication());
  api
    .post(`indication/new`, body)
    .then(() => {
      dispatch(createIndicationSuccess('Indication has been created'));
      dispatch(startFetchIndication());
    })
    .catch(createIndicationFailure('Failed to create indication'));
};
