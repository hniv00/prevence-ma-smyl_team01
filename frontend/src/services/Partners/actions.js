import parseData from '../../helpers/ParseMultiSelect';

export const SET_DIAGNOSIS = 'SET_DIAGNOSIS';
export const FETCH_FILTERED_PARTNERS = 'FETCH_FILTERED_PARTNERS';
export const FETCH_FILTERED_PARTNERS_SUCCESS =
  'FETCH_FILTERED_PARTNERS_SUCCESS';
export const FETCH_FILTERED_PARTNERS_FAILURE =
  'FETCH_FILTERED_PARTNERS_FAILURE';

export const setDiagnosis = diagnosis => ({
  type: SET_DIAGNOSIS,
  payload: {
    diagnosis,
  },
});

export const fetchFilteredPartners = () => ({
  type: FETCH_FILTERED_PARTNERS,
});

export const fetchFilteredPartnersSuccess = partners => ({
  type: FETCH_FILTERED_PARTNERS_SUCCESS,
  payload: { partners },
});

export const fetchFilteredPartnersFailure = error => ({
  type: FETCH_FILTERED_PARTNERS_FAILURE,
  payload: { error },
});

export const startFetchFilteredPartners = () => (
  dispatch,
  getState,
  { api },
) => {
  dispatch(fetchFilteredPartners());
  let { filterPartner } = getState();
  let { diagnosis } = filterPartner;
  let parsedDiagnosis = parseData(diagnosis);
  if (diagnosis.length > 0) {
    api
      .post('partners/list/', { diagnosis: parsedDiagnosis })
      .then(({ data }) => {
        const { projects } = data;
        dispatch(fetchFilteredPartnersSuccess(projects));
      })
      .catch(() => {
        dispatch(
          fetchFilteredPartnersFailure('Failed fetching partner projects'),
        );
      });
  } else {
    api
      .post('partners/list/')
      .then(({ data }) => {
        const { projects } = data;
        dispatch(fetchFilteredPartnersSuccess(projects));
      })
      .catch(() => {
        dispatch(
          fetchFilteredPartnersFailure('Failed fetching partner projects'),
        );
      });
  }
};
