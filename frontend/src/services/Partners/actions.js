export const SET_DIAGNOSIS ='SET_DIAGNOSIS';
export const FETCH_FILTERED_PARTNERS = 'FETCH_FILTERED_PARTNERS';
export const FETCH_FILTERED_PARTNERS_SUCCESS = 'FETCH_FILTERED_PARTNERS_SUCCESS';
export const FETCH_FILTERED_PARTNERS_FAILURE = 'FETCH_FILTERED_PARTNERS_FAILURE';

export const setDiagnosis = diagnosis => ({
    type: SET_DIAGNOSIS,
    payload : {
        diagnosis
    }
});

export const fetchFilteredPartners = () => ({
    type: FETCH_FILTERED_PARTNERS
});

export const fetchFilteredPartnersSuccess = partners => ({
    type: FETCH_FILTERED_PARTNERS_SUCCESS,
    payload: {partners}
});

export const fetchFilteredPartnersFailure = error => ({
    type: FETCH_FILTERED_PARTNERS_FAILURE,
    payload: {error}
});

export const startFetchFilteredPartners = () => (dispatch, getState, { api }) => {
    dispatch(fetchFilteredPartners());
    let {filterPartner} = getState();
    let {diagnosis} = filterPartner;

    if(diagnosis.length > 0 ){
        api
        .post('/list/', {diagnosis: diagnosis})
        .then(({ data }) => {
          const {partners} = data;
          dispatch(fetchFilteredPartnersSuccess(partners));
        })
        .catch(() => {
          dispatch(fetchFilteredPartnersFailure('Failed fetching partner projects'));
        });
    }
    else{
        api
        .post('/list/')
        .then(({ data }) => {
          const {partners} = data;
          dispatch(fetchFilteredPartnersSuccess(partners));
        })
        .catch(() => {
          dispatch(fetchFilteredPartnersFailure('Failed fetching partner projects'));
        });
    }
}
