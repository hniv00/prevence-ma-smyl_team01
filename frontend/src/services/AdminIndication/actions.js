export const SET_I_NAME ='ADMIN_INDICATION.SET_I_NAME';
export const SET_I_DESCRIPTION = 'ADMIN_INDICATION.SET_I_DESCRIPTION';
export const SET_I_TYPE = 'ADMIN_INDICATION.SET_I_TYPE';
export const FETCH_INDICATION = 'ADMIN_INDICATION.FETCH_INDICATION';
export const FETCH_INDICATION_SUCCESS = 'ADMIN_INDICATION.FETCH_INDICATION_SUCCESS';
export const FETCH_INDICATION_FAILURE = 'ADMIN_INDICATION.FETCH_INDICATION_FAILURE';
export const DELETE_INDICATION = 'ADMIN_INDICATION.DELETE_INDICATION';
export const DELETE_INDICATION_SUCCESS = 'ADMIN_INDICATION.DELETE_INDICATION_SUCCESS';
export const DELETE_INDICATION_FAILURE = 'ADMIN_INDICATION.DELETE_INDICATION_FAILURE';

export const setName = name => ({
    type: SET_I_NAME,
    payload : {
        name
    }
});

export const setDescription = description => ({
    type: SET_I_DESCRIPTION,
    payload : {
        description
    }
});

export const setType = type => ({
    type: SET_I_TYPE,
    payload : {
        type
    }
});

export const fetchIndication = () => ({
    type: FETCH_INDICATION,
});

export const fetchIndicationSuccess = indication => ({
    type: FETCH_INDICATION_SUCCESS,
    payload: {indication}
});

export const fetchIndicationFailure = error => ({
    type: FETCH_INDICATION_FAILURE,
    payload: {error}
});

export const startFetchIndication = () => (dispatch, getState, { api }) => {
  dispatch(fetchIndication());
  api
  .get(`indication/list`)
  .then(({ data }) => {
      let {indications} = data;
    dispatch(fetchIndicationSuccess(indications));
  })
  .catch(fetchIndicationFailure("Failed to fetch indication"));
}

export const deleteIndication = () => ({
    type: DELETE_INDICATION,
});

export const deleteIndicationSuccess = response => ({
    type: DELETE_INDICATION_SUCCESS,
    payload: {response}
});

export const deleteIndicationFailure = error => ({
    type: DELETE_INDICATION_FAILURE,
    payload: {error}
});

export const startDeleteIndication = (indiId) => (dispatch, getState, { api }) => {
  dispatch(deleteIndication());
  api
  .post(`indication/delete/${indiId}`)
  .then(() => {
    dispatch(deleteIndicationSuccess("Indication has been deleted"));
    dispatch(startFetchIndication());
  })
  .catch(deleteIndicationFailure("Failed to delete indication"));
}
