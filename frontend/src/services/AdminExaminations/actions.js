export const FETCH_EXAMS = 'ADMIN_EXAMS.FETCH_EXAMS';
export const FETCH_EXAMS_SUCCESS = 'ADMIN_EXAMS.FETCH_SUCCESS';
export const FETCH_EXAMS_FAILURE = 'ADMIN_EXAMS.FETCH_FAILURE';
export const DELETE_EXAM = 'ADMIN_EXAMS.DELETE_EXAMS';
export const DELETE_EXAM_SUCCESS = 'ADMIN_EXAMS.DELETE_SUCCESS';
export const DELETE_EXAM_FAILURE = 'ADMIN_EXAMS.DELETE_FAILURE';

// -- READ -- //
export const fetchExams = () => ({
  type: FETCH_EXAMS,
});

export const fetchExamsSuccess = exams => ({
  type: FETCH_EXAMS_SUCCESS,
  payload: { exams },
});

export const fetchExamsFailure = error => ({
  type: FETCH_EXAMS_FAILURE,
  payload: { error },
});

export const startFetchExams = () => (dispatch, getState, { api }) => {
  dispatch(fetchExams());
  api
    .get(`examination/list`)
    .then(({ data }) => {
      let { exams } = data;
      dispatch(fetchExamsSuccess(exams));
    })
    .catch(fetchExamsFailure('Failed to fetch EXAMS'));
};

// -- DELETE -- //

export const deleteExam = () => ({
  type: DELETE_EXAM,
});

export const deleteExamSuccess = exams => ({
  type: DELETE_EXAM_SUCCESS,
  payload: { exams },
});

export const deleteExamFailure = error => ({
  type: DELETE_EXAM_FAILURE,
  payload: { error },
});

export const startDeleteExam = examId => (dispatch, getState, { api }) => {
  dispatch(deleteExam());
  api
    .post(`examination/deleteexam/${examId}`)
    .then(() => {
      dispatch(deleteExamSuccess(`Deleted examination with ID ${examId}`));
    })
    .catch(deleteExamFailure('Failed to delete EXAMS'));
  dispatch(startFetchExams());
};

export const SET_E_NAME = 'ADMIN_EXAMS.SET_E_NAME';
export const SET_E_DESCRIPTION = 'ADMIN_EXAMS.SET_E_DESCRIPTION';
export const SET_E_EXAMINATION = 'ADMIN_EXAMS.SET_E_EXAMINATION';
export const SET_E_DIAGNOSIS = 'ADMIN_EXAMS.SET_E_DIAGNOSIS';
export const SET_E_GENDER = 'ADMIN_EXAMS.SET_E_GENDER';
export const SET_E_PERIODICITY_BASIC = 'ADMIN_EXAMS.SET_E_PERIODICITY_BASIC';
export const SET_E_PERIODICITY_EXT = 'ADMIN_EXAMS.SET_E_PERIODICITY_EXT';
export const SET_E_AGE_FROM_BASIC = 'ADMIN_EXAMS.SET_E_AGE_FROM_BASIC';
export const SET_E_AGE_FROM_EXT = 'ADMIN_EXAMS.SET_E_AGE_FROM_EXT';
export const SET_E_AGE_UNTIL_BASIC = 'ADMIN_EXAMS.SET_E_AGE_UNTIL_BASIC';
export const SET_E_AGE_UNTIL_EXT = 'ADMIN_EXAMS.SET_E_AGE_UNTIL_EXT';
export const SET_E_INDICATION_NEEDED = 'ADMIN_EXAMS.SET_E_INDICATION_NEEDED';

export const CREATE_EXAMINATION = 'ADMIN_EXAMS.CREATE_EXAMINATION';
export const CREATE_EXAMINATION_SUCCESS =
  'ADMIN_EXAMS.CREATE_EXAMINATION_SUCCESS';
export const CREATE_EXAMINATION_FAILURE =
  'ADMIN_EXAMS.CREATE_EXAMINATION_FAILURE';
export const CHANGE_EXAMINATION_STATE = 'ADMIN_EXAMS.CHANGE_EXAMINATION_STATE';

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

export const setExamination = examination => ({
  type: SET_E_EXAMINATION,
  payload: {
    examination,
  },
});

export const setDiagnosis = diagnosis => ({
  type: SET_E_DIAGNOSIS,
  payload: {
    diagnosis,
  },
});

export const setGender = gender => ({
  type: SET_E_GENDER,
  payload: {
    gender,
  },
});

export const setPeriodicityBasic = perbasic => ({
  type: SET_E_PERIODICITY_BASIC,
  payload: {
    perbasic,
  },
});

export const setPeriodicityExt = perext => ({
  type: SET_E_PERIODICITY_EXT,
  payload: {
    perext,
  },
});

export const setAgeFromBasic = agefrombasic => ({
  type: SET_E_AGE_FROM_BASIC,
  payload: {
    agefrombasic,
  },
});

export const setAgeFromExt = agefromext => ({
  type: SET_E_AGE_FROM_EXT,
  payload: {
    agefromext,
  },
});

export const setAgeUntilBasic = ageuntilbasic => ({
  type: SET_E_AGE_UNTIL_BASIC,
  payload: {
    ageuntilbasic,
  },
});

export const setAgeUntilExt = ageuntilext => ({
  type: SET_E_AGE_UNTIL_EXT,
  payload: {
    ageuntilext,
  },
});

export const setIndicationNeeded = indineeded => ({
  type: SET_E_INDICATION_NEEDED,
  payload: {
    indineeded,
  },
});

export const changeExaminationState = examParams => ({
  type: CHANGE_EXAMINATION_STATE,
  payload: {
    examParams,
  },
});

// -- CREATE -- //

export const createExamination = () => ({
  type: CREATE_EXAMINATION,
});

export const createExaminationSuccess = response => ({
  type: CREATE_EXAMINATION_SUCCESS,
  payload: { response },
});

export const createExaminationFailure = error => ({
  type: CREATE_EXAMINATION_FAILURE,
  payload: { error },
});

export const startCreateExamination = () => (dispatch, getState, { api }) => {
  let examState = getState().adminExams;

  let body = {
    ExamName: examState.name,
    Description: examState.description,
    AgeFrom_basic: examState.agefrombasic,
    AgeFrom_ext: examState.agefromext,
    AgeUntil_basic: examState.ageuntilbasic,
    AgeUntil_ext: examState.ageuntilext,
    Gender: examState.gender,
    Periodicity_basic: examState.perbasic,
    Periodicity_ext: examState.perext,
    IndicationNeeded: examState.indineeded,
  };
  dispatch(createExamination());
  api
    .post(`examination/new`, body)
    .then(() => {
      dispatch(createExaminationSuccess('Examination has been created'));
      dispatch(startFetchExams());
    })
    .catch(createExaminationFailure('Failed to create examination'));
};
