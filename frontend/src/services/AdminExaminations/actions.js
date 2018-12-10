export const FETCH_EXAMS = 'ADMIN_EXAMS.FETCH_EXAMS';
export const FETCH_EXAMS_SUCCESS = 'ADMIN_EXAMS.FETCH_SUCCESS';
export const FETCH_EXAMS_FAILURE = 'ADMIN_EXAMS.FETCH_FAILURE';

export const fetchExams = () => ({
    type: FETCH_EXAMS,
});

export const fetchExamsSuccess = exams => ({
    type: FETCH_EXAMS_SUCCESS,
    payload: {exams}
});

export const fetchExamsFailure = error => ({
    type: FETCH_EXAMS_FAILURE,
    payload: {error}
});

export const startFetchExams = () => (dispatch, getState, { api }) => {
  dispatch(fetchExams());
  api
  .get(`examination/`)
  .then(({ data }) => {
      let {exams} = data;
    dispatch(fetchExamsSuccess(exams));
  })
  .catch(fetchExamsFailure("Failed to fetch EXAMS"));
}
