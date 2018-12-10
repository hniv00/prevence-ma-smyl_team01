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

 // -- DELETE -- //

 export const deleteExam = () => ({
    type: DELETE_EXAM,
});

export const deleteExamSuccess = exams => ({
    type: DELETE_EXAM_SUCCESS,
    payload: {exams}
});

export const deleteExamFailure = error => ({
    type: DELETE_EXAM_FAILURE,
    payload: {error}
});

export const startDeleteExam = (examId) => (dispatch, getState, { api }) => {
  dispatch(deleteExam());
  api
  .post(`examination/deleteexam/${examId}`)
  .then(() => {
    dispatch(deleteExamSuccess(`Deleted examination with ID ${examId}`));
  })
  .catch(deleteExamFailure("Failed to delete EXAMS"));
  dispatch(startFetchExams())
}