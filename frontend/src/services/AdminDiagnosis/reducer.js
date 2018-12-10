import {SET_D_NAME} from './actions';
import {SET_D_DESCRIPTION} from './actions';
import {SET_D_EXAMINATION} from './actions';
import {FETCH_DIAGNOSIS, FETCH_DIAGNOSIS_SUCCESS, FETCH_DIAGNOSIS_FAILURE} from './actions';

const initialState = {
    name: null,
    description: null,
    examination : [],
    diagnosis: null,
}
const adminDiagnosisReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_D_NAME:
            return { ...state, name: action.payload.name }

        case SET_D_DESCRIPTION:
            return { ...state, description: action.payload.description }

        case SET_D_EXAMINATION:
            return { ...state, examination: action.payload.examination }

        case FETCH_DIAGNOSIS:
            return { ...state, error: null }

        case FETCH_DIAGNOSIS_SUCCESS:
            return { ...state, error: null, diagnosis: action.payload.diagnosis}

        case FETCH_DIAGNOSIS_FAILURE:
            return { ...state, error: action.payload.error }

        default:
            return { ...state}
    }
}
export const getAdminDiagnosis = state => state.diagnosis || [];
export default adminDiagnosisReducer;