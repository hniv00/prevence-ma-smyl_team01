import { SET_E_NAME } from './actions';
import { SET_E_DESCRIPTION } from './actions';
import { SET_E_EXAMINATION } from './actions';
import { SET_E_DIAGNOSIS } from './actions';
import { SET_E_GENDER } from './actions';
import { SET_E_PERIODICITY_BASIC } from './actions';
import { SET_E_PERIODICITY_EXT } from './actions';
import { SET_E_AGE_FROM_BASIC } from './actions';
import { SET_E_AGE_FROM_EXT } from './actions';
import { SET_E_AGE_UNTIL_BASIC } from './actions';
import { SET_E_AGE_UNTIL_EXT } from './actions';
import { SET_E_INDICATION_NEEDED } from './actions';

import {
  FETCH_EXAMS,
  FETCH_EXAMS_SUCCESS,
  FETCH_EXAMS_FAILURE,
} from './actions';
import {
  DELETE_EXAM,
  DELETE_EXAM_SUCCESS,
  DELETE_EXAM_FAILURE,
} from './actions';
import {
  CREATE_EXAMINATION,
  CREATE_EXAMINATION_SUCCESS,
  CREATE_EXAMINATION_FAILURE,
} from './actions';
import { CHANGE_EXAMINATION_STATE } from './actions';

const initialState = {
  name: null,
  description: null,
  agefrombasic: null,
  agefromext: null,
  ageuntilbasic: null,
  ageuntilext: null,
  gender: null,
  perbasic: null,
  perext: null,
  indineeded: null,
  exams: null,
  response: null,
};

const adminExamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EXAMINATION_STATE:
      return { ...state, ...action.payload.examParams };

    case SET_E_NAME:
      return { ...state, name: action.payload.name };

    case SET_E_DESCRIPTION:
      return { ...state, description: action.payload.description };

    case SET_E_EXAMINATION:
      return { ...state, examination: action.payload.examination };

    case SET_E_DIAGNOSIS:
      return { ...state, diagnosis: action.payload.diagnosis };

    case SET_E_GENDER:
      return { ...state, gender: action.payload.gender };

    case SET_E_PERIODICITY_BASIC:
      return { ...state, perbasic: action.payload.perbasic };

    case SET_E_PERIODICITY_EXT:
      return { ...state, perext: action.payload.perext };

    case SET_E_AGE_FROM_BASIC:
      return { ...state, agefrombasic: action.payload.agefrombasic };

    case SET_E_AGE_FROM_EXT:
      return { ...state, agefromext: action.payload.agefromext };

    case SET_E_AGE_UNTIL_BASIC:
      return { ...state, ageuntilbasic: action.payload.ageuntilbasic };

    case SET_E_AGE_UNTIL_EXT:
      return { ...state, ageuntilext: action.payload.ageuntilext };

    case SET_E_INDICATION_NEEDED:
      return { ...state, indineeded: action.payload.indineeded };

    case FETCH_EXAMS:
      return { ...state, error: null };

    case FETCH_EXAMS_SUCCESS:
      return { ...state, error: null, exams: action.payload.exams };

    case FETCH_EXAMS_FAILURE:
      return { ...state, error: action.payload.error };

    case DELETE_EXAM:
      return { ...state, error: null };

    case DELETE_EXAM_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case DELETE_EXAM_FAILURE:
      return { ...state, error: action.payload.error };

    case CREATE_EXAMINATION:
      return { ...state, error: null };

    case CREATE_EXAMINATION_SUCCESS:
      return { ...state, error: null, response: action.payload.response };

    case CREATE_EXAMINATION_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
export const getAdminExams = state => state.exams || [];
export default adminExamsReducer;
