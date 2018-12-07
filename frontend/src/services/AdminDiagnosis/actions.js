export const SET_D_NAME ='ADMIN_DIAGNOSIS.SET_D_NAME';
export const SET_D_DESCRIPTION = 'ADMIN_DIAGNOSIS.SET_D_DESCRIPTION';
export const SET_D_EXAMINATION = 'ADMIN_DIAGNOSIS.SET_D_EXAMINATION';
export const FETCH_DIAGNOSIS = 'ADMIN_DIAGNOSIS.FETCH_DIAGNOSIS';
export const FETCH_DIAGNOSIS_SUCCESS = 'ADMIN_DIAGNOSIS.FETCH_DIAGNOSIS_SUCCESS';
export const FETCH_DIAGNOSIS_FAILURE = 'ADMIN_DIAGNOSIS.FETCH_DIAGNOSIS_FAILURE';

export const setName = name => ({
    type: SET_D_NAME,
    payload : {
        name
    }
});

export const setDescription = description => ({
    type: SET_D_DESCRIPTION,
    payload : {
        description
    }
});

export const setExamination = examination => ({
    type: SET_D_EXAMINATION,
    payload : {
        examination
    }
});

export const fetchDiagnosis = () => ({
    type: FETCH_DIAGNOSIS,
});

export const fetchDiagnosisSuccess = diagnosis => ({
    type: FETCH_DIAGNOSIS_SUCCESS,
    payload: {diagnosis}
});

export const fetchDiagnosisFailure = error => ({
    type: FETCH_DIAGNOSIS_FAILURE,
    payload: {error}
});

export const startFetchDiagnosis = () => (dispatch, getState, { api }) => {
  dispatch(fetchDiagnosis());
  api
  .get(`diagnosis/list`)
  .then(({ data }) => {
      let {diagnosis} = data;
    dispatch(fetchDiagnosisSuccess(diagnosis));
  })
  .catch(fetchDiagnosisFailure("Failed to fetch diagnosis"));
}
