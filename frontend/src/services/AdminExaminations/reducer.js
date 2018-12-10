import {FETCH_EXAMS, FETCH_EXAMS_SUCCESS, FETCH_EXAMS_FAILURE} from './actions';
import {DELETE_EXAM, DELETE_EXAM_SUCCESS, DELETE_EXAM_FAILURE} from './actions';

const initialState = {
    exams: null,
    response: null
};

const adminExamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXAMS:
            return { ...state, error: null }

        case FETCH_EXAMS_SUCCESS:
            return { ...state, error: null, exams: action.payload.exams }

        case FETCH_EXAMS_FAILURE:
            return { ...state, error: action.payload.error}

        case DELETE_EXAM:
            return { ...state, error: null }

        case DELETE_EXAM_SUCCESS:
            return { ...state, error: null, response: action.payload.response}

        case DELETE_EXAM_FAILURE:
            return { ...state, error: action.payload.error }

        default:
            return state
    }

}
export const getAdminExams = state => state.exams || [];
export default adminExamsReducer;
