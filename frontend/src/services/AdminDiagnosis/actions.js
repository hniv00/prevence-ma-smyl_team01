export const SET_D_NAME = 'ADMIN_DIAGNOSIS.SET_D_NAME';
export const SET_D_DESCRIPTION = 'ADMIN_DIAGNOSIS.SET_D_DESCRIPTION';
export const SET_D_EXAMINATION = 'ADMIN_DIAGNOSIS.SET_D_EXAMINATION';
export const FETCH_DIAGNOSIS = 'ADMIN_DIAGNOSIS.FETCH_DIAGNOSIS';
export const FETCH_DIAGNOSIS_SUCCESS =
  'ADMIN_DIAGNOSIS.FETCH_DIAGNOSIS_SUCCESS';
export const FETCH_DIAGNOSIS_FAILURE =
  'ADMIN_DIAGNOSIS.FETCH_DIAGNOSIS_FAILURE';
export const DELETE_DIAGNOSIS = 'ADMIN_DIAGNOSIS.DELETE_DIAGNOSIS';
export const DELETE_DIAGNOSIS_SUCCESS =
  'ADMIN_DIAGNOSIS.DELETE_DIAGNOSIS_SUCCESS';
export const DELETE_DIAGNOSIS_FAILURE =
  'ADMIN_DIAGNOSIS.DELETE_DIAGNOSIS_FAILURE';
export const CREATE_DIAGNOSIS = 'ADMIN_DIAGNOSIS.CREATE_DIAGNOSIS';
export const CREATE_DIAGNOSIS_SUCCESS =
  'ADMIN_DIAGNOSIS.CREATE_DIAGNOSIS_SUCCESS';
export const CREATE_DIAGNOSIS_FAILURE =
  'ADMIN_DIAGNOSIS.CREATE_DIAGNOSIS_FAILURE';
export const CHANGE_DIAGNOSIS_STATE = 'ADMIN.DIAGNOSIS.CHANGE_DIAGNOSIS_STATE';

export const changeDiagnosisState = diagParams => ({
  type: CHANGE_DIAGNOSIS_STATE,
  payload: {
    diagParams,
  },
});

export const setName = name => ({
  type: SET_D_NAME,
  payload: {
    name,
  },
});

export const setDescription = description => ({
  type: SET_D_DESCRIPTION,
  payload: {
    description,
  },
});

export const setExamination = examination => ({
  type: SET_D_EXAMINATION,
  payload: {
    examination,
  },
});

export const fetchDiagnosis = () => ({
  type: FETCH_DIAGNOSIS,
});

export const fetchDiagnosisSuccess = diagnosis => ({
  type: FETCH_DIAGNOSIS_SUCCESS,
  payload: { diagnosis },
});

export const fetchDiagnosisFailure = error => ({
  type: FETCH_DIAGNOSIS_FAILURE,
  payload: { error },
});

export const startFetchDiagnosis = () => (dispatch, getState, { api }) => {
  dispatch(fetchDiagnosis());
  api
    .get(`diagnosis/list`)
    .then(({ data }) => {
      let { diagList } = data;
      dispatch(fetchDiagnosisSuccess(diagList));
    })
    .catch(fetchDiagnosisFailure('Failed to fetch diagnosis'));
};

export const deleteDiagnosis = () => ({
  type: DELETE_DIAGNOSIS,
});

export const deleteDiagnosisSuccess = response => ({
  type: DELETE_DIAGNOSIS_SUCCESS,
  payload: { response },
});

export const deleteDiagnosisFailure = error => ({
  type: DELETE_DIAGNOSIS_FAILURE,
  payload: { error },
});

export const startDeleteDiagnosis = diagId => (dispatch, getState, { api }) => {
  dispatch(deleteDiagnosis());
  api
    .post(`diagnosis/delete/${diagId}`)
    .then(() => {
      dispatch(deleteDiagnosisSuccess('Diagnosis has been deleted'));
      dispatch(startFetchDiagnosis());
    })
    .catch(deleteDiagnosisFailure('Failed to delete diagnosis'));
};

export const createDiagnosis = () => ({
  type: CREATE_DIAGNOSIS,
});

export const createDiagnosisSuccess = response => ({
  type: CREATE_DIAGNOSIS_SUCCESS,
  payload: { response },
});

export const createDiagnosisFailure = error => ({
  type: CREATE_DIAGNOSIS_FAILURE,
  payload: { error },
});

export const startCreateDiagnosis = () => (dispatch, getState, { api }) => {
  let diagState = getState().adminDiagnosis;
  let body = { Name: diagState.name, Description: diagState.Description };
  dispatch(createDiagnosis());
  api
    .post(`diagnosis/new`, body)
    .then(() => {
      dispatch(createDiagnosisSuccess('Diagnosis has been created'));
      dispatch(startFetchDiagnosis());
    })
    .catch(createDiagnosisFailure('Failed to create diagnosis'));
};
