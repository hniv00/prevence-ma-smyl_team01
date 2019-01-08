import { SET_GENDER } from './actions';
import { SET_AGE } from './actions';
import { SET_ANAMNESIS } from './actions';
import { SET_DISEASE } from './actions';
import { SET_LIFESTYLE } from './actions';
import { SET_HEIGHT } from './actions';
import { SET_WEIGHT } from './actions';
import {
  FETCH_FILTERED_EXAMINATION,
  FETCH_FILTERED_EXAMINATION_SUCCESS,
  FETCH_FILTERED_EXAMINATION_FAILURE,
} from './actions';

const initialState = {
  gender: 0,
  age: 35,
  anamnesis: [],
  disease: [],
  lifeStyle: [],
  height: 170,
  weight: 60,
  error: null,
  examinations: [],
};
const filtrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENDER:
      return { ...state, gender: action.payload.gender };

    case SET_AGE:
      return { ...state, age: action.payload.age };

    case SET_ANAMNESIS:
      return { ...state, anamnesis: action.payload.anamnesis };

    case SET_DISEASE:
      return { ...state, disease: action.payload.disease };

    case SET_LIFESTYLE:
      return { ...state, lifeStyle: action.payload.lifeStyle };

    case SET_HEIGHT:
      return { ...state, height: action.payload.height };

    case SET_WEIGHT:
      return { ...state, weight: action.payload.weight };

    case FETCH_FILTERED_EXAMINATION:
      return { ...state, error: null };

    case FETCH_FILTERED_EXAMINATION_SUCCESS:
      return {
        ...state,
        error: null,
        examinations: action.payload.examinations,
      };

    case FETCH_FILTERED_EXAMINATION_FAILURE:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};

export default filtrationReducer;
