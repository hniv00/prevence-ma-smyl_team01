import {SET_DIAGNOSIS} from './actions';

const initialState = {
    diagnosis: []
}

const partnersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIAGNOSIS: {
          const { diagnosis } = action.payload;
          return {
            ...state,
            diagnosis,
          };
        }

        default:
          return state;

    }
};

export const getDiagnosis = state => state.diagnosis;
export default partnersReducer;
